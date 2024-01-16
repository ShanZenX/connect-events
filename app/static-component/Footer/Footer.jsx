import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { Raleway } from "next/font/google";
const titleFont = Raleway({
  subsets: ["latin"],
  weight: "700",
});

export default function Footer() {
  return (
    <div className={`flex w-full md:flex-nowrap flex-wrap h-auto bg-black md:px-36 md:py-10 p-10 gap-4 md-gap-0 justify-center md:justify-normal ${titleFont.className}`}>
      <div className="md:w-1/2  flex ">
        {" "}
        <div className="w-3/6 ml-10 gap-5 flex flex-col">
          <p className="text-gray-100 flex flex-col gap-[4px]">
            <span className="opacity-70">Address:</span>
            <span>
              Flat No. 4, Ground Floor, Door, 4, Thanikachalam Rd, T. Nagar,
              Chennai,<br></br> Tamil Nadu 600017
            </span>
          </p>
          <p className="text-gray-100 flex flex-col gap-[4px]">
            <span className="opacity-70">Contact:</span>
            <a href="tel:9710014422" className="font-sans"> +91 9710014422</a>
          </p>
          <p className="text-gray-100 flex flex-col gap-[4px]">
            <span className="opacity-70">Email:</span>
            <a href="mailto:connectevent.ind@gmail.com"> connectevent.ind@gmail.com</a>{" "}
          </p>
          <Link href={"https://www.linkedin.com/in/connectevents/"}>
            <FaLinkedin className="w-[25px] h-[25px] text-white" />
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9478784531875!2d80.23703037519168!3d13.038989687282669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664d427914c3%3A0x3bc601264f254868!2sCONNECT%20EVENTS!5e0!3m2!1sen!2sin!4v1705419096907!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        ></iframe>
      </div>
    </div>
  );
}
