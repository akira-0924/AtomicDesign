import React, { ComponentPropsWithoutRef } from 'react';
const styles = require('./styles.css');

type BalloonProps = ComponentPropsWithoutRef<'span'>;

type Props = {
  children?: string;
  className?: string;
} & BalloonProps;

const Balloon: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <>
      <span className={className} {...props}>
        {children}
      </span>
    </>
  );
};

export default Balloon;
