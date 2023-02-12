import React from "react";
import { Route, Routes } from "react-router";
import Adminpage from "../pages/Adminpage";
import Homepage from "../pages/Homepage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin" element={<Adminpage />} />
    </Routes>
  );
};

export default AllRoutes;
