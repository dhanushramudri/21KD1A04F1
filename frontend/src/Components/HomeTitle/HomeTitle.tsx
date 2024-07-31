import React from "react";
import EcommerceImg from "../ecommerce.png";

export default function HomeTitle() {
  return (
    <div
      className="w-full mt-16 flex items-center flex-col"
      // style={{
      //   backgroundImage: `url(${EcommerceImg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="text-4xl font-bold text-center">
        Revolutionize Your <span className="text-[#0077b6]">Shopping </span>
        Experience
      </div>
    </div>
  );
}
