"use client";
import React from "react";
import Heading from "@/app/components/Heading";
import event from "@/app/images/services-img/event-services.jpeg";
import ServicesModule from "../components/ServicesModule";
import { Image } from "antd";

import img2 from "@/app/services/event/event-img/event-img-1.jpeg";
console.log(img2);
// import img3 from "@/app/images/event-img/event-img-3.jpeg";
// import img4 from "@/app/images/event-img/event-img-4.jpeg";
// import img5 from "@/app/images/event-img/event-img-5.jpeg";
// import img6 from "@/app/images/event-img/event-img-6.jpeg";
// import img7 from "@/app/images/event-img/event-img-7.jpeg";
// import img8 from "@/app/images/event-img/event-img-8.jpeg";
// import img9 from "@/app/images/event-img/event-img-9.jpeg";
// import img10 from "@/app/images/event-img/event-img-10.jpeg";
// import img11 from "@/app/images/event-img/event-img-11.jpeg";
// import img12 from "@/app/images/event-img/event-img-12.jpeg";
// import img13 from "@/app/images/event-img/event-img-13.jpeg";
// import img14 from "@/app/images/event-img/event-img-14.jpeg";
// import img15 from "@/app/images/event-img/event-img-15.jpeg";
// import img16 from "@/app/images/event-img/event-img-16.jpeg";
// import img17 from "@/app/images/event-img/event-img-17.jpeg";
// import img18 from "@/app/images/event-img/event-img-18.jpeg";
// import img19 from "@/app/images/event-img/event-img-19.jpeg";
// import img20 from "@/app/images/event-img/event-img-20.jpeg";
// import img21 from "@/app/images/event-img/event-img-21.jpeg";
// import img22 from "@/app/images/event-img/event-img-22.jpeg";
// import img23 from "@/app/images/event-img/event-img-23.jpeg";
// import img24 from "@/app/images/event-img/event-img-24.jpeg";
import { aboutImg } from "@/app/images/about-img.jpg";

export default function Event() {
  // const eventImg = [
  //   {
  //     id: 1,
  //     link: img1,
  //   },
  //   {
  //     id: 2,
  //     link: img2,
  //   },
  //   {
  //     id: 3,
  //     link: img3,
  //   },
  //   {
  //     id: 4,
  //     link: img4,
  //   },
  //   {
  //     id: 5,
  //     link: img5,
  //   },
  //   {
  //     id: 6,
  //     link: img6,
  //   },
  //   {
  //     id: 7,
  //     link: img7,
  //   },
  //   {
  //     id: 8,
  //     link: img8,
  //   },
  //   {
  //     id: 9,
  //     link: img9,
  //   },
  // ];
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
        <Image src={"/_next/static/media/event-img-1.efb14b37.jpeg"}></Image>
      </div>
    </div>
  );
}
