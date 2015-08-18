import clone from 'clone';
import covers from './api/covers';
import express from 'express';
import Filter from './components/filter/filter';
import filters from './api/filters';
import handlebars from 'express-handlebars';
import path from 'path';
import React from 'react';

const app = express();

app.engine( 'hbs', handlebars());

app.get( '/browser.js', ( req, res ) => {
  res.sendFile( path.join( __dirname, '..', 'dist/browser.js' ));
});

app.get( '/filter.html', ( req, res ) => {
  const props = {
    'covers': covers,
    'filters': clone( filters ),
    'initialTerm': req.query.term || '',
  };

  const filter = req.query.filter || 'title';

  props.filters[ filter ].selected = true;

  for ( let key in props.filters ) {
    if ( props.filters[ key ].selected ) {
      props.initialFilterKey = key;
      props.initialFilterName = props.filters[ key ].name;
    }
  }

  res.render( '../template.hbs', {
    'data': {
      'filter': props.initialFilterKey,
      'term': props.initialTerm,
    },
    'content': React.renderToString( <Filter { ...props } /> ),
    'title': 'Client-side filtering with React',
  });
});

app.listen( 3000 );
