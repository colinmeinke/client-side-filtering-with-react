import React from 'react';

class Select extends React.Component {

  constructor ( props ) {
    super( props );

    this.state = {
      'title': this.props.initialTitle,
      'value': this.props.initialValue,
    };
  }

  update ( e ) {
    const { title, value } = e.target.dataset;

    e.preventDefault();

    this.setState({
      'title': title,
      'value': value,
    });
  }

  render () {
    let items = [];

    for ( let k in this.props.items ) {
      const title = this.props.items[ k ];

      items.push(
        <li key={ k }>
          <a href="#"
             data-title={ title }
             data-value={ k }
             onClick={ this.update.bind( this ) }>
            { title }
          </a>
        </li>
      );
    }

    return (
      <div className="input-group-btn">
        <button type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown">
          { this.state.title } <span className="caret"></span>
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
  'initialTitle': React.PropTypes.string,
  'initialValue': React.PropTypes.string,
};

Select.defaultProps = {
  'items': {},
  'initialTitle': '',
  'initialValue': '',
};

export default Select;
