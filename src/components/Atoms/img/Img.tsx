import React, { ComponentPropsWithoutRef } from 'react';

type ImgProps = ComponentPropsWithoutRef<'img'>;

const Img: React.FC<ImgProps> = (props) => {
  return <img {...props} />;
};

export default Img;
