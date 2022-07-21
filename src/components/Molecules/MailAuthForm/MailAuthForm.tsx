import React, { ComponentPropsWithoutRef } from 'react'
import { TextBox, Button } from "../../Atoms/index"
const styles = require("./styles.css")

type MailAuthFormProps = ComponentPropsWithoutRef<"form">

type Props = {
  onSubmit?: () => void
} & MailAuthFormProps

const MailAuthForm: React.FC<Props> = ({ onSubmit, ...props }) => {
  return (
    <>
      <form {...props} style={{background:"#afeeee", display:"inline-block", padding:"30px"}}>
        <p className="mailLabel">メールを入力してください</p>
        <div>
          <TextBox className="mailTextBox" style={{}} />
          <Button children="MailAuthForm" className="defaultButton"/>
        </div>
      </form>
    </>
  )
}

export default MailAuthForm