import React from "react";
import logo from "@/app/images/Connect-events.png";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="w-100 md:h-[240px] bg-black  text-white ">
      <div className="flex  flex-wrap w-11/12 ">
        <div className="md:w-3/6 flex justify-center items-center h-[240px]">
          <Image src={logo} height="auto" width={300} alt="logo"></Image>
        </div>
        <div className="md:w-3/6 flex flex-col justify-evenly items-start h-[240px] text-sm md:pl-[80px] ">
          <div className=" flex w-10/12">
            {" "}
            <IoLocationOutline className=" text-4xl mr-5 -ml-1 self-start " />
            <p>
              Flat No. 4, Ground Floor, Door, 4, Thanikachalam Rd, T. Nagar,
              Chennai, Tamil Nadu 600017
            </p>
          </div>
          <div className=" flex w-10/12">
            {" "}
            <LuPhone className=" text-2xl mr-5 self-start" />
            <p>+91 9710014422</p>
          </div>{" "}
          <div className=" flex w-10/12">
            {" "}
            <MdOutlineMailOutline className=" text-2xl mr-5 self-start" />
            <p>connectevent.ind@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
