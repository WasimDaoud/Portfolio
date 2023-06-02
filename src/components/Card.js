import React from "react";
import "../styles/card.css";

const Card = (props) => {
  return (
    <div className="over">
      <div className="card-container hover:relative w-[100%] h-[100%] flex">
        <div className="card w-[250px] h-[300px] flex flex-col justify-center p-[5px]">
          {/* image */}
          <div className="card-bg w-[100%] h-[95%] rounded-md">
              <img
                className="w-[100%] h-[100%] rounded-md"
                src={props.skill.image}
                alt=".........."
              />
          </div>
          {/* title */}
          <h1 className=" text-center text-[25px] text-white hover:scale-110 duration-1000">
            {props.skill.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
