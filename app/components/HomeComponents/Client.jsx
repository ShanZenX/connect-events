import React from "react";
import ClientModule from "../modules/ClientModule";
import Heading from "../Heading";
import Image from "next/image";
import client1 from "@/app/images/client-img/client-1.jpeg";
import client2 from "@/app/images/client-img/client-2.jpeg";
import client3 from "@/app/images/client-img/client-3.jpeg";
import client4 from "@/app/images/client-img/client-4.jpeg";
import client5 from "@/app/images/client-img/client-5.jpeg";
import client6 from "@/app/images/client-img/client-6.jpeg";
import client7 from "@/app/images/client-img/client-7.jpeg";
import client8 from "@/app/images/client-img/client-8.jpeg";
import client9 from "@/app/images/client-img/client-9.jpeg";

export default function Client() {
  return (
    <div className=" h-auto bg-white  w-full justify-center flex items-center flex-col ">
      <Heading title={"Our Clients"} />
      <div className="mt-6 mb-14 flex flex-wrap w-11/12 justify-center align-middle">
        <ClientModule image={client1} />
        <ClientModule image={client2} />
        <ClientModule image={client3} />
        <ClientModule image={client4} />
        <ClientModule image={client5} />
        <ClientModule image={client6} />
        <ClientModule image={client7} />
        <ClientModule image={client8} />
        <ClientModule image={client9} />
      </div>
    </div>
  );
}
