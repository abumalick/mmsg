import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Grid, Image} from 'semantic-ui-react';

import PageSidebar from '../PageSidebar';
import Form from '../../components/Form';
import styles from './index.css';

// import Svg from "react-svg-inline" // <Svg svg={ twitterSvg } cleanup />
// import house from '../../../content/assets/icons/house.svg'

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  handleClick = (e, data) => {
    return this.setState({active: data !== this.state.active ? data : false});
  };

  static propTypes = {
    body: PropTypes.string,
    head: PropTypes.object.isRequired,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <PageSidebar
          {...this.props}
          header={
            <div className={styles.hero}>
              <Grid className={styles.heroGrid}>
                <Grid.Column
                  key="img"
                  className={`${styles.heroImg} hide-mobile`}
                  tablet={4}
                  computer={5}
                  textAlign="center">
                  <div>
                    <Image src={this.props.head.hero} alt="Engrenage" />
                  </div>
                </Grid.Column>
                <Grid.Column
                  key="body"
                  mobile={14}
                  tablet={8}
                  computer={8}
                  textAlign="center">
                  <div className={styles.heroBody}>
                    <h1>{this.props.head.titre}</h1>
                    <p dangerouslySetInnerHTML={{__html: this.props.body}} />
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          }
          body="">
          <div className={styles.formWrapper}>
            <Form data={this.props.head.form} />
          </div>
        </PageSidebar>
      </div>
    );
  }
}

export default Formulaire;
