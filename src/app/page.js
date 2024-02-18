import Footer from "./components/footer";
import HeroSection from "./components/myhero";

import Navbar from "./components/navbar";


import React from "react";
import PartnerCompanies from "./components/partner";


export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen ">
        <HeroSection />
        <PartnerCompanies />
      </div>
      <Footer />
    </div>
  );
};