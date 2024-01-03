"use client";
import React from "react";
import ServicesGallery from "../components/ServicesGallery";
import Heading from "@/app/components/Heading";
import { Image } from "antd";
import ServicesModule from "../components/ServicesModule";
import branding from "@/app/images/services-img/branding-services.jpeg";

import img1 from "@/app/images/branding-img/branding-img-1.jpeg"
import img2 from "@/app/images/branding-img/branding-img-2.jpeg"
import img3 from "@/app/images/branding-img/branding-img-3.jpeg"
import img4 from "@/app/images/branding-img/branding-img-4.jpeg"
import img5 from "@/app/images/branding-img/branding-img-5.jpeg"
import img6 from "@/app/images/branding-img/branding-img-6.jpeg"
import img7 from "@/app/images/branding-img/branding-img-7.jpeg"
import img8 from "@/app/images/branding-img/branding-img-8.jpeg"
import img9 from "@/app/images/branding-img/branding-img-9.jpeg"
import img10 from "@/app/images/branding-img/branding-img-10.jpeg"
import img11 from "@/app/images/branding-img/branding-img-11.jpeg"
import img12 from "@/app/images/branding-img/branding-img-12.jpeg"

export default function Branding() {
  const eventImg = [
    {
      id: 1,
      link: img1,
    },
    {
      id: 2,
      link: img2,
    },
    {
      id: 3,
      link:img3,
    },
    {
      id: 4,
      link: img4,
    },
    {
      id: 5,
      link: img5,
    },
    {
      id: 6,
      link: img6,
    },
    {
      id: 7,
      link: img7,
    },
    {
      id: 8,
      link: img8,
    },
    {
      id: 9,
      link: img9,
    },
    {
      id: 10,
      link: img10,
    },
    {
      id: 11,
      link: img11,
    },
    {
      id: 12,
      link: img12,
    },
  ];
  return (
    <div className="w-full flex flex-wrap flex-col justify-center items-center">
      <Heading title={"Branding"} />

      <ServicesModule
        title={"Branding"}
        des={
          "Activate your brand with Connect Events! Our activation services are all about making your brand come to life. From interactive campaigns to strategic promotions, we know how to engage your audience. Let us bring energy and excitement to your brand. Connect with us for activation services that create buzz and leave a lasting impact"
        }
        img={branding}
      />

      <div className="flex flex-wrap justify-evenly gap-10 pb-5 pt-4  w-11/12 mt-20">
        <Image.PreviewGroup>
          {eventImg.map((image) => (
            <ServicesGallery key={image.id} img={image.link.src} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
