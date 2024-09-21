import React from 'react'
import Button from './Button'

export const Product = ({val,mover, count}) => {
  return (
    <div className='w-full py-20 h-[23rem]  text-white '>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl flex mx-auto p-6  items-center justify-between'>
            <h1 className='text-5xl font-medium'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10'>{val.description}</p>
                <Button/>
            </div>
        </div>

    </div>
  )
}
