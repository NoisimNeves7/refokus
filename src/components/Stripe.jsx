import React from 'react'

const Stripe = ({elem}) => {
  return (
    <div className='w-[20%] border-b-[1px] border-r-[1px] border-t-[1px] border-zinc-600 px-7 py-5  flex items-center justify-between '>
        <img src={elem.url} alt="" />
        <span className='font-semibold text-xl'>{elem.number}</span>
    </div>
  )
}

export default Stripe