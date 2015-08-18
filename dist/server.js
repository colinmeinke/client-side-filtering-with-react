'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _clone = require('clone');

var _clone2 = _interopRequireDefault(_clone);

var _apiCovers = require('./api/covers');

var _apiCovers2 = _interopRequireDefault(_apiCovers);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _componentsFilterFilter = require('./components/filter/filter');

var _componentsFilterFilter2 = _interopRequireDefault(_componentsFilterFilter);

var _apiFilters = require('./api/filters');

var _apiFilters2 = _interopRequireDefault(_apiFilters);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var app = (0, _express2['default'])();

app.engine('hbs', (0, _expressHandlebars2['default'])());

app.get('/browser.js', function (req, res) {
  res.sendFile(_path2['default'].join(__dirname, '..', 'dist/browser.js'));
});

app.get('/filter.html', function (req, res) {
  var props = {
    'covers': _apiCovers2['default'],
    'filters': (0, _clone2['default'])(_apiFilters2['default']),
    'initialTerm': req.query.term || ''
  };

  var filter = req.query.filter || 'title';

  props.filters[filter].selected = true;

  for (var key in props.filters) {
    if (props.filters[key].selected) {
      props.initialFilterKey = key;
      props.initialFilterName = props.filters[key].name;
    }
  }

  res.render('../template.hbs', {
    'data': {
      'filter': props.initialFilterKey,
      'term': props.initialTerm
    },
    'content': _react2['default'].renderToString(_react2['default'].createElement(_componentsFilterFilter2['default'], props))
  });
});

app.listen(3000);