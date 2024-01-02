import React from "react";
import Image from "next/image";

export default function ClientModule(props) {
  return (
    <Image
      src={props.image}
      width={100}
      height={100}
      className=" w-[120px] sm:w-[250px] sm:h-[100px] m-7"
      quality={100}
      alt="client-img"
    ></Image>
  );
}
