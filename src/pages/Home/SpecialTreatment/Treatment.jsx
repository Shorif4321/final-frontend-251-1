import React from "react";
import { Link } from "react-router-dom";
import arrow from '../../../assets/icons/arrow.png'

const Treatment = ({ treatment }) => {
  const { name, img, description } = treatment;
  return (
    <div className="rounded-lg bg-base-200 mt-8 shadow-sm">
      <img className="p-3 mt-5" src={img} alt="image" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
        {description}
        </p>
        <Link className="text-primary font-semibold flex items-center text-lg" to="/">Learn More <img className="ms-2" src={arrow} alt="" /></Link>
      </div>
    </div>
  );
};

export default Treatment;
