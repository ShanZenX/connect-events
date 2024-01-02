import React from "react";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

export default function HomeServicesModule(props) {
  return (
    <div className="flex flex-col gap-6  text-black border hover:shadow-[0_10px_20px_0px_rgba(0,0,0,0.2)] border-gray  h-96 items-center justify-evenly  rounded-md hover:scale-[1.04] bg-white border-black text-center transition-transform md:m-10 w-2/3 md:w-1/3 lg:w-1/4 mb-10 p-3 overflow-hidden">
      <Link href={props.to} className="flex flex-col justify-evenly h-96">
        <Image src={props.logo} alt={props.alt} className="" />
        <div className="-mt-[50px]">
          <h1 className="font-Poppins font-semibold p-2 text-2xl text-orange-400">
            {props.title}
          </h1>
          <p className="font-poppins font-light">{props.des}</p>
        </div>
      </Link>
    </div>
  );
}
