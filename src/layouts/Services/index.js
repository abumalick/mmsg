import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Container, Grid, Image} from 'semantic-ui-react';
import {Link} from 'phenomic';

import Page from '../Page';
import Services from '../../components/Services';
import styles from './index.css';

export default class Homepage extends Component {
  static propTypes = {
    head: PropTypes.object.isRequired,
    body: PropTypes.string,
  };

  render() {
    const {collection} = this.context;
    return (
      <div>
        <Page {...this.props} body="">
          <h1 className={styles.title}>{this.props.head.titre}</h1>
          <Services />
        </Page>
      </div>
    );
  }
}
