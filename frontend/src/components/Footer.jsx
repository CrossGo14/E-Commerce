import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (

    <>  
    
    <div className="flex flex-col sm:flex-row mt-10 gap-10  ">
      <div className="sm:w-1/2">
        <img src={assets.logo} alt="" className="w-30 mb-5" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          repellendus architecto doloribus reiciendis eveniet distinctio
          perferendis officia officiis, exercitationem laboriosam nulla, saepe
          est eaque a amet, consequatur voluptates fugit asperiores.
        </p>
      </div>
      <div className="sm:w-1/4">
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="mt-5 text-sm text-gray-600 gap-2 flex flex-col ">
          <li> Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="sm:w-1/4">
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="mt-5 text-sm text-gray-600 gap-2 flex flex-col ">
          <li> +91 213423 234123</li>
          <li>example@gmail.com</li>
          <li>Instagram</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
      <div>

        <hr className="mt-5"/>
        <p className="py-5 text-sm text-center">Copyright 2024@forever.comAll Right deserved </p>
      </div>
    </>
  );
};

export default Footer;
