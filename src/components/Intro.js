import React from "react";

import Community from "../data/community.png"
import Approach from "../data/approach.png"

function Intro() {
  return (
    <div className="afrivacx_intros">
      <div className="in">
        <h5>
          At <b>AfriVacx</b>, we're on a mission to transform healthcare across
          Africa by ensuring equitable access to life-saving vaccines. With our
          motto, <b>"Bridging the Gap, Saving Lives,"</b> we strive to bridge
          the disparities in healthcare delivery and empower communities to lead
          healthier, more resilient lives.
        </h5>
      </div>
      <div className="intro">
        <div className="intro_img">
          <img src={Community} alt="" />
        </div>
        <div className="intro_details">
          <h4>Empowering Communities Through Vaccination</h4>
          <p>
            Vaccination is one of the most cost-effective ways to prevent
            diseases and save lives. Yet, millions of people in Africa still
            lack access to essential vaccines. At AfriVacx, we believe that no
            child should suffer from preventable diseases simply because of
            where they were born. That's why we're committed to working
            tirelessly to ensure that vaccines reach every corner of the
            continent, from bustling urban centers to remote rural villages.
          </p>
        </div>
      </div>
      <div className="intro">
        <div className="intro_details">
          <h4>Our Approach</h4>
          <p>
            Our approach to vaccination goes beyond simply administering shots.
            We take a comprehensive, community-centered approach that addresses
            the underlying factors contributing to vaccine inequity. From
            building local capacity and infrastructure to promoting health
            education and advocacy, we're committed to creating sustainable,
            long-term solutions that empower communities to take charge of their
            own health.
          </p>
        </div>
        <div className="intro_img">
          <img src={Approach} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
