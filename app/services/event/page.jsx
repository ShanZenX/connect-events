"use client";
import React from "react";
import Heading from "@/app/components/Heading";
import event from "@/app/images/services-img/event-services.jpeg";
import ServicesModule from "../components/ServicesModule";
import { Image } from "antd";

import img1 from "@/app/images/event-img/event-img-8.jpeg";
import img2 from "@/app/images/event-img/event-img-2.jpeg";

import img3 from "@/app/images/event-img/event-img-3.jpeg";
import img4 from "@/app/images/event-img/event-img-16.jpeg";
import img5 from "@/app/images/event-img/event-img-5.jpeg";
import img6 from "@/app/images/event-img/event-img-6.jpeg";
import img7 from "@/app/images/event-img/event-img-7.jpeg";
import img8 from "@/app/images/event-img/event-img-1.jpeg";
import img9 from "@/app/images/event-img/event-img-9.jpeg";
import img10 from "@/app/images/event-img/event-img-10.jpeg";
import img11 from "@/app/images/event-img/event-img-21.jpeg";
import img12 from "@/app/images/event-img/event-img-18.jpeg";
import img13 from "@/app/images/event-img/event-img-13.jpeg";
import img14 from "@/app/images/event-img/event-img-14.jpeg";
import img15 from "@/app/images/event-img/event-img-15.jpeg";
import img16 from "@/app/images/event-img/event-img-4.jpeg";
import img17 from "@/app/images/event-img/event-img-17.jpeg";
import img18 from "@/app/images/event-img/event-img-12.jpeg";
import img19 from "@/app/images/event-img/event-img-19.jpeg";
import img20 from "@/app/images/event-img/event-img-20.jpeg";
import img21 from "@/app/images/event-img/event-img-11.jpeg";
import img22 from "@/app/images/event-img/event-img-22.jpeg";
import img23 from "@/app/images/event-img/event-img-23.jpeg";
import img24 from "@/app/images/event-img/event-img-24.jpeg";
import img25 from "@/app/images/event-img/event-img-25.jpeg";
import img26 from "@/app/images/event-img/event-img-26.jpeg";
import img27 from "@/app/images/event-img/event-img-27.jpeg";
import img28 from "@/app/images/event-img/event-img-28.jpeg";
import img29 from "@/app/images/event-img/event-img-29.jpeg";
import img30 from "@/app/images/event-img/event-img-30.jpeg";

// new-images
// New image imports
import img31 from "@/app/images/event-img/event-img-31.jpg";
import img32 from "@/app/images/event-img/event-img-32.jpg";
import img33 from "@/app/images/event-img/event-img-33.jpg";
import img34 from "@/app/images/event-img/event-img-34.jpg";
import img35 from "@/app/images/event-img/event-img-35.jpg";
import img36 from "@/app/images/event-img/event-img-36.jpg";
import img37 from "@/app/images/event-img/event-img-37.jpg";
import img38 from "@/app/images/event-img/event-img-38.jpg";
import img39 from "@/app/images/event-img/event-img-39.jpg";
import img40 from "@/app/images/event-img/event-img-40.jpg";
import img41 from "@/app/images/event-img/event-img-41.jpg";
import img42 from "@/app/images/event-img/event-img-42.jpg";
import img43 from "@/app/images/event-img/event-img-43.jpg";
import img44 from "@/app/images/event-img/event-img-44.jpg";
import img45 from "@/app/images/event-img/event-img-45.jpg";
import img46 from "@/app/images/event-img/event-img-46.jpg";
import img47 from "@/app/images/event-img/event-img-47.jpg";
import img48 from "@/app/images/event-img/event-img-48.jpg";
import img49 from "@/app/images/event-img/event-img-49.jpeg";

import ServicesGallery from "../components/ServicesGallery";

export default function Event() {
  const eventImg = [
    { id: 31, link: img31 },
    { id: 32, link: img32 },
    { id: 33, link: img33 },
    { id: 34, link: img34 },
    { id: 35, link: img35 },
    { id: 36, link: img36 },
    { id: 37, link: img37 },
    { id: 38, link: img38 },
    { id: 39, link: img39 },
    { id: 40, link: img40 },
    { id: 41, link: img41 },
    { id: 42, link: img42 },
    { id: 43, link: img43 },
    { id: 44, link: img44 },
    { id: 45, link: img45 },
    { id: 46, link: img46 },
    { id: 47, link: img47 },
    { id: 48, link: img48 },
    { id: 49, link: img49 },
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
      link: img3,
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
    },
    {
      id: 26,
      link: img26,
    },
    {
      id: 27,
      link: img27,
    },
    {
      id: 28,
      link: img28,
    },
    {
      id: 29,
      link: img29,
    },
    {
      id: 30,
      link: img30,
    },
    
  ];
  return (
    <div className="w-full flex flex-wrap flex-col justify-center items-center">
      <Heading title={"Events"} />
      <ServicesModule
        title={"Events"}
        des={
          "We make your events special and stress-free. We handle everything - from planning to execution - so you can enjoy the moment. Whether it's a big corporate event or a personal celebration, our team takes care of all the details. We turn your ideas into unforgettable experiences, creating events that everyone will remember. Choose Connect Events for hassle-free and memorable occasions!"
        }
        img={event}
      />

      <div className="flex flex-wrap justify-evenly gap-10 pb-5 pt-4 mt-20 w-11/12">
        <Image.PreviewGroup>
          {eventImg.map((image) => (
            <ServicesGallery img={image.link.src} key={image.id} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
