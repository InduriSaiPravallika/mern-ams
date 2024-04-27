import React from "react";
import { FaCar } from "react-icons/fa";

const VechicleList = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="bg-orange-500 flex justify-between items-center rounded-lg shadow-lg px-4 py-4">
        <div>
          <FaCar />
        </div>
        <div className="p-3">
          <h1 className="font-bold">4</h1>
          <p className="text-sm font-medium">Today Vehicle entries</p>
        </div>
      </div>
      <div className="bg-purple-500 flex justify-between items-center rounded-lg p-4">
        <div>
          <FaCar />
        </div>
        <div>
          <h1 className="font-bold">10</h1>
          <p className="text-sm font-medium">Yesterday Vehicle entries</p>
        </div>
      </div>
      <div className="bg-green-500 flex justify-between items-center rounded-lg p-4">
        <div>
          <FaCar />
        </div>
        <div>
          <h1 className="font-bold">9</h1>
          <p className="text-sm font-medium">Last 7 days Vehicle entries</p>
        </div>
      </div>
      <div className="bg-rose-500 flex justify-between items-center rounded-lg p-4">
        <div>
          <FaCar />
        </div>
        <div>
          <h1 className="font-bold">22</h1>
          <p className="text-sm font-medium">Total Vehicle entries</p>
        </div>
      </div>
      <div className="bg-slate-500 flex justify-between items-center rounded-lg p-4">
        <div>
          <FaCar />
        </div>
        <div>
          <h1 className="font-bold">5</h1>
          <p className="text-sm font-medium">Total register users</p>
        </div>
      </div>
      <div className="bg-indigo-500 flex justify-between items-center rounded-lg p-4">
        <div>
          <FaCar />
        </div>
        <div>
          <h1 className="font-bold">5</h1>
          <p className="text-sm font-medium">listed category</p>
        </div>
      </div>
    </div>
  );
};

export default VechicleList;
