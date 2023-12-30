import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Connect Events",
  description: "Contact",
};
export default function ContactPage() {
  return (
    <div className="flex bg-center bg-cover bg-opacity-20 md:py-20 justify-evenly text-center">
      <div className="bg-fill  h-[200px] p-10 w-1/5 grid place-items-center rounded-lg border-r-4 border-b-4 border border-gray-500 hover:border-gray-900">
        <FaMapMarkerAlt className="text-2xl mb-2" />
        <p>
          Flat No. 4, Ground Floor, Door, 4, Thanikachalam Rd, T. Nagar,
          Chennai, Tamil Nadu 600017
        </p>
      </div>
      <div className="bg-fill  h-[200px] p-10 w-1/5  grid place-items-center rounded-lg  border-r-4 border-b-4 border  border-gray-500 hover:border-gray-900">
        <FaPhone className="text-2xl" />
        <a href="tel:+91 9710014422">+91 9710014422</a>
      </div>
      <div className="bg-fill h-[200px] p-10 w-1/5 grid place-items-center rounded-lg  border-r-4 border-b-4 border border-gray-500 hover:border-gray-900">
        <FaEnvelope className="text-2xl" />
        <a href="mailto:connectevent.ind@gmail.com">
          connectevent.ind@gmail.com
        </a>
      </div>
    </div>
  );
}
