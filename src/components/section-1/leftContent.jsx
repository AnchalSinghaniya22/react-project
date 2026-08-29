import React from "react";

import Hero from './hero'
import Arrow from "./arrow";

const LeftContent = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between'>
      
      <Hero />
      <Arrow />
    </div>
  );
};

export default LeftContent;
