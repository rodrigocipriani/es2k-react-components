'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  */console.log('222222222 createStyleSheet', _styles.createStyleSheet);

var styleSheet = function styleSheet(theme) {
  return {
    row: {
      display: 'flex',
      justifyContent: 'left'
    },
    avatar: {
      backgroundColor: '#fff',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '50%'
    },
    avatarText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      fontSize: '200%'
    }
  };
};

var ImageAvatars = function ImageAvatars(_ref) {
  var size = _ref.size,
      src = _ref.src,
      alt = _ref.alt,
      classes = _ref.classes,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: classes.row },
    _react2.default.createElement(
      'div',
      {
        alt: alt,
        style: { backgroundImage: 'url(' + src + ')', width: size, height: size },
        className: classes.avatar
      },
      !src && _react2.default.createElement(
        'div',
        { className: classes.avatarText },
        _react2.default.createElement(
          _Typography2.default,
          { type: 'display1' },
          children
        )
      )
    )
  );
};

ImageAvatars.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.any,
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string,
  size: _propTypes2.default.any
};

ImageAvatars.defaultProps = {
  src: '',
  alt: '',
  size: 60
};

exports.default = (0, _styles.withStyles)(styleSheet)(ImageAvatars);