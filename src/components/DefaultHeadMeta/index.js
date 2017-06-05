import PropTypes from 'prop-types';
import React from "react";
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        ...((props.meta ? props.meta : [])),
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
        ...((props.scripts ? props.scripts : [])),
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    >
      <meta name="google-site-verification" content="RI-PdZte-1e7jfeusB9lvqn5ZdRjAyhBumpE6_v4oGY" />
      <style>{ "@-ms-viewport { width: device-width; }" }</style>
    </Helmet>
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
  scripts: PropTypes.arrayOf(PropTypes.object),
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
