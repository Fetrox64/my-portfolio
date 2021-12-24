import { msg, linkedin, github, discord } from "../svgImage";

const Footer = () => {
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="top">
              <div className="logo">
                {/* <img src="img/logo/logo.png" alt="aali image" /> */}
              </div>
              <div className="social">
                <span>Connect with me via social media</span>
                <ul>
                  <li>
                    <a href="https://github.com/Fetrox64" target="_blank">
                      {github}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/fernanrpg"
                      target="_blank"
                    >
                      {linkedin}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discordapp.com/users/212806015387697153"
                      target="_blank"
                    >
                      {discord}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <p>
                  Designed with love by{" "}
                  <a
                    className="line_anim"
                    href="https://themeforest.net/user/codeefly"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Codeefly
                  </a>{" "}
                  © {new Date().getFullYear()}
                </p>
              </div>
            </div>
            <span
              className="border moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
        <span className="square moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Footer;
