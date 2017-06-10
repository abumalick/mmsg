import PropTypes from 'prop-types';
import React from 'react';
import {Grid} from 'semantic-ui-react';
// import { Link } from "phenomic"
import {BodyContainer} from 'phenomic';

import Page from '../Page';
import Blocks from '../../components/Blocks';

const PageSidebar = props => {
  return (
    <div>
      <Page {...props} body="">
        <Grid>
          <Grid.Column
            key="img"
            className="hide-mobile blocks"
            tablet={4}
            computer={4}>
            <Blocks theme="barrelaterale" className="hide-mobile" />
          </Grid.Column>
          <Grid.Column key="body" mobile={16} tablet={12} computer={12}>
            {props.body
              ? <BodyContainer>{props.body}</BodyContainer>
              : props.children}
          </Grid.Column>
        </Grid>
      </Page>
    </div>
  );
};

PageSidebar.propTypes = {
  body: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PageSidebar;
