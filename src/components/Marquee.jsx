import React from "react";
import { motion } from "framer-motion";
function Marquee({ imageurl,direction }) {
  return (
    <div className="flex py-5 gap-30 whitespace-nowrap overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-sh gap-40  py-10 pr-40"
      >
        {imageurl.map((url) => (
          <img className="w-[7vw] flex-shrink-0" src={url} />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-sh gap-20  py-10 pr-40"
      >
        {imageurl.map((url) => (
          <img className="w-[7vw] flex-shrink-0" src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;

{
  /* <motion.div
initial={{ x: direction === "left" ? "0" : "-100%" }}
animate={{ x: direction === "left" ? "-100%" : "0" }}
transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
className="flex flex-shrink-0 gap-40 py-10 pr-40"
>
{imagesurls.map((url, index) => (
  <img key={index} src={url} className="" />
))}
</motion.div>
<motion.div
initial={{ x: direction === "left" ? "0" : "-100%" }}
animate={{ x: direction === "left" ? "-100%" : "0" }}
transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
className="flex flex-shrink-0 gap-40 py-10 pr-40"
>
{imagesurls.map((url, index) => (
  <img key={index} src={url} className="" />
))}
</motion.div> */
}
