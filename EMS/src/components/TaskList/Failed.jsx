/* eslint-disable react/prop-types */
// import React from "react";

const Failed = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-800 p-5 rounded-xl">
      <div className="flex items-center justify-between ">
        <h3 className="text-sm bg-red-600 p-2 rounded-md">{data.category}</h3>
        <h4 className="">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm">{data.description}</p>
      <div>
        <button className="mt-3 w-full bg-green-700 p-2">Failed</button>
      </div>
    </div>
  );
};

export default Failed;
