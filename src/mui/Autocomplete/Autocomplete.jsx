import React from 'react';
import PropTypes from 'prop-types';

const Autocomplete = ({ nome }) => (

  <div>{nome}</div>

);

Autocomplete.propTypes = {
  /**
   * Nome a ser exibido (opcional, Rodrigo)
   */
  nome: PropTypes.string,
};

Autocomplete.defaultProps = {
  nome: 'Henrique Fidellis',
};

export default Autocomplete;
