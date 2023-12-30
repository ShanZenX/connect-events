import React from "react";
import Image from "next/image";
// import { Poppins } from "next/font/google";

// const PoppinsFont = Poppins({ subsets: ["latin"], weight: "400" });
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function HomeServicesModule(props) {
  return (
    <div className="flex flex-col gap-6  text-black border hover:shadow-[0_10px_20px_0px_rgba(0,0,0,0.2)] border-gray  h-96 items-center justify-evenly  rounded-md hover:scale-[1.04] bg-white border-black text-center transition-transform md:m-10 w-2/3 md:w-1/3 lg:w-1/4 mb-10 p-3 overflow-hidden">
      <Image src={props.logo} alt={props.alt} className="" />
      <div className="-mt-[50px]">
        <h1 className="font-Poppins font-semibold p-2 text-2xl text-orange-400">
          {props.title}
        </h1>
        <p className="font-poppins font-light">{props.des}</p>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col gap-6  text-white shadow-[0_10px_20px_0px_rgba(0,0,0,0.3)] border-gray  h-96 items-center justify-center rounded-md hover:scale-[1.04] bg-gradient-to-t from-[#303334] to-[#55585bdd] border-black text-center transition-transform md:m-10 w-2/3 md:w-1/3 lg:w-1/4 mb-10 p-8">
<Image
  src={props.logo}
  alt={props.alt}
  className="w-full object-cover h-20"
/>
<h1 className="font-Poppins font-semibold p-2 text-2xl">{props.title}</h1>
<p className="font-poppins font-light">{props.des}</p>
</div> */
}
