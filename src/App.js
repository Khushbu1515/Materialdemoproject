// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Changepass from "./pages/auth/Changepass";
import Students from "./pages/Students";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/changepass" element={<Changepass />} />
        <Route path="/students" element={<Students />} />
      </Route>
    </Routes>
  );
};

export default App;
