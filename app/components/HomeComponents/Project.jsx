import React from "react";
import Heading from "../Heading";
import ProjectModules from "../modules/ProjectModules";

export default function Project() {
  return (
    <div className="grid place-items-center pb-10 ">
      <Heading title={"Recent Projects"} />
      <div className="w-11/12 flex flex-wrap gap-3 justify-evenly mt-10">
        <ProjectModules />
        <ProjectModules />
      </div>
    </div>
  );
}
