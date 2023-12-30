import React from "react";
import { Poppins } from "next/font/google";

export default function ServicesBanner(props) {
  return (
    <div
      className={`w-full h-60 bg-no-repeat flex justify-center items-center bg-cover  bg-top`}
      style={{
        backgroundImage: `linear-gradient(rgb(255 136 0 / 90%), rgb(0 0 0 / 90%)), url(https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover", // Example additional style
      }}
    >
      <h1 className="uppercase lg:text-[200px] sm:text-[150px] text-7xl font-Poppins font-extrabold text-white opacity-70 p-0 ">
        {props.title}
      </h1>
    </div>
  );
}
