import covers from './api/covers';
import Filter from './components/filter/filter';
import filters from './api/filters';
import React from 'react';

filters.title.selected = true;

const props = {
  'covers': covers,
  'filters': filters,
  'initialTerm': '',
};

for ( let key in filters ) {
  if ( filters[ key ].selected ) {
    props.initialFilterKey = key;
    props.initialFilterName = filters[ key ].name;
  }
}

React.render(
  <Filter { ...props } />,
  document.body
);
