import React from "react";
import atishay from "../src/Assets/atishay.jpg";

const About = ({ linkClicked }) => {

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '../src/Assets/Resume.pdf';
      link.setAttribute('download', 'AtishayResume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
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
              Passionate Software Engineer adept in Java, Spring Boot, React.js, HTML, CSS, and JavaScript. Recently graduated with a Computer Science Engineering degree. Eager to apply academic knowledge to drive innovative software solutions. Skilled in code development, debugging, and maintaining clean, efficient code. Collaborative team player with strong communication skills and a quick learner of new technologies. Seeking to contribute proactively to a dynamic development team.
            </p>
            <h3 className="tab-item active">skills</h3>
            <div className="skills">
              <div className="skill-item">Data Structures & Algorithms</div>
              <div className="skill-item">Java</div>
              <div className="skill-item">Spring Boot</div>
              <div className="skill-item">C, C++</div>
              <div className="skill-item">DBMS</div>
              <div className="skill-item">HTML</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">React Js</div>
              <div className="skill-item">Node Js</div>
              <div className="skill-item">Next Js</div>
              <div className="skill-item">Redux</div>
              <div className="skill-item">Bootstrap</div>
              <div className="skill-item">MUI</div>
              <div className="skill-item">MongoDb</div>
              <div className="skill-item">Git</div>
              <div className="skill-item">Github</div>
              <div className="skill-item">Vercel</div>
            </div>
            <div className="about-tabs" onClick={btnClicked}>
              <button
                type="button"
                className="tab-item active"
                data-target="#education"
              >
                education
              </button>
              <button
                type="button"
                className="tab-item"
                data-target="#experience"
              >
                experience
              </button>
            </div>
            <div className="tab-content active" id="education">
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">Oct 2020 - June 2024</span>
                  <h4>
                    B.tech CSE - <span>MITS Gwalior</span>
                  </h4>
                  <p>
                    CGPA - 8.7
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="date">July 2018 - May 2019</span>
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
                  <span className="date">July 2016 - May 2017</span>
                  <h4>
                    10th MPBSE - <span>Daffodil School Jatara</span>
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
                  <span className="date">Jan 2024 - Present</span>
                  <h4>
                    Software Developer Trainee - <span>NEWGEN SOFTWARE</span>
                  </h4>
                  <p>
                    <ul className="list-forced">
                      <li>  Developed robust RESTful APIs using Java and Spring Boot.
                      </li>
                      <li>
                        Collaborated with senior developers to design and implement scalable
                        solutions, gaining hands-on experience in software architecture and
                        best practices.
                      </li>
                      <li>
                        Demonstrated proficiency in troubleshooting and debugging, ensuring
                        the reliability and performance of APIs under varying loads and
                        conditions.
                      </li>
                    </ul></p>
                </div>
                <div className="timeline-item">
                  <span className="date"> June 2023 - Dec 2023</span>
                  <h4>
                    React Js Developer - <span>KYLO APPS</span>
                  </h4>
                  <p>
                    <ul className="list-forced">
                      <li>   Developed responsive and user-friendly websites and web applications
                        using React.js, ensuring a seamless user experience across various
                        devices and browsers.
                      </li>
                      <li>
                        Implemented state management using Redux and context API,
                        enhancing application performance and maintaining clean and
                        efficient code.
                      </li>
                      <li>
                        Collaborated closely with UI/UX designers and backend developers to
                        integrate frontend components with backend APIs, ensuring seamless
                        data flow and functionality.
                      </li>
                    </ul></p>
                </div>
                {/* <div className="timeline-item">
                  <span className="date">2020-2024</span>
                  <h4>
                    web developer - <span>webshala</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos totam soluta sed deserunt officia sint.
                  </p>
                </div> */}
              </div>
            </div>
            <p onClick={handleDownload}  className="btn">
              download CV
            </p>
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
