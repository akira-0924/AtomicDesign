import React, { ComponentPropsWithoutRef} from 'react';
const styles = require('./styles.css');

type HeadingProps = ComponentPropsWithoutRef<"div">

type Props = {
  children?: string
  className?: string
} & HeadingProps

const Heading: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {

  return (
    <div className={["h",className].join(" ")} {...props}>{ children }</div>
  )
};

export default Heading;
