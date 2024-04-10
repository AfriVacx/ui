import React from "react";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

import EventImg from "../data/login.jpg";

function Event() {
  const { event } = useParams();
  return (
    <>
      {/* <Header title="VACCINES" a="/vaccines" /> */}
      <div className="vaccine_body">
        <div className="link">
          <a
            href="/"
            style={{
              color: "black",
              fontSize: "small",
              marginRight: "0.5rem",
            }}
          >
            HOME
          </a>
          <span
            style={{
              color: "black",
              fontSize: "small",
              marginRight: "0.5rem",
            }}
          >
            >
          </span>
          <a
            href="/events"
            style={{
              fontSize: "small",
              color: "black",
              marginRight: "0.5rem",
            }}
          >
            EVENTS
          </a>
          <span
            style={{
              color: "black",
              fontSize: "small",
              marginRight: "0.5rem",
            }}
          >
            >
          </span>
          <a
            href="/events"
            style={{
              fontSize: "small",
              color: "#0d47a1",
              textTransform: "uppercase",
            }}
          >
            {event}
          </a>
        </div>

        <div className="even_body">
          <img src={EventImg} alt="EventImg" width={1000} height={450} />
        </div>
        <div className="even_detail">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <p style={{ fontWeight: "bold", color: "black" }}>January 19</p>
          <p style={{ alignItems: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            assumenda quidem eos exercitationem iusto sunt quos fugiat sed
            tenetur eveniet. Asperiores suscipit alias expedita ullam architecto
            obcaecati fugit mollitia quae!
          </p>
          <p style={{ alignItems: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nulla
            numquam eos commodi debitis laudantium perferendis saepe delectus
            culpa omnis animi officiis facere atque a, obcaecati eveniet, ea
            magnam non magni pariatur. Blanditiis praesentium harum perspiciatis
            ducimus enim quisquam et at. Pariatur consectetur nesciunt cumque a.
            Fuga pariatur unde laudantium?
          </p>
        </div>
      </div>

      <QuickLinks />
      <Footer />
    </>
  );
}

export default Event;
