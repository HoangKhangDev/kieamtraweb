import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Login from "../Pages/Login";
import User from "../Pages/User";


export default class UserRoute extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/edit" element={<About />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </>
    );
  }
}
