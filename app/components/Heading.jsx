import React from "react";
// import { Raleway } from "next/font/google";
// const titleFont = Raleway({
//   subsets: ["latin"],
//   weight: "700",
// });
export default function Heading({ title }) {
  return (
    <div className="grid place-items-center pt-16 pb-6">
      <p className={`text-4xl  pb-2 font-Poppins font-bold text-[#474665]`}>
        {title}
      </p>
    </div>
  );
}
