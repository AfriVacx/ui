import React, { useContext, useEffect } from "react";
import Slide from "../components/Slide";
import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Info from "../components/Info";
import Board from "../components/Board";

import OurEvents from "../components/OurEvents";

import { ValueContext } from "../Context";

const Home = () => {
  const { board, setBoard } = useContext(ValueContext);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/auth/board")
      .then((response) => response.json())
      .then((json) => setBoard(json.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Slide />
      <div className="home_body">
        <Intro />
        <Info />
        <Video />
        <Board members={board} title="Meet the Afrivacx Board" />
        <OurEvents />
        <div className="join_u">
          <div className="join">
            <h2>Partner With Us</h2>
            <div>
              <p>
                Are you ready to join us in our mission to bridge the gap and
                save lives? Partner with AfriVacx today and be a part of
                something truly transformative. Together, we can build a
                healthier, more equitable future for all.
              </p>
              <button className="sign_up">Join now!</button>
            </div>
          </div>
        </div>
      </div>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Home;
