import React from 'react';
import PropTypes from 'prop-types';
import { default as T } from 'material-ui/Button';

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
const Button = (props) => {
  console.log('props', props);
  return (
    <T {...props}></T>
  );
};

Button.propTypes = {
  /**
   * Button theme
   */
  raised: PropTypes.bool,
};

Button.defaultProps = {
  type: false,
};

export default Button;
