import React from 'react';

class Select extends React.Component {

  constructor ( props ) {
    super( props );

    this.state = {
      'name': this.props.initialName,
    };
  }

  onClick ( e ) {
    const { key, name } = e.target.dataset;

    e.preventDefault();

    this.setState({
      'name': name,
    });

    this.props.onClickCallback( key );
  }

  render () {
    let items = [];

    for ( let key in this.props.items ) {
      const name = this.props.items[ key ];

      items.push(
        <li key={ key }>
          <a href="#"
             data-key={ key }
             data-name={ name }
             onClick={ this.onClick.bind( this ) }>
            { name }
          </a>
        </li>
      );
    }

    return (
      <div className="input-group-btn">
        <button type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown">
          { this.state.name } <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          { items }
        </ul>
      </div>
    );
  }

}

Select.propTypes = {
  'items': React.PropTypes.object,
  'initialName': React.PropTypes.string,
  'onClickCallback': React.PropTypes.func,
};

Select.defaultProps = {
  'items': {},
  'initialName': '',
  'onClickCallback': () => {},
};

export default Select;
