import CoversList from '../covers/covers-list';
import FilterForm from './filter-form';
import FilterHeader from './filter-header';
import React from 'react';

class Filter extends React.Component {

  render () {
    return (
      <form name="filter">
        <FilterHeader />
        <FilterForm filters={ this.props.filters }
                    initialFilterTitle={ this.props.initialFilterTitle }
                    initialFilterValue={ this.props.initialFilterValue }
                    initialTerm={ this.props.initialTerm } />
        <hr />
        <CoversList initialCovers={ this.props.initialCovers } />
      </form>
    );
  }

}

Filter.propTypes = {
  'filters': React.PropTypes.object,
  'initialCovers': React.PropTypes.array,
  'initialFilterTitle': React.PropTypes.string,
  'initialFilterValue': React.PropTypes.string,
  'initialTerm': React.PropTypes.string,
};

Filter.defaultProps = {
  'filters': {},
  'initialCovers': [],
  'initialFilterTitle': '',
  'initialFilterValue': '',
  'initialTerm': '',
};

export default Filter;
