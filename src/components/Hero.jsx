import React from "react";
import HeroImage from "../assets/myimage.jpg";

export const Hero = () => {
  return (
    <div
      name="home"
      className=" w-full pt-20 md:pt-40 bg-black bg-[size:20px_20px] " // Adjusted padding-top
    >
      <div className="max-w-screen-lg flex flex-col-reverse mx-auto h-full w-full text-white justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left px-6 mt-8 md:mt-0">
          <h2 className="text-4xl sm:text-7xl font-bold">
            Machine Learning Developer
          </h2>
          <p className="text-gray-500 max-w-md py-4 mx-auto md:mx-0">
          Hi, I’m Madhavendra Singh, a 3rd-year Computer Science student at Pandit Deendayal Energy University.

          I am passionate about Machine Learning, AI, and Software Development. I love exploring new technologies, solving complex problems, and building innovative solutions.

          Feel free to explore my work and connect with me!
          </p>
          <div className="w-fit px-6 py-3 mt-5 rounded-md bg-gradient-to-r from-rose-500 to-black-50 cursor-pointer">
            <a href = "/MadhavendraResume-3.pdf" download={true}>
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-0">
          <img
            src={HeroImage}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
