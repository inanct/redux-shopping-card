import React from 'react'


const Navbar = () => {
   
  return (
    <div className='flex justify-around cursor-pointer mt-10'>
        <h2>Home</h2>
        <h2>Basket
            <span className=" bg-red-500 rounded-full text-xs align-top px-2 py-1 text-white  ">0</span>
        </h2>
        </div>
  )
}

export default Navbar