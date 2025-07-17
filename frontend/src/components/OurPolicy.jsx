import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around sm:gap-2 text-center py-20 text-xs sm:text-sm  md:text-base text-shadow-gray-700 ">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Easy exchange</p>
        <p className="font-medium text-gray-500 ">We offer hassle gree exchange policy</p>
      
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">7 Days return policy</p>
        <p className="font-medium text-gray-500 ">We offer hassle gree exchange policy</p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Easy exchange</p>
        <p className="font-medium text-gray-500 ">We offer hassle gree exchange policy</p>
      </div>
    </div>
  );
};

export default OurPolicy;
