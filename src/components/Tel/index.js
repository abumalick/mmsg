import PropTypes from 'prop-types';
import React from 'react';

const Tel = props =>
  <a href={'tel:' + props.num.replace(/[^\d]/g, '')}>{props.num}</a>;

Tel.propTypes = {
  num: PropTypes.string.isRequired,
};

export default Tel;
