import React, { useState } from "react";

const faqData = [
  {
    question: "What is included in the OpenATS self-hosted version?",
    answer:
      "Each template comes with a unique set of pages, components, font styles, color styles, and CMS collections for easy editing. The number of pages and CMS collections will be specified in the template page. Our templates are designed and built straight within Framer and we do not provide Figma files with the template. We also provide a set of general and template-specific tutorials for our customers to help with customization.",
  },
  {
    question: "Do I need a paid license to use it commercially?",
    answer:
      "OpenATS is licensed under open-source terms. You can deploy it locally or on your own private cloud infrastructure for internal business usage without requiring standard subscription fees.",
  },
  {
    question: "Do I need advanced technical skills to customize the templates?",
    answer:
      "Basic terminal command knowledge helps for setup, but configuration remains straightforward. Our modular file system ensures changing brand rules, logo placements, or global inputs is painless.",
  },
  {
    question: "Is the original UI/UX design file available?",
    answer:
      "Yes, community designers maintain official Figma component variants within our primary design system repository for rapid layout planning.",
  },
  {
    question: "Can our team integrate custom background verification systems?",
    answer:
      "Absolutely. Because you control the entire source system, your engineering team can connect internal tools directly to our core webhooks or candidate event framework.",
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
