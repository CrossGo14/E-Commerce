import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      console.log(response);
      if (response.data.success) {
        //here we are setting the token which is created when we signed in
        //this is created in hte backend 
        setToken(response.data.token);
      } else {

        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="  justify-center flex min-h-screen items-center ">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md ">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="mb-3 text-gray-700">Email Address</p>
            <input
              className="rounded w-full px-3 py-2 border border-gray-300 outline-none "
              type="email"
              placeholder="Enter yout Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="mb-3 text-gray-700">Password</p>
            <input
              className="rounded w-full px-3 py-2 border border-gray-300 outline-none "
              type="password"
              placeholder="Enter yout Password"
              required
              onChange={(e) => setPassowrd(e.target.value)}
              value={password}
            />
          </div>
          <button className="text-white bg-black px-10 py-4 rounded-3xl w-full ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
