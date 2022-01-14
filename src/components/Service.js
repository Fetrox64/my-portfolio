import { useEffect } from "react";
import {
  camera,
  cameraDark,
  msg,
  pen,
  penDark,
  web,
  webDark,
} from "../svgImage";

const Service = ({ dark }) => {
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <div className="aali_tm_section" id="service">
      <div className="aali_tm_service">
        <div className="container">
          <div className="service_list">
            <ul>
              {/*********************************************************/}

              {/* MY SERVICES INFO BLOCK */}
              <li className="simple wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div
                    className="aali_tm_main_title"
                    data-text-align="left"
                    data-color="dark"
                  >
                    <span>What I Do</span>
                    <h3>My Services</h3>
                    <p style={{ textAlign: "justify" }}>
                      In my experience as developer I had grown in a Full Stack
                      enviroment, participating in MVPs develop from product
                      design to apps developing.
                    </p>
                  </div>
                </div>
              </li>

              {/* BACKEND DEVELOPMENT */}
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? webDark : web}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="Service"
                    />
                  </span>
                  <div className="title">
                    <h3>Backend</h3>
                    <span className="price">
                      With Node, Nest, Express and FastAPI
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      In my career as a Backend Developer I had mainly dedicated
                      to the develop of REST API and Bots
                    </p>
                  </div>
                  <img
                    className="popup_service_image"
                    src="img/service/1.jpg"
                    alt="aali image"
                  />
                </div>
              </li>

              {/* FRONTEND DEVELOPMENT */}
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? webDark : web}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Frontend</h3>
                    <span className="price">With React, Next and Angular</span>
                  </div>
                  <div className="text">
                    <p>
                      As a Frontend Developer I had work building Dashboards,
                      Graphs and Landing pages.
                    </p>
                  </div>
                  <img
                    className="popup_service_image"
                    src="img/service/3.jpg"
                    alt="aali image"
                  />
                </div>
              </li>

              {/* CONSULTANCY */}
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? penDark : pen}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Consultancy</h3>
                    <span className="price">
                      With Direct Contact with Clients
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      When it comes to Consultancy I had to do from project
                      management to process management and system integration.
                    </p>
                  </div>
                  <img
                    className="popup_service_image"
                    src="img/service/2.jpg"
                    alt="aali image"
                  />
                </div>
              </li>

              {/* TRAINING */}
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? cameraDark : camera}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Training</h3>
                    <span className="price">
                      With Inductions, Workshops and Bootcamps
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      I also had the oportunity to improve my teaching skills
                      sharing my knowledge with management and operations staff.
                    </p>
                  </div>
                  <img
                    className="popup_service_image"
                    src="img/service/4.jpg"
                    alt="aali image"
                  />
                </div>
              </li>

              {/* KNOCK ME */}
              <li
                className="simple text wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="inner_text">
                      <h3>Do You Want Something Different?</h3>
                    </div>
                    <div className="aali_tm_button border">
                      <a className="anchor" href="#contact">
                        <span>Knock Me {msg}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/*********************************************************/}
            </ul>
          </div>
        </div>
        <span
          className="square_left moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span
          className="square_right moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Service;
