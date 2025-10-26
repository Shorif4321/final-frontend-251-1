import React from "react";
import lab from "../../../assets/icons/pot.png";
import sun from "../../../assets/icons/sun.png";
import hart from "../../../assets/icons/harts.png";
import Treatment from "./Treatment";

const SpecialTreatment = () => {
  const treatments = [
    {
      _id: 1,
      name: "Peptide Therapy",
      img: lab,
      description: "Boost cellular regeneration and vitality.",
    },
    {
      _id: 2,
      name: "Hormone Replacement",
      img: hart,
      description: "Restore balance, energy, and well-being.",
    },
    {
      _id: 3,
      name: "Skin Rejuvenation",
      img: sun,
      description: "Advanced treatments for youthful skin.",
    },
  ];

  return (
    <div className="p-5 md:p-30 md:pt-0">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Our Specialized <span className="text-primary">Treatments</span>
        </h1>
        <p>Explore our wide range of innovative anti-aging solutions.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((treatment) => (
          <Treatment treatment={treatment} key={treatment._id}></Treatment>
        ))}
      </div>
    </div>
  );
};

export default SpecialTreatment;
