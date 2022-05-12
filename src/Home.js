import React from "react";
import atishay from "./atishay1.jpg";

const Home = ({ linkClicked }) => {
  return (
    <>
      <div className="container ">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello I'm</p>
            <h1>Atishay jain</h1>
            <h2>Front End Developer</h2>
            <a href="#about" className="btn link-item" onClick={linkClicked}>
              more about me
            </a>
            <a
              href="#portfolio"
              className="btn link-item"
              onClick={linkClicked}
            >
              portfolio
            </a>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src={atishay} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
