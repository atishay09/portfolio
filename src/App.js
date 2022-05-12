import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from '@material-ui/icons/Home';

function App() {
  function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
    window.scrollTo(0, 0);
    return;
  }

  /*function portfolioDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src =
      portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
      portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
      ".portfolio-item-details"
    ).innerHTML;
  }*/

  //toggle navbar

  function navBtnClicked() {
    hideSection();
    toggleNavbar();
  }

  /*function homeBtnClicked(){
    hideSection();
    toggleNavbar();
    document.querySelector("section.home-section").classList.add("active")
    if(document.querySelector(".header").classList.contains('active')){
    }
    else if(document.querySelector("section.home-section").classList.contains("active")){
      console.log('home section')
    }
    else{
      hideSection();
      document.querySelector("section.home-section").classList.add("active")
    }
  }*/

  function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
  }

  function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
    document.body.classList.toggle("hide-scrolling");
  }

  function navLink(e) {
    document.querySelector(".overlay").classList.toggle("active");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }

  return (
    <>
      <div className="bg-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="circle-5"></div>
        <div className="circle-6"></div>
        <div className="circle-7"></div>
        <div className="circle-8"></div>
      </div>
      <div className="overlay"></div>
      <div className="main">
        <div className="header">
          <div className="container container1">
            <div className="row flex-end">
              {/*<button
                type="button"
                className=" btn-home"
                onClick={homeBtnClicked}
              >
                <span><HomeIcon/></span>
              </button>*/}
              <button
                type="button"
                className="nav-toggler"
                onClick={navBtnClicked}
              >
                <span></span>
              </button>
              <nav className="nav">
                <div className="nav-inner">
                  <ul>
                    <li>
                      <a
                        href="#home"
                        className="nav-item link-item"
                        onClick={navLink}
                      >
                        home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        className="nav-item link-item"
                        onClick={navLink}
                      >
                        about
                      </a>
                    </li>
                    <li>
                      <a
                        href="#portfolio"
                        className="nav-item link-item"
                        onClick={navLink}
                      >
                        portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="nav-item link-item"
                        onClick={navLink}
                      >
                        contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <section className="home-section align-items-center active" id="home">
          <Home linkClicked={navLink} />
        </section>
        <section className="about-section sec-padding" id="about">
          <About linkClicked={navLink} />
        </section>
        <section className="portfolio-section" id="portfolio">
          <Portfolio />
        </section>
        <section className="contact-section sec-padding" id="contact">
          <Contact />
        </section>
      </div>
      <div className="portfolio-popup">
        <div className="pp-inner">
          <div className="pp-content">
            <div className="pp-header">
              <button className="btn pp-close" onClick={togglePortfolioPopup}>
                <CloseIcon className="pp-close" />
              </button>
              <div className="pp-thumbnail">
                <img src="" alt="img" />
              </div>
              <h3></h3>
            </div>
            <div className="pp-body"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
