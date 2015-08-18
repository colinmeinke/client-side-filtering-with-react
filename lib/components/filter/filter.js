import CoversList from '../covers/covers-list';
import FilterForm from './filter-form';
import FilterHeader from './filter-header';
import React from 'react';

class Filter extends React.Component {

  constructor ( props ) {
    super( props );

    this.state = {
      'covers': this.filterCovers( this.props.filters[ this.props.initialFilterKey ].func, this.props.initialTerm ),
      'highlightText': this.props.initialFilterKey === 'title' ? this.props.initialTerm : '',
      'title': this.getTitle( this.props.initialFilterKey, this.props.initialTerm ),
    };
  }

  onFormChange ( data ) {
    const { filter, term } = data;

    const covers = term ?
      this.filterCovers( this.props.filters[ filter ].func, term ) :
      this.props.covers;

    this.setState({
      'covers': covers,
      'highlightText': filter === 'title' ? term : '',
      'title': this.getTitle( filter, term ),
    });
  }

  getTitle ( filter, term ) {
    if ( term ) {
      const title = this.props.filters[ filter ].title;
      return title.replace( ':term', term.toLowerCase());
    }

    return 'Showing <strong>all</strong> movies.';
  }

  filterCovers ( func, term ) {
    const covers = [];

    this.props.covers.forEach( cover => {
      if ( func( cover, term )) {
        covers.push( cover );
      }
    });

    return covers;
  }

  getFilterKeyNamePairs () {
    const filters = {};

    for ( let key in this.props.filters ) {
      filters[ key ] = this.props.filters[ key ].name;
    }

    return filters;
  }

  render () {
    return (
      <form name="filter">
        <FilterHeader title={ this.state.title } />
        <FilterForm filters={ this.getFilterKeyNamePairs( this.props.filters ) }
                    initialFilterKey={ this.props.initialFilterKey }
                    initialFilterName={ this.props.initialFilterName }
                    initialTerm={ this.props.initialTerm }
                    onChangeCallback={ this.onFormChange.bind( this ) } />
        <hr />
        <CoversList covers={ this.state.covers }
                    highlightText={ this.state.highlightText } />
      </form>
    );
  }

}

Filter.propTypes = {
  'covers': React.PropTypes.array,
  'filters': React.PropTypes.object,
  'initialFilterKey': React.PropTypes.string,
  'initialFilterName': React.PropTypes.string,
  'initialTerm': React.PropTypes.string,
};

Filter.defaultProps = {
  'covers': [],
  'filters': {},
  'initialFilterKey': '',
  'initialFilterName': '',
  'initialTerm': '',
};

export default Filter;
