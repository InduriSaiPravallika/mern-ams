import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AdminForm from "./pages/AdminForm";
import UserForm from "./pages/UserForm";
import VechicleCategory from "./pages/Admin/VechicleCategory";
import AddVehicle from "./pages/Admin/AddVehicle";
import ManageVechicle from "./pages/Admin/ManageVechicle";
import SearchVechicle from "./pages/Admin/SearchVechicle";
import RegUsers from "./pages/Admin/RegUsers";
import Reports from "./pages/Admin/Reports";
import VechicleList from "./pages/Admin/Dashboard";
import Incoming from "./pages/Admin/Incoming";
import UserDashboard from "./pages/User/Dashboard";
import Vehicle from "./pages/User/Vechicle";
import Booking from "./pages/User/Booking";
import DriverDashboard from "./pages/Driver/Dashboard";
import PickUp from "./pages/Driver/PickUp";
import Status from "./pages/Driver/Status";
import Rides from "./pages/Admin/Rides";
import Passenger from "./pages/Admin/Passenger";
import Driver from "./pages/Admin/Driver";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import UserLayout from "./components/UserLayout";
import DriverLayout from "./components/DriverLayout";
import "./index.css";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/adminlogin" element={<AdminForm />} />
          <Route path="/userlogin" element={<UserForm />} />
          <Route path="/create" element={<Register />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<VechicleList />} />
            <Route path="category" element={<VechicleCategory />} />
            <Route path="addvehicle" element={<AddVehicle />} />
            <Route path="managevehicle" element={<ManageVechicle />}>
              <Route path="incoming" element={<Incoming />} />
            </Route>
            <Route path="reports" element={<Reports />} />
            <Route path="search" element={<SearchVechicle />} />
            <Route path="regusers" element={<RegUsers />} />
            <Route path="rides" element={<Rides />}>
              <Route index element={<Driver />} />
              <Route path="passenger" element={<Passenger />} />
            </Route>
          </Route>
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="view" element={<Vehicle />} />
            <Route path="booking" element={<Booking />} />
          </Route>
          <Route path="/driver" element={<DriverLayout />}>
            <Route index element={<DriverDashboard />} />
            <Route path="status" element={<Status />} />
            <Route path="pickup" element={<PickUp />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
