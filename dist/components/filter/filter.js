'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _coversCoversList = require('../covers/covers-list');

var _coversCoversList2 = _interopRequireDefault(_coversCoversList);

var _filterForm = require('./filter-form');

var _filterForm2 = _interopRequireDefault(_filterForm);

var _filterHeader = require('./filter-header');

var _filterHeader2 = _interopRequireDefault(_filterHeader);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Filter = (function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    _get(Object.getPrototypeOf(Filter.prototype), 'constructor', this).call(this, props);

    this.state = {
      'covers': this.filterCovers(this.props.filters[this.props.initialFilterKey].func, this.props.initialTerm),
      'highlightText': this.props.initialFilterKey === 'title' ? this.props.initialTerm : '',
      'title': this.getTitle(this.props.initialFilterKey, this.props.initialTerm)
    };
  }

  _createClass(Filter, [{
    key: 'onFormChange',
    value: function onFormChange(data) {
      var filter = data.filter;
      var term = data.term;

      var covers = term ? this.filterCovers(this.props.filters[filter].func, term) : this.props.covers;

      this.setState({
        'covers': covers,
        'highlightText': filter === 'title' ? term : '',
        'title': this.getTitle(filter, term)
      });
    }
  }, {
    key: 'getTitle',
    value: function getTitle(filter, term) {
      if (term) {
        var title = this.props.filters[filter].title;
        return title.replace(':term', term.toLowerCase());
      }

      return 'Showing <strong>all</strong> movies.';
    }
  }, {
    key: 'filterCovers',
    value: function filterCovers(func, term) {
      var covers = [];

      this.props.covers.forEach(function (cover) {
        if (func(cover, term)) {
          covers.push(cover);
        }
      });

      return covers;
    }
  }, {
    key: 'getFilterKeyNamePairs',
    value: function getFilterKeyNamePairs() {
      var filters = {};

      for (var key in this.props.filters) {
        filters[key] = this.props.filters[key].name;
      }

      return filters;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'form',
        { name: 'filter' },
        _react2['default'].createElement(_filterHeader2['default'], { title: this.state.title }),
        _react2['default'].createElement(_filterForm2['default'], { filters: this.getFilterKeyNamePairs(this.props.filters),
          initialFilterKey: this.props.initialFilterKey,
          initialFilterName: this.props.initialFilterName,
          initialTerm: this.props.initialTerm,
          onChangeCallback: this.onFormChange.bind(this) }),
        _react2['default'].createElement('hr', null),
        _react2['default'].createElement(_coversCoversList2['default'], { covers: this.state.covers,
          highlightText: this.state.highlightText })
      );
    }
  }]);

  return Filter;
})(_react2['default'].Component);

Filter.propTypes = {
  'covers': _react2['default'].PropTypes.array,
  'filters': _react2['default'].PropTypes.object,
  'initialFilterKey': _react2['default'].PropTypes.string,
  'initialFilterName': _react2['default'].PropTypes.string,
  'initialTerm': _react2['default'].PropTypes.string
};

Filter.defaultProps = {
  'covers': [],
  'filters': {},
  'initialFilterKey': '',
  'initialFilterName': '',
  'initialTerm': ''
};

exports['default'] = Filter;
module.exports = exports['default'];