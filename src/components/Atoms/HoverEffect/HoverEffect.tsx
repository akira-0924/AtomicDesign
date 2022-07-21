import React, { ComponentPropsWithoutRef } from 'react'
const styles =  require('./styles.css')
// import styles from './styles.css'

type HoverProps = ComponentPropsWithoutRef<"div">

type Props = {
  className?: string
  tipClassName?: string
  parent?: any
  tip?: any
} & HoverProps

const HoverEffect: React.FC<Props> = ({className, tipClassName, parent, tip, ...props}) => {
  return (
      <div className={["Maker", className].join(" ")} {...props}>
        { parent }
      <div className={["tip", tipClassName].join(' ')} {...props}>{ tip }</div>
      </div>
  )
}

export default HoverEffect