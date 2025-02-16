import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/Faq";
import { Contact } from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
