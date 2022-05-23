import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import printer from "../images/printer.jpg";
import mouse from "../images/mouse_2.jpeg";
import thinkpad from "../images/thinkpad.png";
const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
    >
      <div className="h-[80vh] object-cover">
        <img loading="lazy" src={printer} />
      </div>
      <div className="h-[80vh] object-cover">
        <img loading="lazy" src={mouse} />
      </div>
      <div className="h-[80vh] object-cover">
        <img loading="lazy" src={thinkpad} />
      </div>
    </Carousel>
  );
};

export default Banner;
