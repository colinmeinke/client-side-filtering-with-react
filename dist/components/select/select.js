'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Select = (function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).call(this, props);

    this.state = {
      'name': this.props.initialName
    };
  }

  _createClass(Select, [{
    key: 'onClick',
    value: function onClick(e) {
      var _e$target$dataset = e.target.dataset;
      var key = _e$target$dataset.key;
      var name = _e$target$dataset.name;

      e.preventDefault();

      this.setState({
        'name': name
      });

      this.props.onClickCallback(key);
    }
  }, {
    key: 'render',
    value: function render() {
      var items = [];

      for (var key in this.props.items) {
        var _name = this.props.items[key];

        items.push(_react2['default'].createElement(
          'li',
          { key: key },
          _react2['default'].createElement(
            'a',
            { href: '#',
              'data-key': key,
              'data-name': _name,
              onClick: this.onClick.bind(this) },
            _name
          )
        ));
      }

      return _react2['default'].createElement(
        'div',
        { className: 'input-group-btn' },
        _react2['default'].createElement(
          'button',
          { type: 'button',
            className: 'btn btn-default dropdown-toggle',
            'data-toggle': 'dropdown' },
          this.state.name,
          ' ',
          _react2['default'].createElement('span', { className: 'caret' })
        ),
        _react2['default'].createElement(
          'ul',
          { className: 'dropdown-menu' },
          items
        )
      );
    }
  }]);

  return Select;
})(_react2['default'].Component);

Select.propTypes = {
  'items': _react2['default'].PropTypes.object,
  'initialName': _react2['default'].PropTypes.string,
  'onClickCallback': _react2['default'].PropTypes.func
};

Select.defaultProps = {
  'items': {},
  'initialName': '',
  'onClickCallback': function onClickCallback() {}
};

exports['default'] = Select;
module.exports = exports['default'];