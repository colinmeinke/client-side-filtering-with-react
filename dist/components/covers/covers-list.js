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

var CoversList = (function (_React$Component) {
  _inherits(CoversList, _React$Component);

  function CoversList() {
    _classCallCheck(this, CoversList);

    _get(Object.getPrototypeOf(CoversList.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CoversList, [{
    key: 'highlight',
    value: function highlight(title) {
      if (this.props.highlightText) {
        return title.replace(new RegExp(this.props.highlightText, 'i'), function (found) {
          return '<strong>' + found + '</strong>';
        });
      }

      return title;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var covers = [];

      this.props.covers.forEach(function (cover, i) {
        covers.push(_react2['default'].createElement(
          'li',
          { className: 'list-group-item pull-left',
            key: i },
          _react2['default'].createElement(
            'a',
            { href: cover.url },
            _react2['default'].createElement('img', { src: cover.image }),
            _react2['default'].createElement(
              'h3',
              { className: 'list-group-item-heading' },
              _react2['default'].createElement('small', { dangerouslySetInnerHTML: { '__html': _this.highlight(cover.title) } })
            )
          )
        ));
      });

      return _react2['default'].createElement(
        'section',
        { className: 'container' },
        _react2['default'].createElement(
          'ul',
          { className: 'list-group clearfix' },
          covers
        )
      );
    }
  }]);

  return CoversList;
})(_react2['default'].Component);

CoversList.propTypes = {
  'covers': _react2['default'].PropTypes.array,
  'highlightText': _react2['default'].PropTypes.string
};

CoversList.defaultProps = {
  'covers': [],
  'highlightText': ''
};

exports['default'] = CoversList;
module.exports = exports['default'];