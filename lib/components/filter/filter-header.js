import React from 'react';

class FilterHeader extends React.Component {

  render () {
    return (
      <div className="page-header">
        <h1 className="container">
          Nollywood movies
        </h1>
        <h2 className="container">
          <small>Showing <strong>all</strong> movies.</small>
        </h2>
      </div>
    );
  }

}

export default FilterHeader;
