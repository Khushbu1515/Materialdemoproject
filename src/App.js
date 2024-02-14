// App.js

import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Changepass from "./authentication/Changepass";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/changepass" element={<Changepass/>} />
    </Routes>
  );
};

export default App;
