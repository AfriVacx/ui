import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

import Emailjs from "../components/Emailjs";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
    <>
      <Header title="CONTACT US" a="/contact" />

      <section className="contact">
        <h1>Contact Us</h1>
        <p style={{ fontSize: "1.3rem", color: "grey" }}>
          Do not hesitate to reach out. Just fill in the contact form here and
          we’ll be sure to reply as fast as possible.
        </p>

        <div className="con-con">
          <div className="visit">
            <div style={{ marginBottom: "3rem" }}>
              <h4>Visit our office</h4>
              <p>412 JH Wariya Crescent Life camp, Abuja Nigeria.</p>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <h4>Message us</h4>
              <a
                href="https://wa.me/2348160201617"
                style={{ color: "#0d47a1" }}
              >
                08160201617 | 09036920032
              </a>
              <br />
              <a href="mailto:afrivacx@gmail.com" style={{ color: "#0d47a1" }}>
                afrivacx@gmail.com
              </a>
            </div>
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
          <Emailjs />
        </div>
      </section>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Contact;
