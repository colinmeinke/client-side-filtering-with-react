'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _selectSelect = require('../select/select');

var _selectSelect2 = _interopRequireDefault(_selectSelect);

var FilterForm = (function (_React$Component) {
  _inherits(FilterForm, _React$Component);

  function FilterForm(props) {
    _classCallCheck(this, FilterForm);

    _get(Object.getPrototypeOf(FilterForm.prototype), 'constructor', this).call(this, props);

    this.state = {
      'filter': props.initialFilter,
      'term': props.initialTerm
    };

    this.popstateHandlerRef = this.popstateHandler.bind(this);
  }

  _createClass(FilterForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('popstate', this.popstateHandlerRef);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('popstate', this.popstateHandlerRef);
    }
  }, {
    key: 'popstateHandler',
    value: function popstateHandler(e) {
      this.onChange(e.state, false);
    }
  }, {
    key: 'onFilterChange',
    value: function onFilterChange(filter) {
      var state = {
        'filter': filter,
        'term': this.state.term
      };

      this.onChange(state);
    }
  }, {
    key: 'onTermChange',
    value: function onTermChange(e) {
      var state = {
        'filter': this.state.filter,
        'term': e.target.value
      };

      this.onChange(state);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var pushState = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      this.setState(state);
      this.props.onChangeCallback(state);

      if (pushState) {
        history.pushState(state, document.title, this.getURL(state));
      }
    }
  }, {
    key: 'getURL',
    value: function getURL(state) {
      var url = window.location.href.split('?')[0] + '?filterKey=' + state.filter.key;

      if (state.term) {
        url += '&term=' + state.term.replace(/ /g, '+');
      }

      return url;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'section',
        { className: 'container input-group' },
        _react2['default'].createElement(_selectSelect2['default'], { items: this.props.filters,
          name: this.state.filter.name,
          onClickCallback: this.onFilterChange.bind(this) }),
        _react2['default'].createElement('input', { className: 'form-control',
          type: 'text',
          value: this.state.term,
          placeholder: 'search',
          onChange: this.onTermChange.bind(this) })
      );
    }
  }]);

  return FilterForm;
})(_react2['default'].Component);

FilterForm.propTypes = {
  'filters': _react2['default'].PropTypes.object,
  'initialFilter': _react2['default'].PropTypes.object,
  'initialTerm': _react2['default'].PropTypes.string,
  'onChangeCallback': _react2['default'].PropTypes.func
};

FilterForm.defaultProps = {
  'filters': {},
  'initialFilter': {
    'key': '',
    'name': ''
  },
  'initialTerm': '',
  'onChangeCallback': function onChangeCallback() {}
};

exports['default'] = FilterForm;
module.exports = exports['default'];