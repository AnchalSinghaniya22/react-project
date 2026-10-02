import React from "react";

import Hero from './hero'
import Arrow from "./arrow";

const LeftContent = () => {
  return (
    <div className='w-full lg:w-1/3 lg:h-full flex flex-col justify-between gap-4'>
      <Hero />
      <Arrow />
    </div>
  );
};

export default LeftContent;