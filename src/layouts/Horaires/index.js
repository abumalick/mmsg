import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Grid, Image } from 'semantic-ui-react'
// import { Link } from "phenomic"

import PageSidebar from "../PageSidebar"
import Markdown from '../../components/Markdown'
import styles from "./index.css"

// import Svg from "react-svg-inline" // <Svg svg={ twitterSvg } cleanup />
// import house from '../../../content/assets/icons/house.svg'

class Horaires extends Component {
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
      <div className={styles.pageHoraires}>
        <PageSidebar { ...this.props } header={
          <Grid className={styles.hero}>
            <Grid.Column key="img" className={`${styles.heroImg} hide-mobile`} tablet={4} computer={4}>
              <Image src={this.props.head.hero} alt="Horaires" fluid />
            </Grid.Column>
            <Grid.Column key="body" mobile={16} tablet={12} computer={12}>
              <div className={styles.heroBody}>
                <h1>{this.props.head.titre}</h1>
                <div>
                  <p className={styles.left}>{this.props.head.introduction}</p>
                  <p className={styles.horaires}><Markdown text={this.context.metadata.info.blocs.horaires.texte} /></p>
                  <p className={styles.apresHoraires}><Markdown text={this.props.head['apres-horaires']} /></p>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        } />
      </div>

    )
  }
}

export default Horaires;
