import React from "react";
import ServicesModule from "./components/ServicesModule";
import event from "@/app/images/event-services.jpeg";
import ServicesBanner from "./components/ServicesBanner";

const Services = [
  {
    title: "Event",
    des: "We make your events special and stress-free. We handle everything - from planning to execution - so you can enjoy the moment. Whether it's a big corporate event or a personal celebration, our team takes care of all the details. We turn your ideas into unforgettable experiences, creating events that everyone will remember. Choose Connect Events for hassle-free and memorable occasions!",
    img: event,
    to: "services/event",
  },
  {
    title: "Activation",
    des: "We go beyond events to help your brand shine. Our branding services are designed to make your message stand out. From crafting a distinctive brand identity to ensuring consistent messaging, we are dedicated to enhancing your brand presence. Choose Connect Events for expert branding that leaves a lasting impression.",
    img: event,
    order: "md:order-first",
    to: "services/activation",
  },
  {
    title: "Branding",
    des: "Activate your brand with Connect Events! Our activation services are all about making your brand come to life. From interactive campaigns to strategic promotions, we know how to engage your audience. Let us bring energy and excitement to your brand. Connect with us for activation services that create buzz and leave a lasting impact.",
    img: event,
    to: "services/branding",
  },
];

export default function page() {
  return (
    <div className="flex w-full flex-col justify-center gap-16 mb-10  items-center bg-[#ffffff]">
      <ServicesBanner title={"Services"} />
      {Services.map((item) => (
        <ServicesModule
          to={item.to}
          title={item.title}
          des={item.des}
          img={item.img}
          order={item.order}
          key={item.title}
        />
      ))}
    </div>
  );
}
