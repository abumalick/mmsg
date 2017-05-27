import PropTypes from 'prop-types';
import React from "react";
// import { Link } from "phenomic"
// import Svg from "react-svg-inline" // <Svg svg={ twitterSvg } cleanup />

// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import styles from "./index.css"

//props, { metadata: { pkg } }
const Header = () => (
  <header className={ styles.header }>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
