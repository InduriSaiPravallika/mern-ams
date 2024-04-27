import React, { useState } from "react";
import Button from "../../components/Button";

const Status = () => {
  const [formData, setFormData] = useState({
    platenumber: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value, checked, status } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: status === "checkbox" ? checked : value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
    console.log("form submitted");
  };
  return (
    <div className="bg-white rounded-lg shadow-md">
      <h2 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">
        Platenumber status
      </h2>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-white px-8 pt-6 pb-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="status"
                  className="text-grey-700 text-sm font-bold"
                >
                  status
                </label>
              </div>
              <div className="basis-3/4">
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">-- select status --</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="platenumber"
                  className="text-grey-700 text-sm font-bold"
                >
                  Vehicle Plate Number
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="platenumber"
                  name="platenumber"
                  placeholder="Vehicle plate number"
                  value={formData.platenumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-green-500 hover:bg-green-800">
                update status
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Status;