import PropTypes from 'prop-types';
import React from "react";
import { Container, Grid } from 'semantic-ui-react'
import Blocks from '../../components/Blocks'
import Tel from '../../components/Tel'
import Markdown from '../../components/Markdown'

const Footer = (props, { metadata: { pkg, info } }) => (
  <footer>
    <Container textAlign="center">
      <Container className="blocks">
        <Blocks theme="pieddepage" />
      </Container>
      <Grid>
        <Grid.Column key={1} mobile={16} tablet={7} computer={7}>
          <Markdown text={info.license} />
        </Grid.Column>
        <Grid.Column key={2} mobile={16} tablet={2} computer={2}>
          <a
          href={ '#top' }
          >
          &#9650;
          </a>
        </Grid.Column>
        <Grid.Column key={3} textAlign="right" tablet={7} computer={7} className="hide-mobile">
          Nous contacter: <Tel num={info.tel} />
        </Grid.Column>
      </Grid>
    </Container>
  </footer>
)

Footer.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Footer
