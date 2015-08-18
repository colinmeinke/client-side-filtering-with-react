import React from 'react';
import Select from '../select/select';

class FilterForm extends React.Component {

  constructor ( props ) {
    super( props );

    this.state = {
      'filter': props.initialFilterKey,
      'term': props.initialTerm,
    };
  }

  onFilterChange ( filter ) {
    const state = {
      'filter': filter,
      'term': this.state.term,
    };

    this.setState( state );
    this.props.onChangeCallback( state );
  }

  onTermChange ( e ) {
    const state = {
      'filter': this.state.filter,
      'term': e.target.value,
    };

    this.setState( state );
    this.props.onChangeCallback( state );
  }

  render () {
    return (
      <section className="container input-group">
        <Select items={ this.props.filters }
                initialName={ this.props.initialFilterName }
                onClickCallback={ this.onFilterChange.bind( this ) } />
        <input className="form-control"
               type="text"
               value={ this.state.term }
               placeholder="search"
               onChange={ this.onTermChange.bind( this ) } />
      </section>
    );
  }

}

FilterForm.propTypes = {
  'filters': React.PropTypes.object,
  'initialFilterName': React.PropTypes.string,
  'initialFilterKey': React.PropTypes.string,
  'initialTerm': React.PropTypes.string,
  'onChangeCallback': React.PropTypes.func,
};

FilterForm.defaultProps = {
  'filters': {},
  'initialFilterName': '',
  'initialFilterKey': '',
  'initialTerm': '',
  'onChangeCallback': () => {},
};

export default FilterForm;
