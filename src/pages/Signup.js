import React, { useState, useContext } from "react";
import Logo from "../data/afrivacx.png";
import Loader from "../data/loader.gif";
import ImageUpload from "../components/ImageUpload";

import GoogleTrans from "../components/GoogleTrans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

import naijaStates from "naija-state-local-government";
import { ValueContext } from "../Context";

// import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const navigate = useNavigate();
  const { profileImage } = useContext(ValueContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [title, setTitle] = useState("");
  const [zone, setZone] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [lgaList, setLgaList] = useState([]);
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(false);
  const [type1, setType1] = useState(false);
  // const [type2, setType2] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");
  const [shows, setShows] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      state === "" &&
      phoneNumber === "" &&
      position === "" &&
      title === "" &&
      lga === "" &&
      password === "" &&
      profileImage.length < 1 &&
      zone === ""
    ) {
      setShows(!show);
    } else {
      setLoad(!load);
      fetch("https://afrivacx-server.vercel.app/auth/board", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          password: password,
          position,
          title,
          zone,
          state,
          address: lga,
          profileImage: profileImage[0].uploadInfo.url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          setLoad(!load);
          return response.json();
        })
        .then((res) => {
          console.log(res);
          if (res.error === "error") {
            setErr(res.message);
            setLoad(false);
          } else {
            setMessage(res.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setState("");
            setLga("");
            setZone("");
            setPhoneNumber("");
            setTitle("");
            setPosition("");
            setLoad(!load);
            setShow(!show);
            setErrorMessage("");
          }
        })
        // .then(() => {
        //   setUsername("");
        //   setEmail("");
        //   setPassword("");
        //   setConpassword("");
        //   setPlan("");
        //   setCountry("");
        //   setLoad(!load);
        //   setShow(!show);
        // })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="signup">
      <div className="signup-img"></div>
      <div className="sign">
        <a className="navbar-brand" href="/" style={{ margin: "0px" }}>
          <img
            src={Logo}
            alt="afrivacx.org"
            width={100}
            style={{ marginTop: "0rem" }}
            className="logoss"
          />
        </a>
        <GoogleTrans />
        {show ? (
          <p style={{ padding: "2rem" }}>{message}</p>
        ) : (
          <div className="fom_container">
            {load ? (
              <div className="loader">
                <img src={Loader} alt="loader" />
              </div>
            ) : (
              <div className="fom">
                <InputGroup>
                  {!shows ? (
                    ""
                  ) : (
                    <i
                      style={{
                        textAlign: "start",
                        fontSize: "small",
                        color: "red",
                      }}
                    >
                      Please make sure that all fields are completely filled!
                    </i>
                  )}
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="title (e.g Pharm, Dr)"
                    aria-label="title"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="firstName"
                    aria-label="firstName"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="lastName"
                    aria-label="lastName"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup>
                  <i
                    style={{
                      textAlign: "start",
                      fontSize: "small",
                      color: "red",
                    }}
                  >
                    {err}
                  </i>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setErr("")}
                    required
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup>
                  {errorMessage === "" ? null : (
                    <i
                      style={{
                        fontWeight: "bold",
                        color: errorMessage === "strong!" ? "green" : "red",
                        fontSize: "x-small",
                      }}
                    >
                      {errorMessage}
                    </i>
                  )}
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    type={type1 ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <InputGroup.Text
                    id="basic-addon1"
                    onClick={() => setType1(!type1)}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Phone Number"
                    aria-label="phone number"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="position"
                    aria-label="position"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                  >
                    <option>Zone</option>
                    <option value="north east">NorthEast</option>
                    <option value="south east">SouthEast</option>
                    <option value="north west">NorthWest</option>
                    <option value="south west">SouthWest</option>
                    <option value="north central">North Central</option>
                    <option value="south south">South South</option>
                  </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      setLgaList(naijaStates.lgas(e.target.value).lgas);
                    }}
                  >
                    <option>State</option>
                    {naijaStates.states().map((state) => (
                      <option value={state}>{state}</option>
                    ))}
                  </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={lga}
                    onChange={(e) => {
                      setLga(e.target.value);
                    }}
                  >
                    <option>LGA</option>
                    {state !== "" &&
                      lgaList.map((lga) => <option value={lga}>{lga}</option>)}
                  </Form.Select>
                </InputGroup>
                <ImageUpload />
                <button className="sin" onClick={handleSubmit}>
                  Sign up
                </button>
                {/* <div className="or">
              <hr />
              Or
              <hr />
            </div>
            <button className="ssn" onClick={() => navigate("/login")}>
              Login Here
            </button> */}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Signup;
