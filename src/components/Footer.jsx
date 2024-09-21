import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32  ">
        <div className="basis-1/2 ">
          <h1 className="text-[11.3rem] font-semibold leading-none tracking-tight">
            Ninja
          </h1>
        </div>
        {/* ---------box-1 -----------------------*/}
        <div className="basis-1/2 flex gap-20 ">
          <div className="basis-1/3">
            <h4 className="mb-10 capitalize">Ninja Icon</h4>
            {["instagram", "twitter", "linkedln"].map((item, index) => (
              <a className=" block mt-2 capitalize text-zinc-500">{item}</a>
            ))}
          </div>

          {/*--------------- box-2 ----------------------------- */}

          <div className="basis-1/3">
            <h4 className="mb-10 capitalize">Ninja Icon</h4>
            {["instagram", "twitter", "linkedln"].map((item, index) => (
              <a className=" block mt-2 capitalize text-zinc-500">{item}</a>
            ))}
          </div>

          <div>
            <p className="mb-6 capitalize">
              The leaf village the very good with rich talent and do you know all the legendary senon and ninjas also came from leaf village so it is a factory for producingg the highly extreamly talented nijas
            </p>
            <button className="  border transition duration-300 ease-in-out transform  hover:scale-110  hover:text-white trains py-2 px-6 rounded-3xl hover:bg-purple-600" >Contact us</button>
          </div>

        </div>
      </div>
    

        <p className=" ml-52 mx-auto text-center">Made In ❤️ India By Rishabh Dubey</p>
    
    </div>
  );
};

export default Footer;
