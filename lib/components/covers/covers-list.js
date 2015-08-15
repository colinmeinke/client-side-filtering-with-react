import React from 'react';

class CoversList extends React.Component {

  constructor ( props ) {
    super( props );

    this.state = {
      'covers': props.initialCovers,
    };
  }

  render () {
    let covers = [];

    this.state.covers.forEach(( cover, i ) => {
      covers.push(
        <li className="list-group-item pull-left"
            key={ i }>
          <a href={ cover.url }>
            <img src={ cover.image } />
            <h3 className="list-group-item-heading">
              <small>{ cover.title }</small>
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
  'initialCovers':  React.PropTypes.array,
};

CoversList.defaultProps = {
  'initialCovers': [],
}

export default CoversList;
