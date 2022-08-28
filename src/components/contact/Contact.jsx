import "./contact.css";
import Github from "../../img/Github.png";
import Linkedin from "../../img/Linkedin.png";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import contact from "../../img/contact.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="c-centre">
            <h1 className="c-title">Find Me!</h1>
            <div className="c-info">
              <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
                <a
                  className="c-link"
                  href="https://github.com/afiarodoshe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Afia Muntakim
                </a>
              </div>
              <div className="c-info-item">
              <img className="c-icon" src={Linkedin} alt="" />
                <a
                  className="c-link"
                  href="https://www.linkedin.com/in/afia-muntakim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Afia Muntakim
                </a>
              </div>
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +8801730890871
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                afiamuntakim@iut-dhaka.edu
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                W/15-A, Rajshahi University, Rajshahi
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">

            </p>
          </div>
          <div className="c-img">
            <img className="c-right1" src={contact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
