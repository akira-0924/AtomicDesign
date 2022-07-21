import React, { ComponentPropsWithoutRef } from 'react';


type ImgProps = ComponentPropsWithoutRef<'img'>;

type Props = {
  src?:any
} & ImgProps

const Img: React.FC<Props> = ({ src, ...props }) => {
  return <img src={src} {...props} />;
};

export default Img;
