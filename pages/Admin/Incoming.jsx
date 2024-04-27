import React, { useState } from "react";
import Button from "../../components/Button";

const Incoming = () => {
    const [formData, setFormData] = useState({
        remark: "",
        charge: "",
        status: "",
      });
    console.log(formData)
      const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData((prevVehicleData) => {
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
      <h1 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">
        View Incoming Vehicle
      </h1>
      <div className="px-8 py-2">
        <table className="text-sm text-left md:text-md border-collapse table-fixed w-full">
          <tbody>
            <tr>
              <th className="border-2 px-2 py-3">Parking Number</th>
              <td className="border-2 px-2 py-3">123456789</td>
            </tr>
            <tr>
              <th className="border-2 px-2 py-3">Vehicle category</th>
              <td className="border-2 px-2 py-3">Bus</td>
            </tr>
            <tr>
              <th className="border-2 px-2 py-3">Vehicle company name</th>
              <td className="border-2 px-2 py-3">Honda</td>
            </tr>
            <tr>
              <th className="border-2 px-2 py-3">Registrationn number</th>
              <td className="border-2 px-2 py-3">UPS56789</td>
            </tr>
            <tr>
              <th className="border-2 px-2 py-3">Owner Name</th>
              <td className="border-2 px-2 py-3">John</td>
            </tr>
            <tr>
              <th className="border-2 px-2 py-3">Registration number</th>
              <td className="border-2 px-2 py-3">8823456789</td>
            </tr>
            <tr>
              <th className="border-2 px-2 py-3">color</th>
              <td className="border-2 px-2 py-3">red</td>
            </tr>
            <tr>
              <th className="border-2 px-2 py-3">Time in</th>
              <td className="border-2 px-2 py-3">2023-02-27</td>
            </tr>
            <tr>
              <th className="border-2 px-2 py-3">status</th>
              <td className="border-2 px-2 py-3">Vehicle in</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-white px-8 pt-6 pb-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="type"
                  className="text-grey-700 text-sm font-bold"
                >
                  Status
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
                  <option value="vehicleOut">Outgoing vehicle</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="vehicle"
                  className="text-grey-700 text-sm font-bold"
                >
                  Parking Charge
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id="charge"
                  name="charge"
                  placeholder="Enter parking price"
                  value={formData.charge}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="remark"
                  className="text-grey-700 text-sm font-bold"
                >
                  Remark
                </label>
              </div>
              <div className="basis-3/4">
                <textarea
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="remark"
                  id="remark"
                  value={formData.remark}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-green-500 hover:bg-green-800">
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Incoming;
