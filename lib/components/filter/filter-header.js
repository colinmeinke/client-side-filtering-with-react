import React from 'react';

class FilterHeader extends React.Component {

  render () {
    return (
      <div className="page-header">
        <h1 className="container">
          Nollywood movies
        </h1>
        <h2 className="container">
          <small dangerouslySetInnerHTML={{ '__html': this.props.title }}></small>
        </h2>
      </div>
    );
  }

}

FilterHeader.propTypes = {
  'title': React.PropTypes.string,
};

FilterHeader.defaultProps = {
  'title': '',
};

export default FilterHeader;
