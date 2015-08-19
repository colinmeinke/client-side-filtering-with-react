import covers from './api/covers';
import Filter from './components/filter/filter';
import filters from './api/filters';
import React from 'react';

const { ...state } = document.body.dataset;

state.filter = JSON.parse( state.filter );

const props = {
  'covers': covers,
  'filters': { ...filters },
  'initialFilter': state.filter,
  'initialTerm': state.term,
};

props.filters[ state.filter.key ].selected = true;

history.replaceState( state, document.title, window.location.href );

React.render(
  <Filter { ...props } />,
  document.getElementById( 'content' )
);
