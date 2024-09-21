import React from "react";
import { GoArrowRight } from "react-icons/go";
const Card = ({ width, start, para, hover }) => {
  return (
    <div className= 
{`w-1/2 bg-zinc-700 rounded-xl p-6 hover:${hover} ${width} min-h[30rem] flex flex-col justify-between hover:bg-purple-600`}>
      <div className="flex items-center  justify-between">
        <h3>one headiing</h3>
        <GoArrowRight className=" hover:text-pink-400 cursor-pointer" />
      </div>

      <h2 className="pt-20 text-3xl">Whatever Heading</h2>

      <div className="mt-36">
        {start === true && (
          <>
            <h2 className="mb-6 text-6xl font-semibold tracking-tight">
              Start a Chunin Exam
            </h2>

            <button
              className=" px-4 py-2 rounded-lg bg-zinc-600 hover:bg-yellow-500 hover:cursor-pointer transition duration-300 ease-in-out transform  hover:scale-110  hover:text-white trains"
            >
              {" "}
              Get Started
            </button>
          </>
        )}

        {para && (
          <p className="s text-sm transition-all  hover:delay-150">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            repellat saepe quos incidunt quidem? Eum.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
