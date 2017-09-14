'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * **Import:**
 *
 * `import Typography from 'es2k-react-components/material/style/Typography';`
 *
 * **Example:**
 *
 * `
 <Typography type="display4" gutterBottom>
 Display 4
 </Typography>
 * `
 *
 * **Todos:*
 * - [ ] include another props
 *
 */
var Typography = function Typography(props) {
  console.log('props', props);
  return _react2.default.createElement(_Typography2.default, props);
};

Typography.propTypes = {
  /**
   * Typography theme
   */
  type: _propTypes2.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
};

Typography.defaultProps = {
  type: 'body1'
};

exports.default = Typography;