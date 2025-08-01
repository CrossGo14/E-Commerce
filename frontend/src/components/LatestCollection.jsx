import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="text-sm sm:text-md md:text-base w-3/4 m-auto ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      {/* Rendering products */}
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 ">
        {latestProducts.map((item, index) => (
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

export default LatestCollections;
