import React, { useState } from "react";

import Mission from "../data/mission.webp";
import Vision from "../data/vision.jpeg";
import WhatWeDo from "../data/what we do.jpeg"
import WhoWeAre from "../data/who we are.jpeg"

function Info() {
  const [detail1, setDetail1] = useState(true);
  const [detail2, setDetail2] = useState(false);
  const [detail3, setDetail3] = useState(false);
  const [detail4, setDetail4] = useState(false);
  return (
    <div className="afrivacx_info">
      <div className="info_tab">
        <div
          className={detail1 ? "selected_ta" : "tab"}
          onClick={() => {
            setDetail1(true);
            setDetail2(false);
            setDetail3(false);
            setDetail4(false);
          }}
        >
          <p>Who we are</p>
        </div>
        <div
          className={detail2 ? "selected_ta" : "tab"}
          onClick={() => {
            setDetail1(false);
            setDetail2(true);
            setDetail3(false);
            setDetail4(false);
          }}
        >
          <p>What we do</p>
        </div>
        <div
          className={detail3 ? "selected_ta" : "tab"}
          onClick={() => {
            setDetail1(false);
            setDetail2(false);
            setDetail3(true);
            setDetail4(false);
          }}
        >
          <p>Vision</p>
        </div>
        <div
          className={detail4 ? "selected_ta" : "tab"}
          onClick={() => {
            setDetail1(false);
            setDetail2(false);
            setDetail3(false);
            setDetail4(true);
          }}
        >
          <p>Mission</p>
        </div>
      </div>
      {detail1 && (
        <div className="info_detail">
          <div className="detail_img">
            <img src={WhoWeAre} alt="Pic" width="100%" height="100%" />
          </div>
          <div className="info_det">
            At AfriVacx , We are passionate advocates for global health and
            immunization. Founded with the mission to ensure that every
            individual, regardless of their socioeconomic or geographical
            location, has access to life saving vaccines. We believe in the
            power of vaccination to protect communities and save lives...
          </div>
        </div>
      )}
      {detail2 && (
        <div className="info_detail">
          <div className="detail_img">
            <img src={WhatWeDo} alt="Pic" width="100%" height="100%" />
          </div>
          <div className="info_det">
            <ul>
              <li>
                We ensure equitable access to life-saving vaccines across
                Africa.
              </li>
              <li>
                We advocate for equitable distribution of vaccines, regardless
                of background or location.
              </li>
              <li>
                Through targeted education campaigns and use of social media, we
                increase awareness about the importance of vaccination.
              </li>
            </ul>
          </div>
        </div>
      )}
      {detail3 && (
        <div className="info_detail">
          <div className="detail_img">
            <img src={Vision} alt="Pic" width="100%" height="100%" />
          </div>
          <div className="info_det">
            Our vision is a healthier, more resilient Africa where preventable
            diseases are eradicated through equitable vaccine distribution and
            comprehensive public awareness, fostering a brighter future for all
            communities.
          </div>
        </div>
      )}
      {detail4 && (
        <div className="info_detail">
          <div className="detail_img">
            <img src={Mission} alt="Pic" width="100%" height="100%" />
          </div>
          <div className="info_det">
            AfriVacx is dedicated to enhancing vaccine access, promoting equity,
            driving advocacy, and raising awareness to improve immunization
            rates across Africa. Our mission is to ensure that every individual,
            regardless of their socioeconomic background or geographic location,
            has access to life-saving vaccines.
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
