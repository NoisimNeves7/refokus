import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Start a Project"}) => {
  return (
    <div className='w-fit h-8 bg-white rounded-full px-4 py-2 flex items-center justify-between text-black gap-4 '>
        <span className=' text-sm text-zinc-600'>{title}</span>
        <IoIosReturnRight className='' />
    </div>
  )
}

export default Button