import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-112 lg:h-full w-full lg:w-2/3 py-4 lg:p-4 flex flex-nowrap gap-4 lg:gap-10 overflow-x-auto snap-x snap-mandatory'>
      {props.users.map(function(elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent