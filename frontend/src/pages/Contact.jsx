import React from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = ({ id, image, price, name }) => {
  return (
    <>
      <div className="text-3xl border-t pt-10 text-center">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        <img
          className="w-full md:max-w-[400px]"
          src={assets.contact_img}
          alt=""
        />

        <div className="flex flex-col  justify-center items-start gap-6">
          <p className="font-bold text-xl text-gray-600 ">Our Store</p>
          <p className=" text-sm text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className=" text-sm text-gray-500">
            Tel: (415) 555-0132 <br /> Email: admin@forever.com
          </p>
          <p className="font-bold text-xl text-gray-600 ">Careers at Forever</p>
          <p className=" text-sm text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="px-5 py-3 bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-500 ">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </>
  );
};

export default Contact;
