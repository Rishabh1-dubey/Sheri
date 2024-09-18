import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = () => {
  return (
    <div className='w-40 bg-green-500 rounded-xl py-2 px-3 flex items-center justify-between '>
        <span className='text-base ' >Get started</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button