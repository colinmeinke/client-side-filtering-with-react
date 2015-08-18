const filters = {
  'actor': {
    'name': 'Actor',
    'title': `Showing movies with an
      <strong>actor</strong> whose name includes
      <strong>:term</strong>.`,
    'func': ( cover, term ) => {
      const t = term.toLowerCase();

      for ( let i = 0, l = cover.actors.length; i < l; i++ ) {
        if ( cover.actors[ i ].toLowerCase().indexOf( t ) > -1 ) {
          return true;
        }
      }

      return false;
    },
  },
  'plot': {
    'name': 'Plot',
    'title': `Showing movies with a <strong>plot</strong>
      that includes <strong>:term</strong>.`,
    'func': ( cover, term ) => {
      return cover.plot.toLowerCase().indexOf( term.toLowerCase()) > -1;
    },
  },
  'rating': {
    'name': 'Rating',
    'title': `Showing movies with a <strong>rating</strong>
      of at least <strong>:term%</strong>.`,
    'func': ( cover, term ) => {
      return cover.rating >= parseInt( term, 10 );
    },
  },
  'title': {
    'name': 'Title',
    'title': `Showing movies with a <strong>title</strong>
      that includes <strong>:term</strong>.`,
    'func': ( cover, term ) => {
      return cover.title.toLowerCase().indexOf( term.toLowerCase()) > -1;
    },
  },
  'year': {
    'name': 'Year',
    'title': `Showing movies <strong>released</strong>
      in <strong>:term</strong>.`,
    'func': ( cover, term ) => {
      return cover.year === parseInt( term, 10 );
    },
  },
};

export default filters;
