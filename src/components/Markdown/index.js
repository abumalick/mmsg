import PropTypes from 'prop-types';
import React from 'react';
const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

const Markdown = props =>
  <p dangerouslySetInnerHTML={{__html: marked(props.text)}} />;

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Markdown;
