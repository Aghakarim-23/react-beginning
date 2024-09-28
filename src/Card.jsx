import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <>
      <div className="w-[200px]  border">
        <img src={img} alt="" />
        <div className="p-2">
          <h1>name:{title}</h1>
          <p>description:{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
