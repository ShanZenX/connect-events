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
import img13 from "@/app/images/branding-img/branding-img-13.jpeg"
import img14 from "@/app/images/branding-img/branding-img-14.jpeg"
import img15 from "@/app/images/branding-img/branding-img-15.jpeg"
import img16 from "@/app/images/branding-img/branding-img-16.jpeg"
import img17 from "@/app/images/branding-img/branding-img-17.jpeg"
import img18 from "@/app/images/branding-img/branding-img-18.jpeg"
import img19 from "@/app/images/branding-img/branding-img-19.jpeg"
import img20 from "@/app/images/branding-img/branding-img-20.jpeg"
import img21 from "@/app/images/branding-img/branding-img-21.jpeg"
import img22 from "@/app/images/branding-img/branding-img-22.jpeg"
import img23 from "@/app/images/branding-img/branding-img-23.jpeg"
import img24 from "@/app/images/branding-img/branding-img-24.jpeg"
import img25 from "@/app/images/branding-img/branding-img-25.jpeg"
import img26 from "@/app/images/branding-img/branding-img-26.jpeg"
import img27 from "@/app/images/branding-img/branding-img-27.jpeg"
import img28 from "@/app/images/branding-img/branding-img-28.jpeg"
import img29 from "@/app/images/branding-img/branding-img-29.jpeg"
import img30 from "@/app/images/branding-img/branding-img-30.jpeg"


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
    ,
    {
      id: 13,
      link: img13,
    },
    {
      id: 14,
      link: img14,
    },
    {
      id: 15,
      link: img15,
    },
    {
      id: 16,
      link: img16,
    },
    {
      id: 17,
      link: img17,
    },
    {
      id: 18,
      link: img18,
    },
    {
      id: 19,
      link: img19,
    },
    {
      id: 20,
      link: img20,
    },
    {
      id: 21,
      link: img21,
    },
    {
      id: 22,
      link: img22,
    },
    {
      id: 23,
      link: img23,
    },
    {
      id: 24,
      link: img24,
    },
    {
      id: 25,
      link: img25,
    }, {
      id: 26,
      link: img26,
    }, {
      id: 27,
      link: img27,
    },
    {
      id: 28,
      link: img28,
    },{
      id: 29,
      link: img29,
    },{
      id: 30,
      link: img30,
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
