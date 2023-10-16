import { download } from "../svgImage";

const About = () => {
  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="img/thumbs/45-49.jpg" alt="aali image" />
              <div className="main" data-img-url="img/about/about1.jpeg" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About Me</span>
              <h3>
                {`I'm`} <span>Fernando</span>
              </h3>
              <h3>
                Software <span>Developer</span>
              </h3>
              <span className="subtitle">Based in Santiago, CL</span>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
                Hi! My name is Fernando Hernández Vega. I am software developer,
                whiteboards lover and in my free time I like to teach and help
                people and above all coming up with ideas.
              </p>
              <p>
                In companies I like to add value in details and generate
                alternatives or instances to promote the growth of teams and
                brands.
              </p>
            </div>
            <div
              className="aali_tm_button wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <a href="CV_Fernando_Hernández_Vega_2023.pdf" download>
                <span>Download CV {download}</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/thumbs/41-61.jpg" alt="aali image" />
              <div className="main" data-img-url="img/about/about2.jpeg" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
