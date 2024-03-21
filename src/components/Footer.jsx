import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-20'>
        <div className='max-w-screen-xl  mx-auto flex gap-32'>
            <div className='basis-1/2 '>
                <h1 className='text-[12rem] font-medium tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex justify-between '>
                <div className='basis-1/3'>
                    <h1 className='mt-16 mb-10 text-zinc-400'>Socials</h1>
                    {["Instagram", "Twitter", "LinkedIn"].map((value,index)=><h1 key={index} className='text-zinc-400 leading-7'>{value}</h1>)}
                </div>
                <div className='basis-1/3'>
                    <h1 className='mt-16 mb-10 text-zinc-400'>Sitemap</h1>
                    {["Home", "Work", "Carrers","Contact"].map((value,index)=><h1 key={index} className='text-zinc-400 leading-7'>{value}</h1>)}
                </div>
                <div className='basis-1/2'>
                    <h1 className='mt-24 mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eum.</h1>
                    <span className='px-4 py-2  bg-blue-600 rounded'>Enterprise Partner</span>
                    
                </div>
            </div>
        </div>
        <div className='max-w-screen-xl  mx-auto flex gap-8 capitalize '>
            {["privacy policy","Cookie Policy","Impressum","Terms"].map((value,index)=><h1 key={index} className='text-zinc-600'>{value}</h1>)}
        </div>
    </div>
  )
}

export default Footer