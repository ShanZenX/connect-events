import React from "react";

export default function ProjectModules() {
  return (
    <div className="md:w-5/12 flex mb-10 bg-white border text-white items-center">
      <img
        className="object-cover ml-4 w-1/2 h-full md:h-40 md:w-1/2  "
        src="https://placehold.co/600x400/EEE/31343C"
        alt="project-img"
      ></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal  dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}
