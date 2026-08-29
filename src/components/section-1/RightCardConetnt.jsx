import React from 'react'
import { MoveRight } from "lucide-react";

const RightCardConetnt = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
          <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
          <div>
            <p className='text-s text-shadow-2xs leading-normal mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores voluptatem necessitatibus recusandae quisquam accusantium!</p>
          
          <div className='flex justify-between'>
            <button className='bg-blue-500 text-white font-medium px-4 py-1 rounded-full'>{props.tag}</button>
            <button className='bg-blue-500 text-white font-medium px-1 py-1 rounded-full'><MoveRight /></button>
          </div>
          </div>
      </div>
  )
}

export default RightCardConetnt