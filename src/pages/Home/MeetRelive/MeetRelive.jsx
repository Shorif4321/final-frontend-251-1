import React from "react";
import meet from "../../../assets/images/MeetRelive.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MeetRelive = () => {
  return (
    <div className="md:flex gap-10 justify-between items-center p-5 md:p-30">
      <div className="md:w-1/2">
        <img src={meet} alt="" />
      </div>
      <div className="md:w-1/2  space-y-6">
        <h1 className="text-2xl md:text-5xl font-semibold mt-4 md:mt-0">
          Rediscover Youth, <span className="text-primary">Redefine Life.</span>
        </h1>
        <p>
          Embrace a renewed sense of vitality and confidence with advanced
          anti-aging therapies. At Relive, we help you unlock the best version
          of yourself—inside and out.
        </p>
        <PrimaryButton>Learn More</PrimaryButton>
      </div>
    </div>
  );
};

export default MeetRelive;
