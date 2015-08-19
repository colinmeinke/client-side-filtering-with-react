import CoversList from '../covers/covers-list';
import FilterForm from './filter-form';
import FilterHeader from './filter-header';
import React from 'react';

class Filter extends React.Component {

  constructor ( props ) {
    super( props );

    this.state = {
      'covers': this.filterCovers( this.props.filters[ this.props.initialFilter.key ].func, this.props.initialTerm ),
      'highlightText': this.props.initialFilter.key === 'title' ? this.props.initialTerm : '',
      'title': this.getTitle( this.props.initialFilter.key, this.props.initialTerm ),
    };
  }

  onFormChange ( data ) {
    const { filter, term } = data;

    const covers = term ?
      this.filterCovers( this.props.filters[ filter.key ].func, term ) :
      this.props.covers;

    this.setState({
      'covers': covers,
      'highlightText': filter.key === 'title' ? term : '',
      'title': this.getTitle( filter.key, term ),
    });
  }

  getTitle ( filterKey, term ) {
    if ( term ) {
      const title = this.props.filters[ filterKey ].title;
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
                    initialFilter={ this.props.initialFilter }
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
  'initialFilter': React.PropTypes.object,
  'initialTerm': React.PropTypes.string,
};

Filter.defaultProps = {
  'covers': [],
  'filters': {},
  'initialFilter': {
    'key': '',
    'name': '',
  },
  'initialTerm': '',
};

export default Filter;
