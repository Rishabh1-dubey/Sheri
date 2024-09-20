import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className=" w-full ">
      <div className=" max-w-screen-xl mx-auto py-20 flex gap-2">
        <Card width={"base-1/3"} start={false} para={true} />
        <Card
          width={"base-1/3"}
          start={true}
          para={false}
          hover={"bg-purple-500"}
        />
      </div>
    </div>
  );
};

export default Cards;
