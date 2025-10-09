import React from "react";
import review from "../../../assets/images/review.png";
import review1 from "../../../assets/images/review1.png";
import review2 from "../../../assets/images/review2.png";
import Review from "./Review";
const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 42,
      img: review,
      message:
        "After just three months with Relive's  peptide therapy, I feel like I've turned back the clock by a decade. My energy  levels are through the roof! ",
    },
    {
      name: "Michael Thomas",
      age: 48,
      img: review1,
      message:
        "The hormone replacement therapy at Relive has completely transformed my quality of life. I sleep better, think clearer.",
    },
    {
      name: "Jennifer Lee",
      age: 45,
      img: review2,
      message:
        "After just three months with Relive's  peptide therapy, I feel like I've turned back the clock by a decade. My energy  levels are through the roof! ",
    },
  ];

  return (
    <div className="p-5 md:mx-30 bg-secondary rounded">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-4xl font-semibold mt-5">
          What Our <span className="text-primary">Clients</span> Say
        </h1>
        <p>Explore our wide range of innovative anti-aging solutions.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5">
        {testimonials.map((review) => (
          <Review review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
