import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PalceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        status: "Order Placed", // ✅ Required
        paymentMethod: method, // ✅ Required
        payment: false, // optional if you want to pass it, otherwise defaults to false
        date: Date.now(), // ✅ Required
      };

      switch (method) {
        //API Calls for COD
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          console.log(response.data);
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "stripe":
          try {
            const responseStripe = await axios.post(
              backendUrl + "/api/order/stripe",
              orderData,
              { headers: { token } }
            );
            console.log("🔥 Stripe response:", responseStripe.data);

            if (responseStripe.data.success) {
              const { session_url } = responseStripe.data;
              window.location.replace(session_url);
            } else {
              toast.error(responseStripe.data.message);
            }
          } catch (error) {
            console.error("Stripe error:", error);
            toast.error(error.message);
          }
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            type="text"
            placeholder="First Name"
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
        </div>
        <input
          required
          type="email"
          placeholder="Email Address "
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 w-full rounded py-1.5 px-3.5"
        />
        <input
          required
          type="text"
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          placeholder="Street Name"
          className="border border-gray-300 w-full rounded py-1.5 px-3.5"
        />

        <div className="flex gap-3">
          <input
            required
            type="text"
            placeholder="City "
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
          <input
            required
            type="text"
            placeholder="State "
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            type="number"
            placeholder="ZipCode"
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
          <input
            required
            type="text"
            placeholder="Country"
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-300 w-full rounded py-1.5 px-3.5"
          />
        </div>
        <input
          required
          type="number"
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
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
          <button
            type="submit"
            className="bg-black text-white px-10 py-3 mt-10 w-full cursor-pointer"
          >
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
};

export default PalceOrder;
