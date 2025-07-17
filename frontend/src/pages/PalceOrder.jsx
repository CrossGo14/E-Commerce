import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PalceOrder = () => {
  const [method, setMethod] = useState("cod");
  const{navigate} =useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address "
          className="border border-gray-300 w-full rounded py-1.5 px-3.5"
        />
        <input
          type="text"
          placeholder="Street Name"
          className="border border-gray-300 w-full rounded py-1.5 px-3.5"
        />

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City "
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
          <input
            type="text"
            placeholder="State "
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="ZipCode"
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          className="border border-gray-300 w-full rounded py-1.5 px-3.5"
        />
      </div>

      {/* Right Side */}

      <div className="mt-8">
        <div className="mt-8 min-w-120">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment selection mehod */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => {
                setMethod("stripe");
              }}
              className=" flex flex-row items-center border-gray-400 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "stripe" ? "bg-green-400" : ""
                } `}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
            </div>

            <div
              onClick={() => {
                setMethod("razorpay");
              }}
              className=" flex flex-row items-center border-gray-400 border p-2 px-3 cursor-pointer  ${method==='cod' ? 'bg-green-400' : '' }"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "razorpay" ? "bg-green-400" : ""
                } `}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
            </div>

            <div
              onClick={() => {
                setMethod("cod");
              }}
              className=" flex flex-row items-center border-gray-400 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }  `}
              ></p>
              <p className="text-gray-500 mx-5 text-sm font-medium">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <button onClick={()=>{navigate('/orders')}} className="bg-black text-white px-10 py-3 mt-10 w-full">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default PalceOrder;
