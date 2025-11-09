import React, { useState } from "react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import ServiceOption from "./ServiceOption";
import BookingModal from "../BookingModal/BookingModal";

const ServicesOptions = ({ selected }) => {
  const date = format(selected, "PP");
  const [service, setService] = useState({});
  // http://localhost:5000/services

  const { data: services = [],refetch,isLoading } = useQuery({
    queryKey: ["services",date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/services?date=${date}`);
      const data = await res.json();
      return data;
    },
  });
if(isLoading){
  return <isLoading></isLoading>
}

  return (
    <div className="mt-10 p-5 md:p-30 md:pt-0">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Our Special <span className="text-primary">Services</span>
        </h1>
        <h1 className="text-2xl  font-semibold">
          <span className="text-primary">Get Service On: {date}</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceOption
              setService={setService}
              service={service}
              key={service._id}
            ></ServiceOption>
          ))}
        </div>
        {/* ============ booking modal =========== */}
      </div>

      {service && (
        <BookingModal
          date={date}
          service={service}
          setService={setService}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default ServicesOptions;
