import { Pen, Cloud, Eye } from "lucide-react";
import "../styles/services.css";

export function Services() {
  const services = [
    {
      icon: <Pen />,
      title: "Illustrationer för ditt företag",
      text: "Unika och anpassade illustrationer som passar dina behov och visioner.",
    },
    {
      icon: <Cloud />,
      title: "Anpassningsbara stilar",
      text: "Vi skapar illustrationer som fungerar i alla sammanhang, oavsett om de är för tryck, webb eller sociala medier.",
    },
    {
      icon: <Eye />,
      title: "Visuell synlighet",
      text: "Vi hjälper dig att skapa illustrationer som fångar uppmärksamhet och engagerar din målgrupp.",
    },
  ];

  return (
    <section id="services" className="services">
      <h2 className="service-header">Våra tjänster</h2>
      <div className="service-list">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
