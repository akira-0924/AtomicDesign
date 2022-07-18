import React from 'react';
import { Balloon, Img } from './components/index';

const App = () => {
  return (
    <>
      <Balloon
        children="a"
        className="balloon2"
        style={{ position: 'absolute', top: '200px' }}
      />
      <Img width="128" src="./" />
    </>
  );
};

export default App;
