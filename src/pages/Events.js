import React from "react";
import Header from "../components/Header";
import OurEvents from "../components/OurEvents";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <>
      <Header title="EVENTS" a="/events" />
      <div className="event_body">
        <OurEvents />
      </div>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Portfolio;
