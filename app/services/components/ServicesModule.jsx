import React from "react";
import { Poppins, Raleway } from "next/font/google";
import Image from "next/image";
const railway = Raleway({ subsets: ["latin"], weight: ["700"] });

export default function ServicesModule(props) {
  return (
    <div className="w-10/12 bg-[#efefef] md:h-[300px]   flex border-black border rounded flex-wrap  hover:shadow-xl transition duration-300 mt-4 mt">
      <div
        className={`md:w-2/5  p-5  justify-evenly items-center text-center  flex flex-col order-2 ${props.order}`}
      >
        <h3 className={`text-3xl text-orange-400 ${railway.className}`}>
          {props.title}
        </h3>
        <p className=" font-light font-Poppins ">{props.des}</p>
      </div>
      <div className="md:w-3/5 p-2 group relative flex text-center items-end justify-center ">
        <Image
          src={props.img}
          alt="services"
          className="w-full h-[280px] object-cover rounded "
        ></Image>
      </div>
    </div>
  );
}
