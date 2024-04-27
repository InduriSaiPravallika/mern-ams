import React, { useState } from "react";
import Button from "../../components/Button";

// StarRating component
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span className={index <= rating ? "text-yellow-500" : "text-gray-400"}>&#9733;</span>
          </button>
        );
      })}
      <p>Rating: {rating}</p>
    </div>
  );
};

// Booking component
const Booking = () => {
  const [vehicleData, setVehicleData] = useState({
    type: "",
    start: "",
    end: "",
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
    alert("Form submitted");
    console.log("Form submitted with vehicle data:", vehicleData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <h2 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">
        Book Ride
      </h2>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-white px-8 pt-6 pb-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label htmlFor="type" className="text-grey-700 text-sm font-bold">
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
                  <option value="">-- select type --</option>
                  <option value="Bus">Bus</option>
                  <option value="rickshaw">Taxi</option>
                  <option value="car">Car</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label htmlFor="start" className="text-grey-700 text-sm font-bold">
                  Start Routes
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  type="text"
                  id="start"
                  name="start"
                  placeholder="Start Routes"
                  value={vehicleData.start}
                  onChange={handleChange}
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label htmlFor="end" className="text-grey-700 text-sm font-bold">
                  Finish Routes
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  type="text"
                  id="end"
                  name="end"
                  placeholder="Finish Routes"
                  value={vehicleData.end}
                  onChange={handleChange}
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-grey-700 text-sm font-bold">
                Rate Your Last Ride
              </label>
              <StarRating />
            </div>

            <div className="flex items-center justify-center">
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-green-500 hover:bg-green-800">
                Book Ride
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
