import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import product_Arqitel from "../assets/product_Arqitel.webm";
import product_Cula from "../assets/product_Cula.mp4";
import product_Maniv from "../assets/product_Maniv.mp4";
import product_TTR from "../assets/product_TTR.webm";
import product_webflow from "../assets/product_webflow.mp4";
import product_yahoo from "../assets/product_yahoo.webm";
import product_YIR from "../assets/product_YIR.webm";

const Products = () => {
  var data = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium earum iusto repellat quibusdam non reprehenderit laboriosam aut voluptas mollitia?",
      live: true,
      case: false,
      color:"#020370"
    },
    {
      title: "Cula",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium earum iusto repellat quibusdam non reprehenderit laboriosam aut voluptas mollitia?",
      live: true,
      case: true,
      color:"#3E4C62"
    },
    {
      title: "Layout Land",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium earum iusto repellat quibusdam non reprehenderit laboriosam aut voluptas mollitia?",
      live: true,
      case: true,
      color:"#181EE5"
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium earum iusto repellat quibusdam non reprehenderit laboriosam aut voluptas mollitia?",
      live: true,
      case: false,
      color:"#38329F"
    },
    {
      title: "Maniv",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium earum iusto repellat quibusdam non reprehenderit laboriosam aut voluptas mollitia?",
      live: true,
      case: true,
      color:"#199552"
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium earum iusto repellat quibusdam non reprehenderit laboriosam aut voluptas mollitia?",
      live: true,
      case: false,
      color:"#252148"
    },
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium earum iusto repellat quibusdam non reprehenderit laboriosam aut voluptas mollitia?",
      live: true,
      case: true,
      color:"#0D001B"
    },
  ];
  const [pos, setPos] = useState(0);

  function mover(index) {
    setPos(index * 20);
  }
  return (
    <div className="mt-24 relative">
      {data.map((val, index) => {
        return <Product key={index} elem={val} mover={mover} count={index} />;
      })}

      <div className="w-full h-full pointer-events-none absolute top-0 ">
        <motion.div
          initial={{ y: pos + "rem" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.6 }}
          className="w-[30rem] h-[20rem] bg-black absolute left-[27%] rounded-lg overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
            className="w-full h-full bg-red-800 rounded-lg"
          >
            <video
              src={product_Arqitel}
              className="w-full h-full object-cover "
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
            className="w-full h-full bg-blue-200 rounded-lg"
          >
            <video
              src={product_Cula}
              className="w-full h-full object-cover "
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
            className="w-full h-full bg-red-300 rounded-lg"
          >
            <video
              src={product_webflow}
              className="w-full h-full object-cover "
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
            className="w-full h-full bg-slate-400 rounded-lg"
          >
            <video
              src={product_TTR}
              className="w-full h-full object-cover "
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
            className="w-full h-full bg-red-500 rounded-lg"
          >
            <video
              src={product_Maniv}
              className="w-full h-full object-cover "
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
            className="w-full h-full bg-red-600 rounded-lg"
          >
            <video
              src={product_YIR}
              className="w-full h-full object-cover "
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.5, 0, 0.75, 0], duration: 0.5 }}
            className="w-full h-full bg-red-700 rounded-lg"
          >
            <video
              src={product_yahoo}
              className="w-full h-full object-cover "
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
