import React from "react";
import BrandsLogo from "../../Components/BrandsLogo";
import Footer from "../../Components/Footer";
import Growth from "../../Components/Growth";
import Header from "../../Components/Header";
import HeroBanner from "../../Components/HeroBanner";
import Industry from "../../Components/Industry";
import Solution from "../../Components/Solution";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Industry />
      <Solution />
      <Growth />
      <BrandsLogo />
      <Footer />
    </>
  );
};
export default Dashboard;
