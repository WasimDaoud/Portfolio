import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Services from "../pages/Services";
import Skills from "../components/Skills";
import FullStackProjects from "../pages/FullStackProjects";
import RestaurantProject from "../pages/RestaurantProject";
import EcommerceProject from "../pages/EcommerceProject";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Portfolio" element={<Home />}></Route>
        <Route path="/blog-app" element={<FullStackProjects />}></Route>
        <Route path="/restaurant" element={<RestaurantProject />}></Route>
        <Route path="/ecommerse" element={<EcommerceProject />}></Route>
        <Route path="/projects" element={<Services />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <></>
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
