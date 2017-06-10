import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Accordion, Grid, Image} from 'semantic-ui-react';
// import { Link } from "phenomic"
import Markdown from '../../components/Markdown';

import PageSidebar from '../PageSidebar';
import Form from '../../components/Form';
import styles from './index.css';

// import Svg from "react-svg-inline" // <Svg svg={ twitterSvg } cleanup />
// import house from '../../../content/assets/icons/house.svg'

class Fonctionnement extends Component {
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

  render() {
    var accordionItems = [];
    let i = 0;
    Object.entries(this.props.head.faq).forEach(([key, {title, content}]) => {
      if (title) {
        accordionItems.push(
          <Accordion.Title
            className={styles.faqTitle}
            key={`title-${i}`}
            onClick={this.handleClick}>
            <h3>{title}</h3>
            {this.state.active === i
              ? <span className={styles.plus}>▾</span>
              : <span className={styles.plus}>◂</span>}
          </Accordion.Title>,
        );
        accordionItems.push(
          <Accordion.Content key={`content-${i++}`}>
            <Markdown text={content} />
          </Accordion.Content>,
        );
      }
    });
    return (
      <div>
        <PageSidebar
          {...this.props}
          header={
            <Grid className={styles.hero}>
              <Grid.Column
                key="img"
                className={`${styles.heroImg} hide-mobile`}
                tablet={4}
                computer={4}>
                <Image src={this.props.head.hero} alt="FAQ" />
              </Grid.Column>
              <Grid.Column key="body" mobile={16} tablet={12} computer={12}>
                <div className={styles.heroBody}>
                  <h1>{this.props.head.titre}</h1>
                  <p dangerouslySetInnerHTML={{__html: this.props.body}} />
                </div>
              </Grid.Column>
            </Grid>
          }
          body="">
          {this.props.head.faq &&
            <div className={styles.faq}>
              <h2>{this.props.head.titreFaq}</h2>
              <Accordion styled fluid>
                {accordionItems}
              </Accordion>
            </div>}
          <Form data={this.props.head.form} />
        </PageSidebar>
      </div>
    );
  }
}

export default Fonctionnement;
