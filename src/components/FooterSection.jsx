import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<>
    <div className="margin flex flex-col px-4 sm:px-8 py-5 border-t-4 m-4 mt-11 sm:m-[100px]"></div>



  <div className="mt-[100px] items-center justify-center">
   <div className="h-[2px] bg-primary"></div>
    <div className="flex flex-col sm:flex-row items-center py-10">
    <div className="flex-1  sm:mb-8 flex justify-center">
      <img className="w-[200px] justify-start tex" src="../../public/images/swaply.png" alt="Swaply Logo" />
    </div>

    <div className="flex-1 text-center sm:mb-8">
      <ul className="space-y-2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Explore">Explore</Link></li>
        <li><Link to="/Notes">Notes</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/Support">Support</Link></li>
      </ul>
    </div>



    <div className="flex-1 flex flex-col sm:text-center sm:items-center">
      <div className="mb-4">
        <h5 className="font-bold m-4 text-center">Follow Us:</h5>
        <div className="flex space-x-4 justify-center">
          <img src="../../public/images/instagram.png" alt="Instagram" className="w-[30px] h-[30px]" />
          <img src="../../public/images/facebook.png" alt="Facebook" className="w-[30px] h-[30px]" />
          <img src="../../public/images/x.png" alt="X" className="w-[30px] h-[30px]" />
        </div>
      </div>


    </div>
  </div>
</div>

</>

  )
}