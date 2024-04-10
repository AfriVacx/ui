import React from "react";
// import Header from "../components/Header";
// import Banner from "../components/Banner";
import Blog from "../components/Blog";

import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

const Blogs = () => {
  return (
    <>
      {/* <Header title="BLOGS" a="/blogs" /> */}
      <div className="blogs">
        <Blog />
      </div>
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Blogs;
