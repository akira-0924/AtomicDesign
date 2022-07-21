import React, { ComponentPropsWithoutRef } from 'react'
const styles = require('./styles.css');


type IconProps = ComponentPropsWithoutRef<"img">

type Props = {
  height?: number
  width?: number
  className?: string
  src?: string
  onClick?: () => void
} & IconProps

const TrashCanIcon: React.FC<Props>= ({
  height = 80,
  width = 80,
  onClick,
  className,
  src,
  ...props
 }) => {
  return (
    <img
      src={src}
      onClick={onClick}
      className={["clickable",className].join(" ")}
      height={height}
      width={width}
      {...props}
    />
  )
}

export default TrashCanIcon