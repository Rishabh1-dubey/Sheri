import React from 'react'
import Button from './Button'

export const Product = () => {
  return (
    <div className='w-full py-20 text-white'>
        <div className='max-w-screen-xl flex mx-auto items-center justify-between'>
            <h1 className='text-6xl'>arquite</h1>
            <div className='dets w-1/3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officia esse perferendis reiciendis harum iusto iste quae quo, pariatur rerum ratione eligendi magnam?</p>
                <Button/>
            </div>
        </div>

    </div>
  )
}
