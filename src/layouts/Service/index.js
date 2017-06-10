import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Grid, Menu} from 'semantic-ui-react';
import {BodyContainer, Link} from 'phenomic';
import styles from './index.css';
import Page from '../Page';
import enhanceCollection from 'phenomic/lib/enhance-collection';

class PageSidebar extends Component {
  static contextTypes = {
    collection: PropTypes.array,
  };
  static propTypes = {
    body: PropTypes.string,
    children: PropTypes.node.isRequired,
    head: PropTypes.object,
  };
  render() {
    const {collection} = this.context;
    return (
      <div>
        <Page {...this.props} body="">
          <Grid className={styles.grid}>
            <Grid.Column
              key="img"
              className={`hide-mobile`}
              tablet={4}
              computer={4}>
              <Menu vertical fluid borderless>
                <Menu.Item header className={styles.menuHeader}>
                  Services
                </Menu.Item>
                {enhanceCollection(collection, {
                  filter: {layout: 'Service'},
                  sort: 'ordre',
                  limit: 9,
                }).map(item =>
                  <Menu.Item key={item.title} style={{padding: 0}}>
                    <Link
                      to={item.__url}
                      activeClassName="active"
                      className={styles.menuLink}>
                      <img
                        src={item.icon}
                        alt={`Icône de ${item.title}`}
                        height="40px"
                      />
                      <div>{item.title}</div>
                    </Link>
                  </Menu.Item>,
                )}
              </Menu>
            </Grid.Column>
            <Grid.Column key="body" mobile={16} tablet={12} computer={12}>
              <div className={styles.body}>
                <h1 className={styles.tc}>
                  Service de {this.props.head.title}
                </h1>
                <BodyContainer>{this.props.body}</BodyContainer>
              </div>
            </Grid.Column>
          </Grid>
        </Page>
      </div>
    );
  }
}

export default PageSidebar;
