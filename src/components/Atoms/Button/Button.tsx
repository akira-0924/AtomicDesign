import React, { ComponentPropsWithoutRef } from 'react'
const styles = require("./styles.css")

type ButtonProps = ComponentPropsWithoutRef<"button">

type Props = {
  children?: string
  className?: string
} & ButtonProps

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <>
      <button className={["button", className].join(" ")} {...props}>{ children }</button>
    </>
  )
}

export default Button