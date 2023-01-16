import React from "react";
import Card from "./Card";
import Embeded from "./Embeded";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import TrainerCard from "./TrainerCard";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Embeded />
      <Card />
      <TrainerCard />
      <Pricing />
      <Footer />
    </div>
  );
};

export default AboutUs;
