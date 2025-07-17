import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = () => {

    event.preventDefault();
  };

  return (
    <div className=" text-center">
      <p className="font-bold text-xl  mb-5">Subscribe now & get 20% off</p>
      <p className="text-gray-600 mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem dolor
        laboriosam assumenda nostrum aut odit dicta vero ea laborum veniam! Sunt
        cum voluptatibus nihil odit corrupti, iste illo sequi libero!
      </p>

      <form className="w-full flex gap-3mx-auto my-6 px-5 ">
        <input
          type="email"
          placeholder=" Enter Yout  Email"
          className="border text-gray-600 w-full outline-none sm:flex-1 rounded "
          required
        />
        <button type="submmit" className="bg-black text-white px-10 py-4 ">
          SUBSCRIBE{" "}
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
