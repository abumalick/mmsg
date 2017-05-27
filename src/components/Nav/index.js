import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Sidebar, Menu, } from 'semantic-ui-react'
import NavBar from "../../components/NavBar"
import { Link } from "phenomic"

class Nav extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  static propTypes = {
    children: PropTypes.node.isRequired,
    // body: PropTypes.string,
  };
  static contextTypes = {
    metadata: PropTypes.object,
  };
  render() {
    const menu = this.context.metadata.info.menu
    const { visible } = this.state
    return (
      <div>
        <div className="navbar-wrapper">
          <Container>
            <NavBar menu={menu} handleClick={this.toggleVisibility} />
          </Container>
        </div>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            width='thin'
            direction='right'
            visible={visible}
            vertical
            inverted
          >
            {
              Object.keys(menu).map((item) => (
                <Menu.Item name={item} key={item}>
                  <Link to={menu[item]} activeClassName="active">
                    {item}
                  </Link>
                </Menu.Item>
              ))
            }
          </Sidebar>
          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Nav
