import React from 'react'

const Stripe = ({val}) => {

 
  return (
    <div className='w-[20.66%] border-t-2  border-b-2 border-r-2 px-4 border-zinc-400 py-3 flex justify-between    items-center'>
      <img className='w-20 h-10' src={val.url} alt=''/>
        <span className="font- text-white">{val.number}</span>

    </div>
  )
}

export default Stripe