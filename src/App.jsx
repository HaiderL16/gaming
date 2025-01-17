import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import Story from "./components/Story";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />

      <ContactUs />
      <Footer />
    </main>
  );
};

export default App;
