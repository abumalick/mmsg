import PropTypes from 'prop-types';
import React from 'react';
import Markdown from '../../components/Markdown';

import styles from './index.css';

const PagePreview = ({__url, title, date, description, text}) => {
  const pageDate = date ? new Date(date) : null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        <h2 className={styles.title}>
          {title}
        </h2>
        {pageDate &&
          <time key={pageDate.toISOString()}>
            {pageDate.toLocaleDateString('fr', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>}
      </div>
      <div className={styles.description}>
        <Markdown text={text} />
      </div>
    </div>
  );
};

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default PagePreview;
