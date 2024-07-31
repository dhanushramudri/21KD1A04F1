import React from "react";
import EcommerceImg from "../ecommerce.png";

export default function HomeTitle() {
  return (
    <div className="w-full mt-16 flex items-center flex-col p-4">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
        Revolutionize Your <span className="text-[#0077b6]">Shopping</span>{" "}
        Experience
      </div>
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-700">
        Discover a new way to shop, tailored just for you.
      </div>
    </div>
  );
}
