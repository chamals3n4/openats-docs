import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import FAQSection from "@site/src/components/FAQSection";
import FeaturesZigZag from "@site/src/components/FeaturesZigZag";
import FooterLayout from "@site/src/components/FooterLayout";

const featuresList = [
  {
    icon: "📂",
    title: "Job & Requisition Management",
    description:
      "Create, manage, and publish job openings with structured details and requirements in one place.",
  },
  {
    icon: "📊",
    title: "Hiring Pipeline",
    description:
      "Organize your hiring process with customizable stages and track candidates through each step.",
  },
  {
    icon: "📝",
    title: "Built-in Assessments",
    description:
      "Create and assign assessments to candidates at each stage and evaluate them consistently.",
  },
  {
    icon: "🧠",
    title: "AI CV Parsing",
    description:
      "Automatically extract and organize candidate data from resumes using AI integrations.",
  },
  {
    icon: "🤝",
    title: "Collaboration & Offers",
    description:
      "Share feedback, track interview decisions, and manage offers with your team seamlessly.",
  },
  {
    icon: "⚡",
    title: "Career Page Builder",
    description:
      "Build your own custom career page to match your brand and layout without extra code.",
  },
];

export default function Home() {
  return (
    <Layout
      title="OpenATS"
      description="Modern open source applicant tracking system built to make hiring transparent."
    >
      {/* Outer framing wrapper ensuring borders align properly edge-to-edge */}
      <div className="site-wrapper">
        {/* Premium Grid Mask Hero Section */}
        <header className="custom-hero">
          <div className="container">
            <h1>Build AI agents with a powerful Voice API</h1>
            <p>Unlock the power of voice with OpenATS</p>
            <div className="hero-btn-container">
              <Link className="btn-pill-primary" to="/docs/intro">
                Get started
              </Link>
              <Link className="btn-pill-secondary" to="/docs/intro">
                Get a demo
              </Link>
            </div>
          </div>
        </header>

        {/* 3-Column Clean Border Line Layout Grid */}
        <section className="usecases-section">
          <h2 className="section-main-title">
            One solution, unlimited use-cases
          </h2>
          <p className="section-subtitle">
            Here's what sets our tracking system apart
          </p>

          <div className="usecases-grid">
            {featuresList.map((item, idx) => (
              <div key={idx} className="usecase-card">
                <div className="usecase-icon-wrapper">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <FeaturesZigZag />

        <FAQSection />

        <FooterLayout />
      </div>
    </Layout>
  );
}
