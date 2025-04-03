import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../styles/header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="/Illusite/" className="logo">
          ILLUSITE
        </a>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#services">Våra tjänster</a>
          {/* <a href="#about">Om oss</a> */}
          <a href="#faq">FAQ</a>
          <a href="#contact" className="contact-btn">
            Kontakta oss
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Öppna meny</span>
        </button>
      </div>
    </header>
  );
}
