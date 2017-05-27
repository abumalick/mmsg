import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Grid, Image } from 'semantic-ui-react'
// import { Link } from "phenomic"

import PageSidebar from "../PageSidebar"
import Form from '../../components/Form'
import { Block } from '../../components/Blocks'
// import Map from '../../components/Map'
import styles from "./index.css"

// import Svg from "react-svg-inline" // <Svg svg={ twitterSvg } cleanup />
// import house from '../../../content/assets/icons/house.svg'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 'active': false };
  }

  handleClick = (e, data) => {
    return this.setState({ 'active': (data !== this.state.active) ? data : false });
  }

  static propTypes = {
    body: PropTypes.string,
    head: PropTypes.object.isRequired,
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <PageSidebar { ...this.props } header={
          <div
            className={styles.hero}
            style={this.props.head.hero && {
              background: `#fff url(${this.props.head.hero}) 50% 50% / cover`,
            }}
            onClick={(event) => {
              if (event.target.tagName ==='DIV') {
                window.location.assign(this.context.metadata.info.carte);
              }
            }}
          >
            <Grid>
              <Grid.Column mobile="16" tablet="8" computer="4">
                <div className={styles.heroBlock}>
                  <Block theme="hero" block="contact" />
                </div>
              </Grid.Column>
            </Grid>
          </div>
        } body="" >
          <div
            className={styles.hero2}
          >
            <Grid className={styles.hero2Grid}>
              <Grid.Column key="img" className={`${styles.hero2Img} hide-mobile`} tablet={4} computer={5} textAlign="center">
                <div><Image src={this.props.head.hero2} alt="Engrenage" fluid /></div>
              </Grid.Column>
              <Grid.Column key="body" mobile={14} tablet={8} computer={8} textAlign="center">
                <div className={styles.hero2Body}>
                  <h1>{this.props.head.titre}</h1>
                  <p dangerouslySetInnerHTML={{ __html: this.props.body }} />
                </div>
              </Grid.Column>
            </Grid>
         </div>
          <div className={styles.formWrapper}>
            <Form data={this.props.head.form} />
          </div>
        </PageSidebar>
      </div>
    )
  }
}

export default Contact;
