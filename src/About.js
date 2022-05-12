import React from "react";
import atishay from "./atishay.jpg";

const About = ({ linkClicked }) => {
  const btnClicked = (e) => {
    if (
      e.target.classList.contains("tab-item") &&
      !e.target.classList.contains("active")
    ) {
      document
        .querySelector(".about-tabs")
        .querySelector(".active")
        .classList.remove("active");
      e.target.classList.add("active");
      const target = e.target.getAttribute("data-target");
      document
        .querySelector(".about-section")
        .querySelector(".tab-content.active")
        .classList.remove("active");
      document
        .querySelector(".about-section")
        .querySelector(target)
        .classList.add("active");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img src={atishay} alt="img" />
            </div>
          </div>
          <div className="about-text">
            <p className="about-me">
              "Hi, I'm Atishay. I design & build user interfaces."
            </p>
            <h3>skills</h3>
            <div className="skills">
              <div className="skill-item">html</div>
              <div className="skill-item">css</div>
              <div className="skill-item">java</div>
              <div className="skill-item">javascript</div>
              <div className="skill-item">react js</div>
              <div className="skill-item">bootstrap</div>
              <div className="skill-item">c</div>
              <div className="skill-item">c++</div>
            </div>
            <div className="about-tabs" onClick={btnClicked}>
              <button
                type="button"
                className="tab-item active"
                data-target="#education"
              >
                education
              </button>
              {/* <button
                type="button"
                className="tab-item"
                data-target="#experience"
              >
                experience
              </button> */}
            </div>
            <div className="tab-content active" id="education">
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2020-2024</span>
                  <h4>
                    bachelor of technology CSE - <span>MITS Gwalior</span>
                  </h4>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos totam soluta sed deserunt officia sint.
                  </p> */}
                </div>
                <div className="timeline-item">
                  <span className="date">2018-2019</span>
                  <h4>
                    12th CBSE - <span>AGS Ghaziabad</span>
                  </h4>
                  <p>Percentage - <b>91.40%</b></p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos totam soluta sed deserunt officia sint.
                  </p> */}
                </div>
                <div className="timeline-item">
                  <span className="date">2016-2017</span>
                  <h4>
                    10th MPBSE - <span>JATARA</span>
                  </h4>
                  <p>Percentage - <b>86.33%</b></p>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos totam soluta sed deserunt officia sint.
                  </p> */}
                </div>
              </div>
            </div>

            <div className="tab-content" id="experience">
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2020-2024</span>
                  <h4>
                    web developer - <span>webshala</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos totam soluta sed deserunt officia sint.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="date">2020-2024</span>
                  <h4>
                    web developer - <span>webshala</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos totam soluta sed deserunt officia sint.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="date">2020-2024</span>
                  <h4>
                    web developer - <span>webshala</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos totam soluta sed deserunt officia sint.
                  </p>
                </div>
              </div>
            </div>
            <a href="#" className="btn">
              download CV
            </a>
            <a href="#contact" className="btn link-item" onClick={linkClicked}>
              contact me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
