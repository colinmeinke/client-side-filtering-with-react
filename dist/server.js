'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
  var state = _extends({
    'filter': 'title',
    'term': ''
  }, req.query);

  var props = {
    'covers': _apiCovers2['default'],
    'filters': _extends({}, _apiFilters2['default']),
    'initialFilterKey': state.filter,
    'initialFilterName': _apiFilters2['default'][state.filter].name,
    'initialTerm': state.term
  };

  props.filters[state.filter].selected = true;

  res.render('../template.hbs', {
    'content': _react2['default'].renderToString(_react2['default'].createElement(_componentsFilterFilter2['default'], props)),
    'state': state,
    'title': 'Client-side filtering with React'
  });
});

app.listen(3000);