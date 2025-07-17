import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import Productitem from "../components/Productitem";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3 ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full  sm:mb-3 cursor-pointer flex-shrink-0 "
                src={item}
                key={index}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex-1 ">
          <h1 className="font-bold text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <div className=" flex font-bold text-4xl pt-10">
            <p>
              {currency}
              {productData.price}
            </p>
          </div>
          <div className=" pt-5 text-md text-gray-500 ">
            {productData.description}
          </div>

          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2 ">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`cursor-pointer border py-2 px-4 bg-gray-100 ${
                    item == size ? "border-orange-500" : ""
                  } `}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>

            <div>
              <button
                onClick={() => addToCart(productData._id, size)}
                className="border bg-black text-white px-8 py-3 text-sm active:bg-gray-400"
              >
                ADD TO CART
              </button>
              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-gray500 mt-5 flex flex-col gap-1">
                <p>100% Original PRodct</p>
                <p>Cash on delivery is available on this Prodcut</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* review Section */}

      <div className="mt-30">
        <div className="flex">
          <b className="border px-5 py-3 text-sm ">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            doloremque exercitationem voluptate. Corrupti eum commodi porro a
            rem voluptatum dignissimos voluptatibus alias! Expedita cupiditate
            non, molestiae sit repudiandae id mollitia?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            rerum omnis autem, quas minus amet perspiciatis officiis iste,
            repudiandae, voluptatem et laborum nulla distinctio optio nihil
            modi! Accusantium, eveniet minima!
          </p>
        </div>
      </div>

      {/* Related products */}
      <div className="text-center pt-15 text-4xl">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
