import { useQuery } from "@tanstack/react-query";
import React from "react";
import Expert from "./Expert";
import Loading from "../../../components/Loading/Loading";

const Experts = () => {
  const {
    data: specialists = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-specialists"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/all-specialists`);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="p-5 md:p-30 md:pt-0">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Our <span className="text-primary">Experts</span>
        </h1>
        <p>Explore our wide range of innovative anti-aging solutions.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialists.map((special) => (
          <Expert special={special} key={special._id}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
