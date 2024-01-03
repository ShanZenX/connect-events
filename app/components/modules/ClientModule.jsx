import React from "react";
import Image from "next/image";

export default function ClientModule(props) {
  return (
    <Image
      src={props.image}
      className=" w-[120px] sm:w-[250px] sm:h-[100px] m-7"
      alt="client-img"
    ></Image>
  );
}
