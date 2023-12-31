import React from "react";
import svg from "../images/wave1.svg";
export default function Svg() {
  return (
    <img
      src={svg}
      alt="wave"
      height={0}
      width={0}
      className="w-full object-cover"
    ></img>
  );
}
