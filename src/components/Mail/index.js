import PropTypes from 'prop-types';
import React from "react";

const Mail = (props) => (
  <a href={ 'mailto:' + props.address }>{ props.address }</a>
)

Mail.propTypes = {
  address: PropTypes.string.isRequired,
}

export default Mail
