import React from "react";
import atishay from "../src/Assets/atishay1.jpg";

const Home = ({ linkClicked }) => {
  return (
    <>
      <div className="container ">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello I'm</p>
            <h1>Atishay jain</h1>
            {/* <p className="text-justify mb-3">Passionate Software Engineer adept in Java, Spring Boot, React.js, HTML, CSS, and JavaScript. Recently graduated with a Computer Science Engineering degree. Eager to apply academic knowledge to drive innovative software solutions. Skilled in code development, debugging, and maintaining clean, efficient code. Collaborative team player with strong communication skills and a quick learner of new technologies. Seeking to contribute proactively to a dynamic development team.</p> */}
            <h2>Software Engineer</h2>  
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
