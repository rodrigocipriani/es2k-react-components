'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * **Import:**
 *
 * `import TextField from 'es2k-react-components/material/components/TextField';`
 *
 * **Example:**
 *
 * `
 <TextField
   id="name"
   label="Name"
   className={classes.textField}
   value={this.state.name}
   onChange={event => this.setState({ name: event.target.value })}
   margin="normal"
 />
 * `
 *
 * **Todos:*
 * - [ ] include another props
 *
 */
var TextField = function TextField(props) {
  console.log('props', props);
  return _react2.default.createElement(_TextField2.default, props);
};

TextField.propTypes = {
  /**
   * The input value
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

TextField.defaultProps = {
  value: ''
};

exports.default = TextField;