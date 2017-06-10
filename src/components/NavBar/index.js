import PropTypes from 'prop-types';
// http://react.semantic-ui.com/collections/menu
import React from 'react';
import {Button, Menu} from 'semantic-ui-react';
import {Link} from 'phenomic';
// import "../../semantic/dist/components/menu.min.css"

import Svg from 'react-svg-inline';
import logo from '../../../content/assets/logo.svg';
//<Image src={`/assets/logo.svg`} alt={'logo'} height="32px" />
const NavBar = ({menu, handleClick}) =>
  <Menu inverted className="nav-bar large">
    <Menu.Item className="my-logo" header>
      <Link to={'/'}>
        <Svg svg={logo} cleanup height="32px" />
      </Link>
    </Menu.Item>
    {Object.entries(menu).map(([key, {title, link}]) =>
      <Menu.Item name={title} key={title} className="hide-mobile">
        <Link to={link} activeClassName="active">
          {title}
        </Link>
      </Menu.Item>,
    )}
    <Button inverted className="only-mobile button-menu" onClick={handleClick}>
      <svg width="10" height="10">
        <path d="M0,1 10,1" stroke="#eee" strokeWidth="2" />
        <path d="M0,5 10,5" stroke="#eee" strokeWidth="2" />
        <path d="M0,9 10,9" stroke="#eee" strokeWidth="2" />
      </svg>
    </Button>

  </Menu>;

NavBar.propTypes = {
  menu: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
