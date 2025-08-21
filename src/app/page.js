"use client";

import Image from "next/image";
import Hero from "components/Home/Hero";
import AboutUs from "components/Home/AboutUs";
import Services from "components/Home/Services";
import Partnership from "components/Home/Partnership";
import ContactUs from "components/Home/ContactUs";
import Footer from "components/Home/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <Partnership />
      <ContactUs />
      <Footer />
    </div>
  );
}
