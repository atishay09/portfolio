import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wf0wd3h', 'template_2gx0ufz', form.current, 'user_jGfLUM6h12UuWdLiyz1Gp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  function formSubmit(){
    
  }


  return (
    <>
      <div className="container container2">
        <div className="row">
          <div className="section-title">
            <h2>contact me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-control"
                    required
                    name="name"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-control"
                    required
                    name="email"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input-control"
                    required
                    name="subject"
                  />
                </div>
                <div className="input-group">
                  <textarea
                    placeholder="Messasge"
                    className="input-control"
                    id="message"
                    required
                    name="message"
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="btn" onClick={formSubmit}>
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>jainatishay09sep@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <h3>Phone</h3>
              <p>+91 9131578235</p>
            </div>
            <div className="contact-info-item">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/atishay2476" target="blank">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://github.com/atishay09" target="blank">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.instagram.com/atishay009/" target="blank">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/atishay-jain-8555a1195/" target="blank">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a
                  href="https://twitter.com/Atishay_09?t=YYam-K5O2hfzSk0LQHIauw&s=08"
                  target="blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
