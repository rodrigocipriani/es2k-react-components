'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterDom = require('react-router-dom');

require('babel-polyfill');

var _whyDidYouUpdate = require('why-did-you-update');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const { whyDidYouUpdate } = require('why-did-you-update');
var customHistory = (0, _createBrowserHistory2.default)();

exports.default = function (App, store) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var rootContainer = props.rootContainer || 'root';
  var isProduction = props.isProduction !== null ? props.isProduction : true;
  var isWhyDidYouUpdate = props.whyDidYouUpdate !== null ? props.whyDidYouUpdate : true;

  if (!isProduction && isWhyDidYouUpdate) {
    (0, _whyDidYouUpdate.whyDidYouUpdate)(_react2.default);
  }

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      { history: customHistory },
      isProduction ? _react2.default.createElement(App, null) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(App, null)
      )
    )
  ), document.getElementById(rootContainer));
};