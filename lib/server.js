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
  const state = {
    'filter': 'title',
    'term': '',
    ...req.query,
  };

  const props = {
    'covers': covers,
    'filters': { ...filters },
    'initialFilterKey': state.filter,
    'initialFilterName': filters[ state.filter ].name,
    'initialTerm': state.term,
  };

  props.filters[ state.filter ].selected = true;

  res.render( '../template.hbs', {
    'content': React.renderToString( <Filter { ...props } /> ),
    'state': state,
    'title': 'Client-side filtering with React',
  });
});

app.listen( 3000 );
