import React, { useState } from "react";
import { Product } from "./Product";
import { motion } from "framer-motion";
import demo from "../../assets/demo.mp4";
import demo1 from "../../assets/demo1.mp4";
import demo2 from "../../assets/demo2.mp4";
import demo3 from "../../assets/demo3.mp4";
import demo4 from "../../assets/demo4.mp4";
import demo5 from "../../assets/demo5.mp4";
const Products = () => {
  var product = [
    {
      title: "Leaf Village",
      description:
        "Situated in the Land of Wind, Sunagakure is surrounded by desert, offering natural protection against invasions. The village is led by the Kazekage, with Gaara being the most recent holder of the title",
      live: false,
      case: false,
    },
    {
      title: "hidden of the mist Village",
      description:
        "Found in the Land of Water, Kirigakure is known for its thick mist and mountainous terrain, making it difficult to locate. The village has a history of producing skilled swordsmen, such as the Seven Ninja Swordsmen",
      live: false,
      case: false,
    },
    {
      title: "Cloud Village",
      description:
        "Located in the Land of Lightning, Kumogakure is nestled in high mountains and is literally hidden in the clouds. The village is known for its lightning-based jutsu and has produced notable shinobi like Killer B and Darui",
      live: false,
      case: false,
    },
    {
      title: "Rock Village",
      description:
        "Situated in the Land of Earth, Iwagakure is surrounded by rocky terrain, providing a natural defense. The village is known for its earth-based jutsu and has played a significant role in various shinobi wars.",
      live: false,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {product.map((val, index) => (
        <Product val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0  w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          animate={{ y: pos + `rem` }}
          className=" window absolute w-[32rem] h-[23rem] left-[45%] -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full  "
          >
            <video
              className=" absolute object-cover rounded-3xl"
              autoPlay
              loop
              muted
              src={demo1}
            ></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video
              className=" absolute object-cover rounded-3xl"
              autoPlay
              loop
              muted
              src={demo2}
            ></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video
              className=" absolute object-cover rounded-3xl"
              autoPlay
              loop
              muted
              src={demo3}
            ></video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video
              className=" absolute object-cover rounded-3xl"
              autoPlay
              loop
              muted
              src={demo4}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
