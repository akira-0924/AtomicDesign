import React, { ComponentPropsWithoutRef } from 'react'
import DeleteButton from '../../Molecules/DeleteButton/DeleteButton'
import { Img, Heading, Txt } from "../../Atoms/index"
import { InitNotification } from "../../types/types"
const styles = require("./styles.css")

type NotificationProps = ComponentPropsWithoutRef<"a">

type Props = {
  program: InitNotification
  onClickDelete?: () => void
} & NotificationProps

const Notification: React.FC<Props> = ({ 
  program,
  className,
  onClickDelete,
  ...props
}) => {

  console.log(styles.root2)

  return (
    <>
      <section className={["root2", className].join(" ")} {...props}>
        <div>
          <Img src={program.thumbnail} className="media" width="128" height="72" />
        </div>
        <div className="body">
          <Heading className='h3'>{program.title}</Heading>
          <Txt text='時間表示' />
          <Txt className="s" text={program.channelName} />
          <DeleteButton onClick={onClickDelete} className="del" />
        </div>
      </section>
    </>
  )
}

export default Notification