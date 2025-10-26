import React from "react";

const ServicesOptions = ({selected}) => {
  return (
    <div className="mt-10 p-5 md:p-30 md:pt-0">
      <div className="text-center">
       
        <h1 className="text-2xl md:text-4xl font-semibold">
          Our Special <span className="text-primary">Services</span>
        </h1>

         <h1 className="text-2xl  font-semibold">
          <span className="text-primary"> Get Service On: {
              selected
                ? `Selected: ${selected.toLocaleDateString()}`
                : "Pick a day."
            }</span>
        </h1>
        
       
      </div>
    </div>
  );
};

export default ServicesOptions;
