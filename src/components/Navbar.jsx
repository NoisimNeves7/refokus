import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl  mx-auto py-6 flex  items-center justify-between border-b-[1px] border-zinc-600">
      <div className="flex items-center nleft">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="flex items-center gap-20 ml-28">
          {["Home", "Work", "Carrers", "", "News"].map((value, index) =>
            value.length === 0 ? (
              <span className="h-5 w-[0.8px] bg-zinc-600" key={index}></span>
            ) : (
              <a key={index} className="flex items-center gap-1 text-sm">
                {index == 1 && (
                  <span
                    style={{ boxShadow: "0 0 .45em" }}
                    className="inline-block w-[5px] h-[5px] bg-green-400 rounded-full"
                  ></span>
                )}
                {value}
              </a>
            )
          )}
        </div>
      </div>
      <Button title={"Start a Project"} />
    </div>
  );
};

export default Navbar;
