import React from "react";
import svg from "../images/wave1.svg";
import Image from "next/image";

export default function Svg() {
  return <Image src={svg} alt="wave" className="w-full object-cover"></Image>;
}
