import React from "react";

const Cards = ({ name, age, info, logo, earnings }) => {
  return (
    <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white m-4 transition-transform transform hover:scale-105">
      <div className="flex items-center p-4">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src={logo}
          alt="User Logo"
        />
        <div>
          <h2 className="text-xl font-bold text-black">{name}</h2>
          <p className="text-gray-600">Age: {age}</p>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700 text-base">{info}</p>
      </div>
      <div className="px-4 pb-2">
        <span className="text-green-500 font-bold text-lg">${earnings}</span>
      </div>
    </div>
  );
};

export default Cards;
