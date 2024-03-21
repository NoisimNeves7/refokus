import { animate, motion } from 'framer-motion'
import React from 'react'

const Marquee = ({elem, direction}) => {
  
  return (
    <div className='flex  mb-14  w-full overflow-hidden '>
        
        <motion.div className="flex flex-shrink-0  gap-40 pr-40  "
        initial={{x: direction==='left'? "0":"-100%"}}
        animate={{x: direction==='left'? "-100%":"0"}}
        transition={{ease:"linear" , duration:10 ,repeat:Infinity}}
        >
        {elem.map((value, index) => (
          <img src={value} key={index}  />
        ))}
      </motion.div>
      <motion.div className="flex flex-shrink-0  gap-40 pr-40  "
        initial={{x: direction==='left'? "0":"-100%"}}
        animate={{x: direction==='left'? "-100%":"0"}}
        transition={{ease:"linear" , duration:10 ,repeat:Infinity}}
        >
        {elem.map((value, index) => (
          <img src={value} key={index}  />
        ))}
      </motion.div>
      
      
        
    </div>
  )
}

export default Marquee