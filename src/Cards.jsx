import React from "react";
import ProductData from "./ProductData";
import Card from "./Card";

const Cards = () => {
  return (
          <div className="h-screen flex flex-wrap justify-center items-center gap-10">
            {ProductData.map((item) => {
              return (
                <Card
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
      </div>
  );
};

export default Cards;
