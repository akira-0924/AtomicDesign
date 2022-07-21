import React, { ComponentPropsWithoutRef } from 'react'
const styles = require("./styles.css")

type TextBoxProps = ComponentPropsWithoutRef<"input">

type Props = {
  className?: string
} & TextBoxProps

const TextBox: React.FC<Props> = ({ className, ...props }) => {
  return (
    <input
      placeholder='テキストボックス'
      type="text"
      className={["textbox", className].join(" ")}
      {...props}
    />
  )
}

export default TextBox