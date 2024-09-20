import React from "react";

function Marquee({ imageurl }) {
  return (
    <div className="flex py-5 gap-20 whitespace-nowrap overflow-hidden ">
      {imageurl.map((url) => (
        <img className="w-[7vw] flex-shrink-0" src={url} />
      ))}
    </div>
  );
}

export default Marquee;
