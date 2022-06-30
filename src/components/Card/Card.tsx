import React, {ReactNode} from 'react'
import styles from './Card.module.scss'

import classNames from 'classnames'

interface Props {
  color: 'Primary' | 'Orange',
  children: ReactNode,
  smallMargin?: true | false
}

const Card = ({color,children,smallMargin}: Props): JSX.Element => {

  const classes = classNames(styles.base,{
    [styles.base__Primary]: color === "Primary",
    [styles.base__Orange]: color === "Orange",
    [styles.base__SmallMargin]: smallMargin
  })

  return (
    <div className={classes}>    
      {children}
    </div>
  )
}
export default Card
