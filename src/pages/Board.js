import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

import Board from "../components/Board";
import boardData from "../data/boardData";

import { ValueContext } from "../Context";

const Faqs = () => {
  const [detail1, setDetail1] = useState(true);
  const [detail2, setDetail2] = useState(false);
  const [detail3, setDetail3] = useState(false);
  const [detail4, setDetail4] = useState(false);
  const [detail5, setDetail5] = useState(false);
  const [detail6, setDetail6] = useState(false);
  const { board, setBoard } = useContext(ValueContext);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/auth/board")
      .then((response) => response.json())
      .then((json) => setBoard(json.users))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header title="BOARD" a="/board" />
      <div className="board">
        <Board members={board} title="National Board" />
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
              <p>North East</p>
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
              <p>South East</p>
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
              <p>North West</p>
            </div>
            <div
              className={detail4 ? "selected_tab" : "ta"}
              onClick={() => {
                setDetail1(false);
                setDetail2(false);
                setDetail3(false);
                setDetail4(true);
              }}
            >
              <p>South West</p>
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
              <p>North</p>
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
              <p>South</p>
            </div>
          </div>
        </div>
        {detail1 && <Board members={board} title="North East Zone" />}
        {detail2 && <Board members={board} title="South East Zone" />}
        {detail3 && <Board members={board} title="North West Zone" />}
        {detail4 && <Board members={board} title="South West Zone" />}
        {detail5 && <Board members={board} title="North Zone" />}
        {detail6 && <Board members={board} title="South Zone" />}
      </div>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Faqs;
