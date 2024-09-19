import React from "react";
import { LOGO_URL } from "../utils/constents";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className=" border border-red-200 max-w-screen-xl mx-auto p-8 mr-14 flex items-center justify-between ">
      {/* ----- we have a another div for showing buttonn */}
     <div className=" leftdiv flex  items-center">
     <img className="mr-10 h-6" src={LOGO_URL} alt="logo" />
      <div className="flex  ml-6 gap-16">
        {["Home", "Work", "Contact", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span className="h-10 w-[2.5px] bg-zinc-500"></span>
          ) : (
            <a className="  flex items-center gap-1 text-sm">
              {index === 1 && (
                <span className=" inline-block bg-green-600 h-1 w-1 rounded-xl "></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
     </div>
      <Button/>
    </div>
  );
};

export default Navbar;
