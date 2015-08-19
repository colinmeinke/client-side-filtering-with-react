import React from 'react';

class Select extends React.Component {

  onClick ( e ) {
    const state = e.target.dataset;

    e.preventDefault();

    this.props.onClickCallback({
      'key': state.key,
      'name': state.name,
    });
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
          { this.props.name } <span className="caret"></span>
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
  'name': React.PropTypes.string,
  'onClickCallback': React.PropTypes.func,
};

Select.defaultProps = {
  'items': {},
  'name': '',
  'onClickCallback': () => {},
};

export default Select;
