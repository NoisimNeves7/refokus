import React, { useState } from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import work6 from "../assets/work6.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const Work = () => {
  const [images,setImages] = useState([
    { url: work1, top: "50%", left: "50%", isActive: false },
    { url: work2, top: "56%", left:"44%", isActive: false },
    { url: work3, top: "44%", left: "56%", isActive: false },
    { url: work4, top: "59%", left: "48%", isActive: false },
    { url: work5, top: "52%", left: "52%", isActive: false },
    { url: work6, top: "60%", left: "40%", isActive: false },
  ]) 

  const { scrollYProgress } = useScroll()



scrollYProgress.on("change", (data)=>{
  function showImage(arr){
    setImages(prev =>prev.map((value,index)=> arr.indexOf(index) ===-1 ? {...value,isActive:false}:{...value,isActive:true}))
  }

  if (Math.floor(data*100) >= 10){ 
    showImage([0,1,2,3,4,5,6]);
  }
  else if (Math.floor(data*100) >= 8)showImage([0,1,2,3,4,5]);
  else if (Math.floor(data*100) >= 7)showImage([0,1,2,3,4]);
  else if (Math.floor(data*100) >= 6)showImage([0,1,2,3]);
  else if (Math.floor(data*100) >= 4)showImage([0,1,2]);
  else if (Math.floor(data*100) >= 2)showImage([0,1]);
  else if (Math.floor(data*100) >= 1)showImage([0]);
  else     showImage([]);
})



  






  return (
    <div className="w-full ">
      <div className="max-w-screen-xl  m-auto text-center relative">
        <h1 className=" text-[40vw] leading-none  select-none font-medium tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map((value, index) => (
            value.isActive && <img
            key={index}
            className="rounded-lg absolute h-72 w-72 -translate-x-[50%] -translate-y-[50%] "
            style={{ top: value.top, left: value.left }}
            src={value.url}
            alt=""
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
