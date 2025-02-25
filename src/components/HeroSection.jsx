import React from 'react'
import Button from './Button'

const HeroSection = () => {
  return (
<div className="flex flex-col items-center mt-[50px] sm:mt-[85px] px-4 lg:ml-[15%]">
  <div className="flex flex-col sm:flex-row items-center mb-[40px] sm:mb-[60px] text-center  justify-center lg:mr-[22%]">
    <h2 className="bg-gradient bg-clip-text text-transparent font-bold text-3xl sm:text-5xl">
      Welcome to
    </h2>
    <img
      className="w-[100px] sm:w-[150px] sm:ml-3 mt-3 sm:mt-0"
      src="../../public/images/swaply.png"
      alt="Swaply Logo"
    />
  </div>
  <div className="flex flex-col lg:flex-row items-center w-full   ">
    <h1 className="mb-[40px] sm:mb-[50px] text-4xl sm:text-8xl font-bold text-center lg:text-left flex-1">
      Learn, Share and Grow Together
    </h1>
    <div className="p-4 flex-1 flex flex-col items-center sm:items-start">
      <div className=" items-center p-4 mb-5">
        <div className="relative w-full sm:w-ao xl:w-[100%] max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-[250px] pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 ml-7 mb-7">
        <Button
          to="/Explore"
          className="bg-gradient text-white px-8 py-2 rounded-md"
        >
          Explore
        </Button>
        <Button
          to="/Login"
          className="border-gradient px-8 py-2 rounded-md"
        >
          Login
        </Button>
      </div>
    </div>
  </div>
</div>



  )
}

export default HeroSection