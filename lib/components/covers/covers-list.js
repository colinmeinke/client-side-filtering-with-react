import React from 'react';

class CoversList extends React.Component {

  highlight ( title ) {
    if ( this.props.highlightText ) {
      return title.replace( new RegExp( this.props.highlightText, 'i' ), ( found ) => {
        return `<strong>${ found }</strong>`;
      });
    }

    return title;
  }

  render () {
    let covers = [];

    this.props.covers.forEach(( cover, i ) => {
      covers.push(
        <li className="list-group-item pull-left"
            key={ i }>
          <a href={ cover.url }>
            <img src={ cover.image } />
            <h3 className="list-group-item-heading">
              <small dangerouslySetInnerHTML={{ '__html': this.highlight( cover.title ) }}></small>
            </h3>
          </a>
        </li>
      );
    });

    return (
      <section className="container">
        <ul className="list-group clearfix">
          { covers }
        </ul>
      </section>
    );
  }

}

CoversList.propTypes = {
  'covers': React.PropTypes.array,
  'highlightText': React.PropTypes.string,
};

CoversList.defaultProps = {
  'covers': [],
  'highlightText': '',
}

export default CoversList;
