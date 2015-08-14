'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var app = (0, _express2['default'])();

app.get('/app.js', function (req, res) {
  res.sendFile(_path2['default'].join(__dirname, '..', 'dist/app.js'));
});

app.get('/filter.html', function (req, res) {
  res.sendFile(_path2['default'].join(__dirname, '..', 'filter.html'));
});

app.listen(3000);