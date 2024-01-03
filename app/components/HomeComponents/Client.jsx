import React from "react";
import ClientModule from "../modules/ClientModule";
import Heading from "../Heading";
import client1 from "@/app/images/client-img/1.jpg";
import client2 from "@/app/images/client-img/2.jpg";
import client3 from "@/app/images/client-img/3.jpg";
import client4 from "@/app/images/client-img/4.jpg";
import client5 from "@/app/images/client-img/5.jpg";
import client6 from "@/app/images/client-img/6.jpg";
import client7 from "@/app/images/client-img/7.jpg";
import client8 from "@/app/images/client-img/8.jpg";
import client9 from "@/app/images/client-img/9.jpg";


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
