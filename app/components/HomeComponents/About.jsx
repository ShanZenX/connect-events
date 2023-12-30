import React from "react";
import Heading from "../Heading";
import { Poppins } from "next/font/google";
import aboutImg from "@/app/images/about-img.jpg";
import { Raleway } from "next/font/google";
import Button from "../Button";
import Image from "next/image";
const titleFont = Raleway({
  subsets: ["latin"],
  weight: "700",
});

export default function About() {
  return (
    <div className="w-full  bg-white flex justify-center md:mt-20">
      <div className="w-11/12 flex justify-evenly text-black flex-wrap">
        <div className="md:w-5/12 grid place-items-center pb-16 md:pt-16">
          <Image
            src={aboutImg}
            className="w-full h-full object-cover bg-center rounded-xl"
            alt="about"
          ></Image>
        </div>
        <div className="md:w-5/12 pb-16 pt-16 font-light font-Poppins text-left text-[#474665] flex flex-col">
          <p className={`text-4xl  p-5 pl-0 ${titleFont.className}`}>
            <span className=" text-[#fbae40]">Who </span>We Are
          </p>
          <p>
            your premier partner for unforgettable experiences! At Connect
            Events, we specialize in creating seamless events, impactful
            branding, and engaging activations. Our team of dedicated
            professionals is passionate about turning your ideas into reality.
            With a client-centric approach, we collaborate closely to understand
            your vision, ensuring every detail reflects your unique identity.
            From innovative engagement strategies to precise execution, we pride
            ourselves on delivering top-notch quality. We don't just plan
            events; we craft moments that resonate. Choose Connect Events for a
            journey where simplicity meets excellence, and every event becomes a
            lasting memory. Let's connect and make your next event
            extraordinary!
          </p>
          <Button name={"Contact us"} to={"contact"} />
        </div>
      </div>
    </div>
  );
}
