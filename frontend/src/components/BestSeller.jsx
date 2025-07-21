import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestproduct = products.filter((item) => item.bestseller);
    setBestSeller(bestproduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST " text2="SELLER" />
        <p className="w-2/3/4 text-sm text-gray-700 sm:text-sm md:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque
          sint quas aperiam vitae cumque recusandae sapiente accusantium
          reprehenderit modi, quo ipsam harum facere perferendis temporibus
          earum, corporis ratione libero.
        </p>
      </div>
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 ">
        {bestSeller.map((item, index) => (
          <>
            <Productitem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
