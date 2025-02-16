import { motion } from "framer-motion";
import "../styles/hero.css";
import { Header } from "./Header";
import cat from "../assets/cat.png";

export function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Vi skapar <br />
            <span className="colored-text">dina illustrationer</span>
          </h1>
          <p>
            Din vision, vår kreativitet. Vi skapar unika och anpassade
            illustrationer som ger liv åt dina idéer och stärker ditt varumärke.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Skapa med oss
            </a>
            <a href="#services" className="secondary-btn">
              Vad vi erbjuder
            </a>
          </div>
        </div>

        <motion.div
          className="hero-image"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img src={cat} alt="Modern Webbdesign" />
        </motion.div>
      </div>
    </section>
  );
}
