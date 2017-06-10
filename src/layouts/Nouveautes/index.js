import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Container, Grid, Image} from 'semantic-ui-react';
import {BodyContainer, Link} from 'phenomic';
import LatestPosts from '../../components/LatestPosts';

import Page from '../Page';
import Services from '../../components/Services';
import styles from './index.css';
import enhanceCollection from 'phenomic/lib/enhance-collection';

export default class Homepage extends Component {
  static propTypes = {
    head: PropTypes.object.isRequired,
    body: PropTypes.string,
  };

  static contextTypes = {
    collection: PropTypes.array,
  };

  render() {
    const {collection} = this.context;
    return (
      <div>
        <Page {...this.props} body="">
          <h1 className={styles.title}>{this.props.head.title}</h1>
          <div>
            <LatestPosts />
          </div>
        </Page>
      </div>
    );
  }
}
