import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "../styles/faq.css";

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "Vad gör era illustrationer unika?",
    answer:
      "Våra illustrationer är helt skräddarsydda för att passa just dina behov. Vi jobbar nära dig för att förstå din vision och skapar bilder som speglar ditt varumärke och budskap på ett kreativt och professionellt sätt.",
  },
  {
    question: "Vilka typer av illustrationer kan ni skapa?",
    answer:
      "Vi skapar en mängd olika illustrationer, från digitala bilder för webb och sociala medier till handritade verk för tryck, affischer, böcker och mer. Oavsett stil eller medium anpassar vi varje projekt efter kundens önskemål.",
  },
  {
    question: "Hur går processen till när jag beställer en illustration?",
    answer:
      "Först diskuterar vi dina idéer och behov, och baserat på det skapar vi en skiss eller koncept. När du godkänt konceptet går vi vidare med den slutliga illustrationen. Under hela processen håller vi dig uppdaterad för att säkerställa att vi är på rätt spår.",
  },
  {
    question: "Hur lång tid tar det att få en illustration?",
    answer:
      "Tidsramen varierar beroende på projektets omfattning, men generellt sett kan vi leverera en färdig illustration inom 1–3 veckor. Vi ser till att hålla en tät kommunikation under hela processen för att säkerställa att resultatet motsvarar dina förväntningar.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Vanliga Frågor</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card">
              <button
                onClick={() => toggleQuestion(index)}
                className="faq-question"
              >
                <h3>{faq.question}</h3>
                <ChevronDown
                  className={`chevron ${openIndex === index ? "rotate" : ""}`}
                />
              </button>
              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
