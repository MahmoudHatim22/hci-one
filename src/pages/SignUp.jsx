import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
<>
    <div className="flex justify-center items-center py-4">

    <Link to="/">
    <img  className="w-[250px] text-center " src="../../public/images/swaply.png"/>
    </Link>
    </div>


    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 rounded-lg ">
        <h2 className="text-3xl text-center font-semibold mb-6 bg-gradient text-transparent bg-clip-text">Create Your Account!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium bg-gradient text-transparent bg-clip-text">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium bg-gradient text-transparent bg-clip-text">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium bg-gradient text-transparent bg-clip-text">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium bg-gradient text-transparent bg-clip-text">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium bg-gradient text-transparent bg-clip-text">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full justify-center items-center text-center py-2 bg-gradient text-white rounded-md"
          >Submit</button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="bg-gradient text-transparent bg-clip-text hover:underline">
             Log in
          </a>
        </p>
      </div>
    </div>
    </> );
};

export default SignUp;
