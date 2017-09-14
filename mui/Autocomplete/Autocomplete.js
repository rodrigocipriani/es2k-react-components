'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Autocomplete = function Autocomplete(_ref) {
  var nome = _ref.nome;
  return _react2.default.createElement(
    'div',
    null,
    nome
  );
};

Autocomplete.propTypes = {
  /**
   * Nome a ser exibido (opcional, Rodrigo)
   */
  nome: _propTypes2.default.string
};

Autocomplete.defaultProps = {
  nome: 'Henrique Fidellis'
};

exports.default = Autocomplete;