"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import slider1 from "@/app/images/slider-1.jpg";
import slider2 from "@/app/images/slider-2.jpg";
import slider3 from "@/app/images/slider-3.jpg";
import slider4 from "@/app/images/slider-4.jpeg";

export default function Slider() {
  return (
    <Carousel
      autoplay
      autoplaySpeed={2000}
      dots
      effect="fade"
      dotPosition="bottom"
      className="md:h-[90vh] h-[40vh] mb-40 md:mb-0"
    >
      <div>
        <Image
          src={slider1}
          height={"auto"}
          width={"auto"}
          alt="slider-img"
          className="md:h-[95vh] h-[40vh] w-full object-cover"
          quality={100}
        ></Image>
      </div>
      <div>
        <Image
          src={slider2}
          height={"auto"}
          width={"auto"}
          alt="slider-img"
          className="md:h-[95vh] h-[40vh] w-full object-cover"
          quality={100}

        ></Image>
      </div>
      <div>
        <Image
          src={slider3}
          height={"auto"}
          width={"auto"}
          alt="slider-img"
          className="md:h-[95vh] h-[40vh] w-full object-cover"
          quality={100}

        ></Image>
      </div>
      <div>
        <Image
          src={slider4}
          height={"auto"}
          width={"auto"}
          alt="slider-img"
          className="md:h-[95vh] h-[40vh] w-full object-cover"
          quality={100}

        ></Image>
      </div>
    </Carousel>
  );
}
