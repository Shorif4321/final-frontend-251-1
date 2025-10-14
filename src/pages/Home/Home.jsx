import React from "react";
import Banner from "./Banner/Banner";
import MeetRelive from "./MeetRelive/MeetRelive";
import SpecialTreatment from "./SpecialTreatment/SpecialTreatment";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MeetRelive></MeetRelive>
      <SpecialTreatment />
      <Reviews></Reviews>
      <div className="md:my-20">
        <Contact title="Get In" title2="Touch"></Contact>
      </div>
    </div>
  );
};

export default Home;
