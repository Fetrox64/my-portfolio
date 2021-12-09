import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { aTagClick, dataImage } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";

import { fb, insta, text, twitter, edit, youtube, discord } from "../svgImage";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    dataImage();
    aTagClick();
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  // popup
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const showPopup = (name, src) => {
    setVideo(true);
    setVideoContent({ name, src });
  };
  // Model Box
  const [modal, setModal] = useState(0);
  return (
    <div className="aali_tm_section help" id="portfolio">
      {video && <Popup close={setVideo} content={videoContent} />}
      <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="light"
          >
            <span>Selected works</span>
            <h3>Check my portfolio</h3>
          </div>
          <div className="portfolio_filter"></div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              {/* PEOPLE MANAGEMENT */}
              <li className="filter-item vimeo">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/peopleManagement.png"
                    />
                  </div>
                  <div className="overlay" />
                  {edit}
                  <div className="details">
                    <h3>People Management</h3>
                    <span>Fleets Management System</span>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="https://pmanagement.cl"
                    target="_blank"
                  />
                </div>
              </li>

              {/* BARMAN BOT */}
              <li className="filter-item soundcloud">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/barmanBot.png"
                    />
                  </div>
                  <div className="overlay" />
                  {discord}
                  <div className="details">
                    <h3>Barman Bot</h3>
                    <span>Entertainment Discord Bot</span>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="https://discord.com/api/oauth2/authorize?client_id=849444651642388490&permissions=8&scope=applications.commands%20bot"
                    target="_blank"
                    // onClick={() => showPopup("soundcloud", "471954807")}
                  />
                </div>
              </li>

              {/* FIORDO AUSTRAL */}
              <li className="filter-item detail">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/fiordoAustral.png"
                    />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <h3>Fiordo Austral</h3>
                    <span>Client Production Dashboards</span>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="https://fiordoaustralfrontend.azurewebsites.net/"
                    target="_blank"
                    // onClick={() => setModal(1)}
                  />
                  <div className={modal === 1 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/4.jpg"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Detail</span>
                          <h3>Hippie Sabotage</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              We live in a world where we need to move quickly
                              and iterate on our ideas as flexibly as possible.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when {`you're`} trying
                              to figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              will represent the target product.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Client</span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Detail</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>March 07, 2021</span>
                              </li>
                              <li>
                                <span className="first">Share</span>
                                <ul className="share">
                                  <li>
                                    <a href="#">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="#">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="#">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>

              {/* EMPATIA INDUSTRIES */}
              <li className="filter-item image">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/empatiaIndustries.png"
                    />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <h3>Empatía Industries</h3>
                    <span>Services Web App</span>
                  </div>
                  <a
                    className="aali_tm_full_link zoom"
                    href="https://app.empatiaindustries.com"
                    target="_blank"
                  />
                </div>
              </li>

              {/* SEATECH */}
              <li className="filter-item youtube">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/seatech.png"
                    />
                  </div>
                  <div className="overlay" />
                  {youtube}
                  <div className="details">
                    <h3>Seatech</h3>
                    <span>Online Programming Courses</span>
                  </div>
                  <a
                    className="aali_tm_full_link popup-youtube"
                    href="#"
                    onClick={() => showPopup("youtube", "d32faalxZqw")}
                  />
                </div>
              </li>

              {/* EMPATIA BLOG */}
              <li className="filter-item vimeo">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="aali image" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/empatiaBlog.png"
                    />
                  </div>
                  <div className="overlay" />
                  {edit}
                  <div className="details">
                    <h3>Empatía Blog</h3>
                    <span>Community Blog</span>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="https://blog.empatiaindustries.com"
                    target="_blank"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
