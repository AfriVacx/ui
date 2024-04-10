import React, { useState, useEffect } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

import Logo from "../data/afrivacx.png";
// import GoogleTrans from "./GoogleTrans";

const Header = ({ title, a }) => {
  const [navBg, setNavSize] = useState(false);

  const changeNavSize = () => {
    window.innerWidth <= 700 || window.scrollY >= 50
      ? setNavSize(true)
      : setNavSize(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavSize);
    window.addEventListener("resize", changeNavSize);
    return () => {
      window.removeEventListener("scroll", changeNavSize);
      window.removeEventListener("resize", changeNavSize);
    };
  }, []);
  return (
    <header>
      <nav
        class="navbar navbar-expand-lg navbar-light scrolling-navbar fixed-top shadow-0"
        style={{ padding: "0px", backgroundColor: navBg && "white" }}
      >
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src={Logo}
              alt="britishfx.org"
              width={150}
              style={{ margin: "0px" }}
              className="logoss"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: navBg ? "white" : "black" }}
          >
            <i class="fas fa-bars"></i>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ backgroundColor: navBg && "white" }}
          >
            <div style={{ width: "5rem" }}></div>
            <ul class="navbar-nav me-auto">
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/vaccines"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Vaccines
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/about"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  About
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/events"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Events
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/contact"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="/board"
                  style={{
                    color: "#0d47a1",
                    margin: "0px 1rem",
                    textShadow: navBg ? "none" : "0.5px 1px 0px white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  Board
                </a>
              </li>
              <div className="liner"></div>
              {/* <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="login"
                  style={{
                    color: "white",
                    margin: "0px 0.5rem",
                    background: "none",
                    border: "none",
                    width: "7rem",
                    height: "2.5rem",
                    borderRadius: "2rem",
                    textShadow: "1px 1px 1px black",
                  }}
                >
                  <i
                    class="fa-solid fa-circle-user"
                    style={{ marginRight: "0.7rem" }}
                  ></i>
                  Log in
                </a>
              </li> */}
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="signup"
                  className="sign_up"
                >
                 Join now
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div id="intro" class="head">
          <div className="cont">
            {/* <div className="div">
              <div className="language">
                <div>
                  <small>
                    We better protect ourselves from risk thanks to
                    international trade and the amount of diversification we've
                    achieved.
                  </small>
                  <a href="https://wa.me/447918134307">
                    <FontAwesomeIcon icon={faPhone} /> +447918134307
                  </a>
                  <a href="/contact">
                    <FontAwesomeIcon icon={faMessage} /> LIVE CHAT
                  </a>
                </div>
                <div className="google">
                  <GoogleTrans />
                </div>
              </div>
            </div> */}
            <div className="link">
              <a
                href="/"
                style={{
                  color: "black",
                  fontSize: "small",
                  marginRight: "1rem",
                }}
              >
                HOME
              </a>
              <span
                style={{
                  color: "black",
                  fontSize: "small",
                  marginRight: "1rem",
                }}
              >
                >
              </span>
              <a href={a} style={{ fontSize: "small", color: "#0d47a1" }}>
                {title}
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
