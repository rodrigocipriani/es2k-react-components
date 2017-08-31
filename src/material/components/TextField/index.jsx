import React from 'react';
import PropTypes from 'prop-types';
import { default as T } from 'material-ui/TextField';

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
const TextField = (props) => {
  console.log('props', props);
  return (
    <T {...props}></T>
  );
};

TextField.propTypes = {
  /**
   * The input value
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

TextField.defaultProps = {
  value: '',
};

export default TextField;
