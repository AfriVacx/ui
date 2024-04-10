import React, { useState } from "react";
import Header from "../components/Header";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLeaf, faHourglass, faFlag } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [detail1, setDetail1] = useState(true);
  const [detail2, setDetail2] = useState(false);
  const [detail3, setDetail3] = useState(false);
  const [detail4, setDetail4] = useState(false);
  const [detail5, setDetail5] = useState(false);
  const [detail6, setDetail6] = useState(false);
  return (
    <>
      <Header title="ABOUT US" a="/about" />
      <div className="about_container">
        <div className="about">
          <div className="about_tabs">
            <div
              className={detail1 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(true);
                setDetail2(false);
                setDetail3(false);
                setDetail4(false);
                setDetail5(false);
                setDetail6(false);
              }}
            >
              <p>Background</p>
            </div>
            <div
              className={detail2 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(true);
                setDetail3(false);
                setDetail4(false);
                setDetail5(false);
                setDetail6(false);
              }}
            >
              <p>Partnership</p>
            </div>
            <div
              className={detail3 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(false);
                setDetail3(true);
                setDetail4(false);
                setDetail5(false);
                setDetail6(false);
              }}
            >
              <p>Vision</p>
            </div>
            <div
              className={detail4 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(false);
                setDetail3(false);
                setDetail4(true);
                setDetail5(false);
                setDetail6(false);
              }}
            >
              <p>Mission</p>
            </div>
            <div
              className={detail5 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(false);
                setDetail3(false);
                setDetail4(false);
                setDetail5(true);
                setDetail6(false);
              }}
            >
              <p>Who we are</p>
            </div>
            <div
              className={detail6 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(false);
                setDetail3(false);
                setDetail4(false);
                setDetail5(false);
                setDetail6(true);
              }}
            >
              <p>What we do</p>
            </div>
          </div>
        </div>
        {detail1 && (
          <div className="about_body">
            <h3>Background</h3>
            <div>
              <p>
                As in other developing countries, Nigeria faces the problem of
                zero dose population as a result of factors which include;
                inadequate knowledge on immunization, distance to access point,
                financial deprivation, and distrust in vaccines and immunization
                programs. With this issue bearing down on Nigeria, the founder
                and board of executives determine to contribute meaningfully
                towards eradicating zero dose population in Nigeria is people
                who have never had a vaccination. AfriVacx Health Aid Foundation
                is the brainchild of Pharmacist Okeke, Bethel Ikenna (IM, CSCA).
                The establishment of the foundation in October, 2023 is to
                contribute towards achieving vaccine equity and promoting
                awareness of the availability and benefits of vaccines in
                Nigeria.
              </p>
            </div>
          </div>
        )}
        {detail2 && (
          <div className="about_body">
            <h3>Why partner with us</h3>
            <div>
              <p>
                At Afrivacx, we are more than a vaccination NGO; we are the
                architects of a healthier and resilient world. Collaborating
                with us means joining forces with a passionate and
                purpose-driven organization dedicated to advancing global health
                through widespread immunization.
              </p>
              <h6>Impactful Community Outreach:</h6>
              <p>
                Partnering with Afrivacx allows your organization to actively
                participate in impactful community outreach initiatives. Our
                vaccination programs reach the most vulnerable populations,
                ensuring that essential immunization services are accessible to
                all, regardless of geographical or socio-economic barriers.
              </p>
              <h6>Expertise and Innovation:</h6>
              <p>
                Afrivacx stands at the forefront of innovation and expertise in
                the field of vaccinations. By joining forces with us, you tap
                into a wealth of knowledge, cutting-edge research, and best
                practices. Together, we can explore new strategies to enhance
                immunization coverage and address emerging health challenges.
              </p>
              <h6>Corporate Social Responsibility (CSR):</h6>
              <p>
                Demonstrate your commitment to corporate social responsibility
                by aligning with Afrivacx. Your partnership supports sustainable
                and impactful health interventions, showcasing your dedication
                to making a positive difference in the communities where you
                operate.
              </p>
              <h6>Global Health Advocacy:</h6>
              <p>
                As a partner, you become a champion for global health advocacy.
                Afrivacx actively engages in promoting the importance of
                vaccinations on a global scale. Your collaboration amplifies the
                message, driving awareness and fostering a culture of health and
                well-being worldwide.
              </p>
              <h6>Networking and Collaboration Opportunities:</h6>
              <p>
                Connect with like-minded organizations, experts, and influencers
                in the healthcare sector through our extensive network. Afrivacx
                provides a platform for meaningful collaborations, allowing your
                organization to share insights, resources, and experiences to
                collectively address health challenges.
              </p>
              <h6>Tailored Partnership Solutions:</h6>
              <p>
                We understand that every partner is unique. Afrivacx offers
                flexible and tailored partnership solutions to meet your
                specific goals and objectives. Whether through joint
                initiatives, co-branded campaigns, or customized projects, we
                work closely with you to ensure a mutually beneficial
                collaboration.
              </p>
              <h6>Measurable and Transparent Impact:</h6>
              <p>
                At Afrivacx, we believe in transparency and accountability.
                Partnering with us means having access to detailed reports and
                metrics that showcase the tangible impact of your contribution.
                See firsthand how your support directly translates into lives
                saved and communities strengthened.
              </p>
              <p>
                Partnering with Afrivacx is not just a collaboration; it's a
                shared commitment to building a healthier, more resilient
                future. Together, let's make a lasting impact on global health
                and well-being.
              </p>
            </div>
          </div>
        )}
        {detail3 && (
          <div className="about_body">
            <h3>Vision</h3>
            <div>
              <p>
                Our vision is a healthier, more resilient Africa where
                preventable diseases are eradicated through equitable vaccine
                distribution and comprehensive public awareness, fostering a
                brighter future for all communities.
              </p>
            </div>
          </div>
        )}
        {detail4 && (
          <div className="about_body">
            <h3>Mission</h3>
            <div>
              <p>
                AfriVacx is dedicated to enhancing vaccine access, promoting
                equity, driving advocacy, and raising awareness to improve
                immunization rates across Africa. Our mission is to ensure that
                every individual, regardless of their socioeconomic background
                or geographic location, has access to life-saving vaccines.
              </p>
            </div>
          </div>
        )}
        {detail5 && (
          <div className="about_body">
            <h3>Who we are</h3>
            <div>
              <p>
                At AfriVacx , We are passionate advocates for global health and
                immunization. Founded with the mission to ensure that every
                individual, regardless of their socioeconomic or geographical
                location, has access to life saving vaccines. We believe in the
                power of vaccination to protect communities and save lives.{" "}
                <br /> With a dedicated team of healthcare professionals,
                researchers, and advocates, we work tirelessly to promote
                vaccination awareness, advocate for vaccine equity, and support
                immunization programs worldwide. <br /> Our commitment to public
                health drives everything we do. From empowering communities with
                vaccine education to partnering with organizations to strengthen
                immunization infrastructure, we are dedicated to making a
                tangible impact on global health outcomes. <br /> Join us in our
                mission to build a healthier, safer future for all.
              </p>
            </div>
          </div>
        )}
        {detail6 && (
          <div className="about_body">
            <h3>What we do</h3>
            <div>
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
                  Through targeted education campaigns and use of social media,
                  we increase awareness about the importance of vaccination.
                </li>
                <li>
                  We Increase vaccine coverage rates in underserved regions.
                </li>
                <li>
                  We work towards eradicating preventable diseases through
                  comprehensive immunization programs.
                </li>
                <li>
                  We collaborate with local communities, healthcare
                  organizations, Non-governmental Organisations (NGOs) and
                  government agencies to enhance vaccine distribution networks.
                </li>
                <li>
                  We conduct research to assess vaccine perception, identify
                  barriers to vaccine access and acceptance and provide
                  innovative solutions.
                </li>
                <li>
                  We provide training and support to healthcare professionals to
                  strengthen vaccination services.
                </li>
                <li>
                  We engage in partnerships and alliances with international
                  organizations to amplify our impact and extend our reach.
                </li>
                <li>
                  We routinely measure and evaluate the effectiveness of our
                  initiatives to continuously improve our efforts in bridging
                  vaccine gaps across Africa.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default About;
