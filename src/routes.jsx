import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Register from "./pages/register/index";

const AppRoutes = ({night, setNight, contactRef }) => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage night={night}
        setNight={setNight}
        contactRef={contactRef}  />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
};
export default AppRoutes;


