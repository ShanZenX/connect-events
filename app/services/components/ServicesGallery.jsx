import { Image } from "antd";

export default function ServicesGallery(props) {
  return (
    <div className="w-[400px]">
      <Image
        src={props.img}
        className="w-full h-full object-cover"
        width={"auto"}
        height={"auto"}
        Priority
      />
    </div>
  );
}
