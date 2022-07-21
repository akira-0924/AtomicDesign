import images from "../../../../src/images.png"
import React, { ComponentPropsWithoutRef } from 'react'
import { Icon, Balloon, HoverEffect } from "../../Atoms/index"
const styles =require("./styles.css")


type DeleteProps = ComponentPropsWithoutRef<"span">

type Props = {
  className?: string
  onClick?: () => void
} & DeleteProps

const DeleteButton: React.FC<Props> = ({ className, onClick, ...props }) => {
  return (
    <span className={["root", className].join(" ")} {...props}>
      <Icon src={images} onClick={onClick} />
      <Balloon children="削除する" />
      <HoverEffect
        parent={<Icon
          src={images}
          onClick={onClick}
        />}
        tip={<Balloon
          children="削除する"
        />}
      />
    </span>
  )
}

export default DeleteButton