import React from "react";
import bg from "../../../assets/images/banner.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-between text-white "
    >
      <div className="md:w-1/2 p-5 md:p-30 space-y-6">
        <h1 className="text-2xl md:text-5xl font-semibold">Rediscover Youth, <span className="text-primary">Redefine Life.</span></h1>
        <p>
          Embrace a renewed sense of vitality and confidence with advanced
          anti-aging therapies. At Relive, we help you unlock the best version
          of yourself—inside and out.
        </p>
        <PrimaryButton>Contact Us</PrimaryButton>
      </div>
      <div className="md:w-1/2"></div>
    </div>
  );
};

export default Banner;
