import PropTypes from 'prop-types';
import React from "react";
import { Link } from "phenomic"
import { Grid } from 'semantic-ui-react'
import Markdown from '../../components/Markdown'
import Svg from "react-svg-inline" // <Svg svg={ twitterSvg } cleanup />

import cal from '../../../content/assets/icons/cal.svg'
import clock from '../../../content/assets/icons/clock.svg'
import direction from '../../../content/assets/icons/direction.svg'
import note from '../../../content/assets/icons/note.svg'
const icons = {
  cal,
  clock,
  direction,
  note
}
import styles from './styles.css'

// <Image src={`/assets/icons/${block.icone}.svg`} alt={block.icone} centered height={props.theme === 'pieddepage' ? '16px' : '35px'} />
const Block = ({block, theme}, { metadata: { info: {blocs} } }) => (
  <div className={`block block-${theme} ${styles.block}`}>
    <h3><Svg className="block-svg" svg={icons[blocs[block].icone]} cleanup height={theme === 'pieddepage' ? '16px' : '35px'} /> {blocs[block].titre}</h3>
    <Markdown text={blocs[block].texte} />
    <Link to={`/${block}`}>{blocs[block].lien}</Link>
  </div>
)
Block.propTypes = {
  block: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
}
Block.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

const Blocks = ({ theme }, { metadata: { info } }) => {
  const columns = () => {
    if (theme === 'barrelaterale')
      return { mobile: 16, tablet: 16, computer: 16, }
    else
      return { mobile: 16, tablet: 8, computer: 4, }
  }
  return <Grid>
    {info[theme].map((block) => (
      <Grid.Column key={block} {...columns() }>
        <Block block={block} theme={theme} />
      </Grid.Column>
    ))}
  </Grid>
}

Blocks.propTypes = {
  theme: PropTypes.string.isRequired,
}
Blocks.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Blocks
export { Block }
