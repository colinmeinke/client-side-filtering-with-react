'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var filters = {
  'actor': {
    'name': 'Actor',
    'title': 'Showing movies with an\n      <strong>actor</strong> whose name includes\n      <strong>:term</strong>.',
    'func': function func(cover, term) {
      var t = term.toLowerCase();

      for (var i = 0, l = cover.actors.length; i < l; i++) {
        if (cover.actors[i].toLowerCase().indexOf(t) > -1) {
          return true;
        }
      }

      return false;
    }
  },
  'plot': {
    'name': 'Plot',
    'title': 'Showing movies with a <strong>plot</strong>\n      that includes <strong>:term</strong>.',
    'func': function func(cover, term) {
      return cover.plot.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }
  },
  'rating': {
    'name': 'Rating',
    'title': 'Showing movies with a <strong>rating</strong>\n      of at least <strong>:term%</strong>.',
    'func': function func(cover, term) {
      return cover.rating >= parseInt(term, 10);
    }
  },
  'title': {
    'name': 'Title',
    'title': 'Showing movies with a <strong>title</strong>\n      that includes <strong>:term</strong>.',
    'func': function func(cover, term) {
      return cover.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }
  },
  'year': {
    'name': 'Year',
    'title': 'Showing movies <strong>released</strong>\n      in <strong>:term</strong>.',
    'func': function func(cover, term) {
      return cover.year === parseInt(term, 10);
    }
  }
};

exports['default'] = filters;
module.exports = exports['default'];