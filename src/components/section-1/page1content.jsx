import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'

const Page1content = (props) => {
  return (
    <div className='pb-10 pt-2 lg:pb-16 lg:pt-6 px-4 md:px-8 lg:px-18 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 lg:h-[90vh]'>
         <LeftContent />
         <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content