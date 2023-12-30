"use client"
import React from "react";
import  {Carousel}  from "antd";
import Image from "next/image";
import slider1 from "@/app/images/slider-1.jpeg";
import slider2 from "@/app/images/slider-2.jpeg";
import slider3 from "@/app/images/slider-3.jpeg";
import slider4 from "@/app/images/slider-4.jpeg";

export default function Slider() {
  return (
    <Carousel
      autoplay
      autoplaySpeed={2000}
      dots
      dotPosition="bottom"
      className="h-[90vh]"
    >
      <div>
        <Image
          src={slider1}
          height={"auto"}
          width={"auto"}
          alt="slider-img"
          className="h-[95vh] w-full object-cover"
        ></Image>
      </div>
      <div>
        <Image
          src={slider2}
          height={"auto"}
          width={"auto"}
          alt="slider-img"
          className="h-[95vh] w-full object-cover"
        ></Image>
      </div>
      <div>
        <Image
          src={slider3}
          height={"auto"}
          width={"auto"}
          alt="slider-img"
          className="h-[95vh] w-full object-cover"
        ></Image>
      </div>
      <div>
        <Image
          src={slider4}
          height={"auto"}
          width={"auto"}
          alt="slider-img"
          className="h-[95vh] w-full object-cover"
        ></Image>
      </div>
    </Carousel>
  );
}
