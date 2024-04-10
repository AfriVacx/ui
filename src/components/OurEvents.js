import React from "react";

import EventImage from "../data/login.jpg";

import Button1 from "./Button1";
import Button2 from "./Button2";

function OurEvents() {
  return (
    <div className="afrivacx_events">
      <h1>Our Events</h1>
      <div className="events">
        <div className="current_event">
          <h5>Current event</h5>
          <div className="current_image">
            <img src={EventImage} alt="EventImage" />
          </div>
          <div className="current_body">
            <p>January 19</p>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              assumenda quidem eos exercitationem iusto sunt quos fugiat sed
              tenetur eveniet. Asperiores suscipit alias expedita ullam
              architecto obcaecati fugit mollitia quae!
            </p>
            <Button1 link="/events/Lorem ipsum dolor sit amet consectetur adipisicing" />
          </div>
        </div>
        <div className="next_events">
          <h5>Next Events</h5>
          <div className="next_event">
            <p>January 24</p>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <Button2 />
          </div>
          <div className="next_event">
            <p>January 24</p>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <Button2 />
          </div>
          <div className="next_event">
            <p>January 24</p>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <Button2 />
          </div>
          <div className="next_event">
            <p>January 24</p>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <Button2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurEvents;
