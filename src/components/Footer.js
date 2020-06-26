import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="page-footer purple">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About Me</h5>
                <p className="grey-text text-lighten-4">
                  Hello Deepesh Here , Web dev from Kerala,India
                </p>
                <p>Technologies/Languages I'm comfortable with.</p>
                <p>
                  Javascript - Node.js - React - HTML - CSS - PHP - Wordpress
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5>Contact Me</h5>
                <ul>
                  <li>
                    <a
                      href="#!"
                      target="_blank"
                      className="grey-text text-lighten-3"
                    >
                      <i className="fab fa-github"></i> Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      target="_blank"
                      className="grey-text text-lighten-3"
                    >
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      target="_blank"
                      className="grey-text text-lighten-3"
                    >
                      <i className="fab fa-facebook"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      target="_blank"
                      className="grey-text text-lighten-3"
                    >
                      <i className="fab fa-linkedin"></i> Linked-In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              ©{new Date().getFullYear()} Deepesh
              <a
                className="grey-text text-lighten-4 right"
                href="https://github.com/Deepesh316"
              >
                Github
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
