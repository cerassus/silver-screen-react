import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => (
  <Layout>
    <Header /> 
      {children}
    <Footer /> 
  </Layout>
);

export default Layout;