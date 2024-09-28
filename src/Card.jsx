import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <>
      <div className="w-[200px] h-[350px] flex flex-col justify-between border">
        <img src={img} className="w-full h-[200px] object-cover" alt="" />
        <div className="p-2">
          <h1 className="my-3"> <b>Name:</b> {title}</h1>
          <p className="my-3"> <b>Description:</b> {description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
