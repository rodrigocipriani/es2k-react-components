import React from 'react';
import PropTypes from 'prop-types';
import { default as T } from 'material-ui/Typography';

/**
 *
 * **Import:**
 *
 * `import Typography from 'es2k-react-components/style/Typography';`
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
const Typography = (props) => {
  console.log('props', props);
  return (
    <T {...props}></T>
  );
}

Typography.propTypes = {
  /**
   * Typography theme
   */
  type: PropTypes.oneOf([
    'display4', 'display3', 'display2', 'display1', 'headline',
    'title', 'subheading', 'body2', 'body1', 'caption', 'button'
  ]),
};

Typography.defaultProps = {
  type: 'body1',
};

export default Typography;
