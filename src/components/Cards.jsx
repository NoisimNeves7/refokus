import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='mt-56 pb-10'>
        <div className='max-w-screen-xl flex mx-auto gap-1 min-h-[27rem]'>
        <Card width={"basis-1/3"} start={false} para = {true} />
        <Card width={"basis-2/3"} start={true} para={false} hovers ={true} />
        </div>
    </div>
  )
}

export default Cards