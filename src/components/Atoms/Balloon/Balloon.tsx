import React, { ComponentPropsWithoutRef } from 'react';
import styles from './styles.css'

type BalloonProps = ComponentPropsWithoutRef<'span'>;

type Props = {
  children?: string;
  className?: string;
} & BalloonProps;

const Balloon: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <>
      <span className={["balloon", className].join(" ")} {...props}>
        {children}
      </span>
    </>
  );
};

export default Balloon;
