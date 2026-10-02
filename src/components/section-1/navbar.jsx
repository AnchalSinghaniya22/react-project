import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4 py-6 lg:py-8 px-4 md:px-8 lg:px-18'>
        <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full text-sm sm:text-base text-center'>Target Audiance</h4>
        <button className='bg-gray-200 uppercase px-6 py-2 rounded-full tracking-widest text-xs sm:text-sm text-center'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar