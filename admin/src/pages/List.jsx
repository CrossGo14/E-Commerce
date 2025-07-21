import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    //here we are again authenticating with the help of token to chekc whether the user
    //is allowed to check for the list products or not
    //this is unecessary but we still used it
    try {
      const response = await axios.get(backendUrl + "/api/product/list", {
        headers: { token },
      });
      console.log(response);//to chck the repsonse
      if (response.data.success) {
        setList(response.data.products);//setting the data into the setList usetste variable
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeItem = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        {
          headers: { token },
        }
      );
      console.log(response);

      if (response.data.success) {
        toast.success("Data has been deleted");
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  return (
    <>
      <p className="mb-2">All Products list</p>
      <div className="flex flex-col gap-2">
        {/* List Tbale title */}
        <div className="grid  md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-2 bg-gray-100 text-sm ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <>
            <div
              className="grid  md:grid-cols-[1fr_3fr_1fr_1fr_1fr]  items-center border text-sm "
              key={index}
            >
              <img className="w-12" src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency}
                {item.price}
              </p>
              <p
                onClick={()=>removeItem(item._id)}
                className="text-right md:text-center cursor-pointer text-lg "
              >
                X
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default List;
