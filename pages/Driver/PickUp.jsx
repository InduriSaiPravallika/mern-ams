import React, { useState } from "react";
import Button from "../../components/Button";

const PickUp = () => {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    model: "",
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
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
        Register vehicle
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
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">-- select type --</option>
                  <option value="Bus">Bus</option>
                  <option value="rickshaw">Taxi</option>
                  <option value="car">Car</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="model"
                  className="text-grey-700 text-sm font-bold"
                >
                  Vehicle Model
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="model"
                  name="model"
                  placeholder="Vehicle Model"
                  value={formData.model}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="name"
                  className="text-grey-700 text-sm font-bold"
                >
                  Vehicle Name
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Vehicle Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-green-500 hover:bg-green-800">
                Pick up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PickUp;
