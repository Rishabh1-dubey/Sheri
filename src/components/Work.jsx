import React from "react";

const Work = () => {
  //for image rendering
  var images = [
    {
      url: "https://preview.redd.it/today-is-october-10-happy-birthday-naruto-uzumaki-btw-v0-ov6g99si9btb1.jpg?width=640&crop=smart&auto=webp&s=e8c81409ab8c543e3ae35ede436baef1641f13bb",
      left: "50%",
      top: "50%",
      isActive: true,
    },
    {
      url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/i/e/c/large-a0100-naruto-anime-sasuke-uchiha-poster-12-x-18-inch-300-original-imagjyb7w6szwpbu.jpeg?q=20&crop=false",
      left: "56%",
      top: "44%",
      isActive: false,
    },
    {
      url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/z/u/a/medium-itachi-uchiha-anime-character-hd-matte-finish-poster-original-imaghf5yx9ts8xdv.jpeg?q=90&crop=false",
      left: "56%",
      top: "59%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcfg20XSbltA9PfDv4vLZH0tkfia2I-emCQ&s",
      left: "60%",
      top: "53%",
      isActive: false,
    },
    {
      url: "https://qph.cf2.quoracdn.net/main-qimg-383c15d0552e8c6325d86f88575bd7a9-pjlq",
      left: "60%",
      top: "55%",
      isActive: false,
    },
  ];

  return (
    <div className="w-full ">
      <div className=" relative max-w-screen-xl mx-auto text-center ">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight ">
          Ninja 
        </h1>
        <div className=" absolute top-0 w-full h-full ">
          {images.map((elem, index) =>
            elem.isActive &&  (
               <img
                className="absolute  w-60 rounded-xl -translate-x-[50%] -translate-y-[50%] "
                key={index}
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                alt=""
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
