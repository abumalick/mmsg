import PropTypes from 'prop-types';
import React from "react";
import { Link } from "phenomic"
import { Button } from 'semantic-ui-react'

// import Button from "../../components/Button"

import styles from "./index.css"

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={ styles.wrapper }>
      <Link to={ __url } className={ styles.title }>
        <h2>
          { title }
        </h2>
      </Link>
      <div className={ styles.meta }>
        {
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toLocaleDateString('fr', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric'
              }) }
            </time>
        }
      </div>
      <div className={ styles.description }>
        { description }
        { " " }
      </div>
      <Link to={ __url } className={ styles.readMore }>
        <Button
          primary
          size="large"
        >{ "Lire la suite →" }</Button>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
