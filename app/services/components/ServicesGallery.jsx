"use client";

import { Image } from "antd";


export default function ServicesGallery(props) {

  return (
     <div className="md:w-3/12 ">
      <Image
        src={props.img}
        className="w-full h-full object-cover"
        width={"auto"}
        height={200}
        alt="services Image"
      />
      </div>
  );
}

