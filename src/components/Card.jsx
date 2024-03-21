import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para ,hovers }) => {
  return (
    <motion.div whileHover={{backgroundColor: hovers? '#7443FF':'' , padding:'25px'}}  className={`${width} bg-zinc-700 rounded-xl p-5 flex flex-col justify-between `}>
      <div className="">
        <div className="flex justify-between">
          <h1>Up Next: News</h1>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-6">
          Insights and behind the scenes
        </h1>
      </div>
      <div>
        {start && (
          <>
            {" "}
            <h2 className="text-8xl tracking-tight font-bold leading-none">
              Start a Project{" "}
            </h2>
            <button className="border border-white px-5 py-2 rounded-full mt-5 font-medium">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm text-zinc-300">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
