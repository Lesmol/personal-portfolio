import React from "react";

import clock from "../../assets/Image/clock.png";

function Education(props) {
  return (
    <div>
      <h1 className="font-bold text-2xl">Education</h1>
      <div className="mt-3 ml-10 flex justify-between items-center">
        <h1 className="text-lg font-medium">{props.title}</h1>
        <div className="flex items-center">
          <img className="w-[25px]" src={clock} alt="Image of a clock" />
          <p className="text-primary ml-2">{props.duration}</p>
        </div>
      </div>
      <p className="ml-10 mt-1 mb-6">{props.description}</p>
    </div>
  );
}

export default Education;
