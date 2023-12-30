import About from "./components/HomeComponents/About";
import Client from "./components/HomeComponents/Client";
import Gallery from "./components/HomeComponents/Gallery";
import Service from "./components/HomeComponents/Service";
import Slider from "./components/HomeComponents/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Service />
      <Client />
    </div>
  );
}
