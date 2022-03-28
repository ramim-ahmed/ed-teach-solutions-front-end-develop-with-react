import React from "react";
import banner_bg from "../../assets/banner.jpg";
import banner_img from "../../assets/home-bg-1-img.png";
const Banner = () => {
  const banner__styles = {
    backgroundImage: `url(${banner_bg})`,
    width: "100%",
    backgroundPostion: "center",
    backgroundSize: "cover",
    height: "620px",
    "object-fit": "contain",
  };
  return (
    <div className="banner" style={banner__styles}>
      <div class="container px-5">
        <div class="row">
          <div class="col-12 col-md-6 d-flex align-items-center">
            <div>
              <h1 className="banner__header">Effient,Trusted, Effective</h1>
              <h1 className="banner__header">Services and Solutions.</h1>
              <p className="text-white">Technology can be most broadly defined as the entities, both material and immaterial, created by the application of mental and physical effort in order to ...</p>
              <div>
                 <button className="btn__box">Know More</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img src={banner_img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
