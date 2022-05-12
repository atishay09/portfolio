import React, { useState } from "react";
import { Project } from "./Projects";

const Portfolio = () => {
  const [data,setdata]= useState(Project)
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
      togglePortfolioPopup();
      document.querySelector(".portfolio-popup").scrollTo(0, 0);
      portfolioDetails(e.target.parentElement);
    } /*else if (e.target.classList.contains("pp-close")) {
      togglePortfolioPopup();
    } else if (e.target.classList.contains("pp-inner")) {
      togglePortfolioPopup();
    }*/
  });


  function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
    //fadeOutMain();
    return;
  }

  function portfolioDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src =
      portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
      portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
      ".portfolio-item-details"
    ).innerHTML;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="section-title sec-padding">
            <h2>recent work</h2>
          </div>
        </div>
        <div className="row">
          {
            data.map((ele)=>{
              return(
                <div className="portfolio-item" key={ele.id}>
            <div className="portfolio-item-thumbnail">
              <img src={ele.img} alt="img" />
            </div>
            <h3 className="portfolio-item-title">{ele.name}</h3>
            <button type="button" className="btn view-project-btn">
              view project
            </button>
            <div className="portfolio-item-details">
              <div className="description">
                <p>
                  {ele.desc}
                </p>
              </div>
              <div className="general-info">
                <ul>
                  <li>
                    Created - <span>{ele.date}</span>
                  </li>
                  <li>
                    Technologies Used - <span>{ele.tech}</span>
                  </li>
                  <li>
                    Role - <span>{ele.role}</span>
                  </li>
                  <li>
                    View Online -{" "}
                    <span>
                      <a href={ele.link} target="blank">
                        {ele.link}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
      
    </>
  );
};

export default Portfolio;
