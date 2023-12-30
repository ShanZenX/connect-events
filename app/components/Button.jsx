import Link from "next/link";
import React from "react";

export default function Button({ name, to }) {
  return (
    <Link
      href={to}
      className="w-fit rounded-sm py-2  text-white mt-6 mb-3 bg-[#faa41ae3] hover:bg-orange-400 duration-300 hover:shadow-[#909090]  px-3"
    >
      {name}
    </Link>
  );
}
