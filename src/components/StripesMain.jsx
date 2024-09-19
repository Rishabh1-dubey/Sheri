import React from "react";
import Stripe from "./Stripe";

const StripesMain = () => {
  var data = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg",
      number: 46,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4A5ljslOy3oGTy_PTI4f0yXgpI7JvoCzGPA&s",
      number: 46,
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/en/2/2c/One_Piece_Logo.svg",
      number: 46,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoH9tPVC6Pu5Z8ck1p6D11iNxrLNrxnaeYA&s",
      number: 46,
    }, {
      url: "https://logos-world.net/wp-content/uploads/2023/12/Death-Note-Symbol.png",
      number: 46,
    },
  ];
  return (
    <div className="flex  items-center mt-20 m-2">
      {data.map((elem, index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
};

export default StripesMain;
