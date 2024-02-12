import Footer from "./components/footer";
import HeroSection from "./components/myhero";

import Navbar from "./components/navbar";

import React from "react";


export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen ">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};