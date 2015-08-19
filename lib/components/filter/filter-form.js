import React from 'react';
import Select from '../select/select';

class FilterForm extends React.Component {

  constructor ( props ) {
    super( props );

    this.state = {
      'filter': props.initialFilter,
      'term': props.initialTerm,
    };

    this.popstateHandlerRef = this.popstateHandler.bind( this );
  }

  componentDidMount () {
    window.addEventListener( 'popstate', this.popstateHandlerRef );
  }

  componentWillUnmount () {
    window.removeEventListener( 'popstate', this.popstateHandlerRef );
  }

  popstateHandler ( e ) {
    this.onChange( e.state, false )
  }

  onFilterChange ( filter ) {
    const state = {
      'filter': filter,
      'term': this.state.term,
    };

    this.onChange( state )
  }

  onTermChange ( e ) {
    const state = {
      'filter': this.state.filter,
      'term': e.target.value,
    };

    this.onChange( state )
  }

  onChange ( state, pushState = true ) {
    this.setState( state );
    this.props.onChangeCallback( state );

    if ( pushState ) {
      history.pushState( state, document.title, this.getURL( state ));
    }
  }

  getURL ( state ) {
    let url = `${ window.location.href.split( '?' )[ 0 ] }?filterKey=${ state.filter.key }`;

    if ( state.term ) {
      url += `&term=${ state.term.replace( / /g, '+' ) }`;
    }

    return url;
  }

  render () {
    return (
      <section className="container input-group">
        <Select items={ this.props.filters }
                name={ this.state.filter.name }
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
  'initialFilter': React.PropTypes.object,
  'initialTerm': React.PropTypes.string,
  'onChangeCallback': React.PropTypes.func,
};

FilterForm.defaultProps = {
  'filters': {},
  'initialFilter': {
    'key': '',
    'name': '',
  },
  'initialTerm': '',
  'onChangeCallback': () => {},
};

export default FilterForm;
