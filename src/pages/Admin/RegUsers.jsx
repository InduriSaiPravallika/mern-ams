import React from "react";
import Button from "../../components/Button";

const RegUsers = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <h1 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">
        Registered Users
      </h1>
      <div className="px-3 py-2">
        <table className="text-sm text-left md:text-md border-collapse table-auto w-full">
          <thead>
            <tr>
              <th className="py-3 bg-green-500 text-white">S/N</th>
              <th className="py-3 bg-green-500 text-white">FullName</th>
              <th className="py-3 bg-green-500 text-white">Contact Number</th>
              <th className="py-3 bg-green-500 text-white">Email</th>
              <th className="py-3 bg-green-500 text-white">
                Registration Date
              </th>
              <th className="py-3 bg-green-500 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3">1</td>
              <td className="py-3">John Doe</td>
              <td className="py-3">3243009894</td>
              <td className="py-3">John@mail.com</td>
              <td className="py-3">2023-02-26</td>
              <td className="py-3 space-x-4">
                <Button>Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegUsers;
