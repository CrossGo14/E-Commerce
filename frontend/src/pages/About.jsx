import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <>
      <div className="text-2xl text-center  pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6  md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            consequatur ut perferendis quia dicta aspernatur eligendi porro
            dolore expedita. Asperiores veritatis iusto mollitia praesentium
            molestiae aspernatur quibusdam? Aliquam, voluptatem libero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            similique veritatis dolore at delectus id repudiandae accusantium,
            velit assumenda placeat quae exercitationem earum saepe ipsum
            perspiciatis accusamus deserunt praesentium itaque?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            quos, laudantium non voluptatum dignissimos modi qui adipisci
            reiciendis similique nemo quae vel deserunt architecto! Reiciendis
            quaerat nostrum nemo nisi ex!
          </p>
        </div>
      </div>

      <div className="text-2xl pt-8 ">
        <Title text1={"WHY"} text2={"CHOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            fuga, molestiae necessitatibus quia dolorum tenetur in! Ab a nobis
            minima ullam natus consequatur repudiandae, aliquam optio soluta
            libero laboriosam quas.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convinience</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            fuga, molestiae necessitatibus quia dolorum tenetur in! Ab a nobis
            minima ullam natus consequatur repudiandae, aliquam optio soluta
            libero laboriosam quas.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Care Service</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            fuga, molestiae necessitatibus quia dolorum tenetur in! Ab a nobis
            minima ullam natus consequatur repudiandae, aliquam optio soluta
            libero laboriosam quas.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </>
  );
};

export default About;
