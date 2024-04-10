import React from "react";

import Logo from "../data/afrivacx.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EastIcon from "@mui/icons-material/East";

const QuickLinks = () => {
  return (
    <section className="quicklinks">
      <div className="quick">
        <a class="navbar-brand" href="/">
          <img
            src={Logo}
            alt="britishfx.org"
            width={150}
            style={{ margin: "0px" }}
          />
        </a>
        <h6>
          <FontAwesomeIcon icon={faPhone} />
          <a href="https://wa.me/2348160201617" style={{ color: "#0d47a1" }}>
            08160201617 | 09036920032
          </a>
        </h6>
        <h6>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:afrivacx@gmail.com" style={{ color: "#0d47a1" }}>
            afrivacx@gmail.com
          </a>
        </h6>
        <h6>
          <FontAwesomeIcon icon={faLocationArrow} /> 412 JH Wariya Crescent Life
          camp, Abuja Nigeria.
        </h6>
      </div>
      <div className="quick_socials">
        <div className="join_us">
          <h3>Sign up for our newsletter</h3>
          <p>
            Stay up to date on our upcoming conferences and events and connect
            with the cutting-edge debates of the world’s largest independent
            association of HIV professionals.
          </p>
          <div className="button_2">
            <a href="/signup">
              <button>Sign up now</button> <EastIcon />
            </a>
          </div>
        </div>
        <hr />
        <div className="socials">
          <a href="https://x.com/Afrivacx?t=f11xjyc0CW5NIGBltV5bWw&s=09">
            <XIcon style={{ fontSize: "2rem" }} />
          </a>
          <a href="https://www.linkedin.com/company/afrivacx/">
            <LinkedInIcon style={{ fontSize: "2rem" }} />
          </a>
          <a href="https://instagram.com/afrivacx?igshid=OGQ5ZDc2ODk2ZA==">
            <InstagramIcon style={{ fontSize: "2rem" }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557019947197">
            <FacebookIcon style={{ fontSize: "2rem" }} />
          </a>
          <a href="https://www.youtube.com/@AfriVacxHealthAidFoundation">
            <YouTubeIcon style={{ fontSize: "2rem" }} />
          </a>
        </div>
      </div>
      <div className="links">
        <div>
          <h5>Quick Links</h5>
          <a href="/">Home</a>
          <a href="/vaccines">Vaccines</a>
          <a href="/about">About</a>
          <a href="/events">Events</a>
          <a href="/board">Board</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
