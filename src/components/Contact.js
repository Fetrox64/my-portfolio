import { call, emailIcon } from "../svgImage";

const Contact = () => {
  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Get in Touch</span>
            <h3>Connect with Me with Confidence</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div className="text">
                <p>
                  Call between 9:00 a.m. and 8:00 p.m. ET, Monday through
                  Friday. Also, always can you send me an email.
                </p>
              </div>
              <ul>
                <li>
                  <div className="list_inner">
                    {call}
                    <span>Call me</span>
                    <h3>
                      <a className="line_anim" href="tel:+56971952694">
                        +569 7195 2694
                      </a>
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <h3>
                      <a
                        className="line_anim"
                        href="mailto:fernanrpg@gmail.com"
                      >
                        fernanrpg@gmail.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Contact;
