import Image from "next/image";
import React from "react";
import SvgSelector from "./SvgSelector";
import bottle from "../public/images/bottle@3x.png";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__image">
        <SvgSelector id="header-shape" />
        <Image src={bottle} alt="" />
      </div>
      <div className="hero__content">
        <h3>Beauty Secrets</h3>
        <p>
          Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut
          tellus. Semper auctor neque vitae tempus quam pellentesque nec nam
          aliquam. 
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default Hero;
