import React from "react";
import { Product } from "./Product";

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
  return (
    <div className="">
    {product.map((val,index)=>  <Product val={val} />)}
    </div>
  );
};

export default Products;
