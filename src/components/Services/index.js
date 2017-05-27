import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Container, Grid, Image } from 'semantic-ui-react'
import { Link } from "phenomic"
import styles from "./index.css"
import enhanceCollection from "phenomic/lib/enhance-collection"

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array,
  };

  render() {
    const {
      collection,
    } = this.context
    return (
      <div>
        {
          Boolean(collection && collection.length) &&
          <Container className={styles.services}>
            <Grid relaxed="very" textAlign="center">
              {
                enhanceCollection(collection, {
                  filter: { layout: "Service" },
                  sort: "ordre",
                  limit: 9,
                })
                  .map((item) => {
                    return (
                      <Grid.Column key={item.__url} mobile={16} tablet={5} computer={5} >
                        <div className={styles.service}>
                          <Link to={item.__url}>
                            <Image src={item.icon} alt={`Icône de ${item.title}`} centered width="140px" />
                            <h3>{item.title}</h3>
                            <span>En savoir plus ></span>
                          </Link>
                        </div>
                      </Grid.Column>
                    )
                  })
              }
            </Grid>
          </Container>
        }
      </div>
    )
  }
}
