import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = () => {
  useEffect(() => {
    jarallaxContent();
  }, []);
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_resume" id="resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="dark"
              >
                <span>Know More</span>
                <h3>My Resume</h3>
                <p style={{ textAlign: "justify" }}>
                  I hope to be able to join a company that knows how to exploit
                  my creativity and strategy. I like to develop skills that
                  allow the better functioning of work teams in effective
                  communication area, empathy at work and team management.
                </p>
              </div>
              <div className="content_inner">
                <ul>
                  {/*********************************************************/}

                  {/* EDUCATION COLUMN */}
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Education</span>
                    </h3>
                    <ul className="list">
                      {/* 1 */}
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Programming Bootcamp</h3>
                              <span>Universidad de Chile with Accenture</span>
                            </div>
                            <div className="right">
                              <span>3 months</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>Full Stack Software Developer formation.</p>
                          </div>
                        </div>
                      </li>

                      {/* 2 */}
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Skills for Work Program</h3>
                              <span>Fundación Forge, Chile</span>
                            </div>
                            <div className="right">
                              <span>2 months</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>Certificate in Soft Skills Development.</p>
                          </div>
                        </div>
                      </li>

                      {/* 3 */}
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Business Management</h3>
                              <span>Universidad de Santiago, Chile</span>
                            </div>
                            <div className="right">
                              <span>3 years</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>Non graduated in Bussines Management.</p>
                          </div>
                        </div>
                      </li>

                      {/* 4 */}
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Secondary Education</h3>
                              <span>Colegio IDOP, Chile</span>
                            </div>
                            <div className="right">
                              <span>4 years</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>Graduated in Humanist-Scientific formation.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  {/*********************************************************/}

                  {/* EXPERIENCE COLUMN */}
                  <li className="wow fadeInRight" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Experience</span>
                    </h3>
                    <ul className="list">
                      {/* 1 */}
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Full Stack Developer</h3>
                              <span>Hackmonkeys, Chile</span>
                            </div>
                            <div className="right">
                              <span>8 months</span>
                            </div>
                          </div>
                          <div className="text">
                            <p style={{ textAlign: "justify" }}>
                              In this startup I participate in consultancy
                              projects drawing pages with React and setting up
                              web services with Node.
                            </p>
                          </div>
                        </div>
                      </li>

                      {/* 2 */}
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Sofware Developer and Founder</h3>
                              <span>Empatía Industries, Chile</span>
                            </div>
                            <div className="right">
                              <span>3 years</span>
                            </div>
                          </div>
                          <div className="text">
                            <p style={{ textAlign: "justify" }}>
                              We connect people and organizations, promoting
                              entrepreneurship, teaching programming and
                              building proofs of concept.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  {/*********************************************************/}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="media" data-background-style="video">
          {" "}
          {/* Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos */}
          <div
            className="video jarallax"
            data-speed={1}
            data-jarallax-video="https://www.youtube.com/watch?v=hGIW2fDb0jg"
          />
          <div
            className="image jarallax"
            data-speed={0}
            data-img-url="img/about/2.jpg"
          />
          <span
            className="square moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
