import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Product = ({elem ,mover,count}) => {
  return (
    <motion.div whileHover={{backgroundColor:elem.color}} transition={{ duration: 0.6 }} onMouseEnter={()=>mover(count)} className="w-full h-[20rem] text-white">
      <div    className="max-w-screen-xl  py-20 mx-auto flex items-center justify-between">
        <h1 className="text-5xl font-medium capitalize">{elem.title}</h1>
        <div className="w-1/3 ">
          <p className="mb-10 text-xl font-thin ">
            {elem.description}
          </p>
          <div className="flex gap-10">
          {elem.live && <Button title={"Live Website"}/>}
          {elem.case && <Button title={"Case Study"}/>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
