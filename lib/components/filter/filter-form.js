import React from 'react';
import Select from '../select/select';

class FilterForm extends React.Component {

  constructor ( props ) {
    super( props );

    this.state = {
      'term': props.initialTerm,
    };
  }

  update ( e ) {
    this.setState({
      'term': e.target.value,
    });
  }

  render () {
    return (
      <section className="container input-group">
        <Select items={ this.props.filters }
                initialTitle={ this.props.initialFilterTitle }
                initialValue={ this.props.initialFilterValue } />
        <input className="form-control"
               type="text"
               placeholder="search"
               onChange={ this.update } />
      </section>
    );
  }

}

FilterForm.propTypes = {
  'filters': React.PropTypes.object,
  'initialFilterTitle': React.PropTypes.string,
  'initialFilterValue': React.PropTypes.string,
  'initialTerm': React.PropTypes.string,
};

FilterForm.defaultProps = {
  'filters': {},
  'initialFilterTitle': '',
  'initialFilterValue': '',
  'initialTerm': '',
};

export default FilterForm;
