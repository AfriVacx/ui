import "./App.css";
import "./Media.css";
import "./afrivacx.css"
import "./afrivacxMedia.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Board from "./pages/Board";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MailLogin from "./pages/MailLogin";
import Event from "./pages/Event"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vaccines from "./pages/Vaccines";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/board" exact element={<Board />} />
            <Route path="/events" exact element={<Events />} />
            <Route path="/events/:event" exact element={<Event />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/login/:mail" exact element={<MailLogin />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/vaccines" exact element={<Vaccines />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
