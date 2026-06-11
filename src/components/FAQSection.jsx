import React, { useState } from "react";

const faqData = [
  {
    question: "Is OpenATS free to use?",
    answer:
      "Yes. OpenATS is an open-source project and can be self-hosted at no cost. Organizations have full access to the source code and can customize the platform to fit their recruitment needs.",
  },
  {
    question: "Can I customize OpenATS for my organization?",
    answer:
      "Absolutely. OpenATS is designed to be flexible and extensible, allowing teams to customize hiring workflows, recruitment processes, integrations, and user experiences according to their requirements.",
  },
  {
    question: "Does OpenATS support different hiring workflows?",
    answer:
      "Yes. OpenATS allows organizations to create custom hiring processes with configurable stages, assessments, and evaluation workflows. Each team can adapt the platform to match its hiring strategy.",
  },
  {
    question: "Who is OpenATS built for?",
    answer:
      "OpenATS is suitable for startups, growing companies, recruitment teams, educational institutions, and organizations that want greater control and ownership over their hiring operations.",
  },
  {
    question: "Can I contribute to OpenATS?",
    answer:
      "Yes. OpenATS is community-driven and welcomes contributions from developers, designers, recruiters, and open-source enthusiasts. Contributions can include code improvements, documentation, bug fixes, feature requests, and community support.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-badge-wrapper">
        <span className="faq-badge">FAQs</span>
      </div>

      <h2 className="faq-title">
        Questions?
        <br />
        We got answers
      </h2>
      <p className="faq-subtitle">
        Check out the answers to most frequently asked questions.
      </p>

      <div className="faq-accordion-container">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`faq-item-row ${isOpen ? "is-open" : ""}`}
              onClick={() => toggleFAQ(idx)}
            >
              <div className="faq-header-line">
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
              </div>

              <div className="faq-body-panel">
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
