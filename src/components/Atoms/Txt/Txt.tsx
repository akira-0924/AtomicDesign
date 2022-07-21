import React, { ComponentPropsWithoutRef } from 'react'
const styles = require("./styles.css")

type TextProps = ComponentPropsWithoutRef<"div">

type Props = {
  //role:any
  text?: string
  className?: string
} & TextProps

const Txt: React.FC<Props> = ({text, className, ...props}) => {
  return (
    <div className={["default", className].join("")} {...props}>{ text }</div>
  )
}

export default Txt