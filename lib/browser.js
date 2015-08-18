import clone from 'clone';
import covers from './api/covers';
import Filter from './components/filter/filter';
import filters from './api/filters';
import React from 'react';

const { filter, term } = document.body.dataset;

const props = {
  'covers': covers,
  'filters': clone( filters ),
  'initialFilterKey': filter,
  'initialFilterName': filters[ filter ].name,
  'initialTerm': term,
};

props.filters[ filter ].selected = true;

React.render(
  <Filter { ...props } />,
  document.getElementById( 'content' )
);
