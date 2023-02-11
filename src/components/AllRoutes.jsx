import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default AllRoutes;
