import covers from './api/covers';
import Filter from './components/filter/filter';
import filters from './api/filters';
import React from 'react';

const { ...state } = document.body.dataset;

const props = {
  'covers': covers,
  'filters': { ...filters },
  'initialFilterKey': state.filter,
  'initialFilterName': filters[ state.filter ].name,
  'initialTerm': state.term,
};

props.filters[ state.filter ].selected = true;

history.replaceState( state, document.title, window.location.href );

React.render(
  <Filter { ...props } />,
  document.getElementById( 'content' )
);
