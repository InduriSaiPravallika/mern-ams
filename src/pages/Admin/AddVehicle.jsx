import React, { useState } from "react";
import Button from "../../components/Button";

const AddVehicle = () => {
  const [vehicleData, setVehicleData] = useState({
    type: "",
    vehicle: "",
    color: "",
    regNumber: "",
    ownerName: "",
    ownerNumber: "",
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setVehicleData((prevVehicleData) => {
      return {
        ...prevVehicleData,
        [name]: type === "checkbox" ? checked : value,
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
        Add Vehicle
      </h2>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-white px-8 pt-6 pb-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="type"
                  className="text-grey-700 text-sm font-bold"
                >
                  Vehicle Type
                </label>
              </div>
              <div className="basis-3/4">
                <select
                  id="type"
                  name="type"
                  value={vehicleData.type}
                  onChange={handleChange}
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  
                  <option value="fourWheeler">FourWheeler</option>
                  
                </select>
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="vehicle"
                  className="text-grey-700 text-sm font-bold"
                >
                  Vehicle Name
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  placeholder="vehicle name"
                  value={vehicleData.vehicle}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="vehicle"
                  className="text-grey-700 text-sm font-bold"
                >
                  Color
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="color"
                  name="color"
                  placeholder="color name"
                  value={vehicleData.color}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="regNumber"
                  className="text-grey-700 text-sm font-bold"
                >
                  Registration Number
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="regNumber"
                  name="regNumber"
                  placeholder="Registration Number"
                  value={vehicleData.regNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="ownerName"
                  className="text-grey-700 text-sm font-bold"
                >
                  Owner Name
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  placeholder="Owner Name"
                  value={vehicleData.ownerName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="ownerNumber"
                  className="text-grey-700 text-sm font-bold"
                >
                  Owner Number
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="ownerNumber"
                  name="ownerNumber"
                  placeholder="Owner Number"
                  value={vehicleData.ownerNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-green-500 hover:bg-green-800">
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
