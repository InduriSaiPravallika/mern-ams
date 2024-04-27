import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Driver = () => {
  
  return (
    <div className="bg-white rounded-lg shadow-md">
      <h1 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">
        Driver Management
      </h1>
      <div className="px-3 py-2" id="printableArea">
        <table className="text-sm text-left md:text-md border-collapse table-auto w-full">
          <thead>
            <tr>
              <th className="py-3 text-white bg-green-500">S/N</th>
              <th className="py-3 text-white bg-green-500">Name</th>
              <th className="py-3 text-white bg-green-500">Vehicle</th>
              <th className="py-3 text-white bg-green-500">Plate number</th>
              <th className="py-3 text-white bg-green-500">Rating</th>
              <th className="py-3 text-white bg-green-500">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3">1</td>
              <td className="py-3">John Doe</td>
              <td className="py-3">Toyota Camery</td>
              <td className="py-3">CRY 999</td>
              <td className="py-3">4.7</td>
              <td className="py-3 space-x-2">
                <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-red-500 hover:bg-red-800">
                  Ban
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-3">2</td>
              <td className="py-3">Dave Cole</td>
              <td className="py-3">Honda</td>
              <td className="py-3">HON 989</td>
              <td className="py-3">3.7</td>
              <td className="py-3 space-x-2">
                <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-red-500 hover:bg-red-800">
                  Ban
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Driver;
