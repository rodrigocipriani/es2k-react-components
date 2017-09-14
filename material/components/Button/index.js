'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * **Import:**
 *
 * `import Button from 'es2k-react-components/material/components/Button';`
 *
 * **Example:**
 *
 * `
 <Button raised className={classes.button}>
    Default
 </Button>
 * `
 *
 * **Todos:*
 * - [ ] include another props
 *
 */
var Button = function Button(props) {
  console.log('props', props);
  return _react2.default.createElement(_Button2.default, props);
};

Button.propTypes = {
  /**
   * Button theme
   */
  raised: _propTypes2.default.bool
};

Button.defaultProps = {
  type: false
};

exports.default = Button;