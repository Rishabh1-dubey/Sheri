import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = () => {
  return (
    <div className='w-40 bg-green-500 rounded-xl py-2 px-3 flex items-center justify-between  transition duration-300 ease-in-out transform  hover:scale-110  hover:text-white trains hover:bg-fuchsia-400 '>
        <span className='text-base  ' >Get started</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button