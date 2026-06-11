import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiFileIcon,
  CalendarUserIcon,
  JobSearchIcon,
  TeamWorkIcon,
  UserSearch02Icon,
  WebDesign02Icon,
} from "@hugeicons/core-free-icons";
import FAQSection from "@site/src/components/FAQSection";
import FeaturesZigZag from "@site/src/components/FeaturesZigZag";
import FooterLayout from "@site/src/components/FooterLayout";

const featuresList = [
  {
    icon: JobSearchIcon,
    title: "Job Management",
    description:
      "Create, organize, and manage job openings with structured requirements, departments, and hiring workflows.",
  },
  {
    icon: UserSearch02Icon,
    title: "Candidate Tracking",
    description:
      "Track applicants through every stage of the hiring process with a clear and customizable recruitment pipeline.",
  },
  {
    icon: CalendarUserIcon,
    title: "Interview Management",
    description:
      "Schedule interviews, collect feedback, and keep everyone aligned throughout the candidate evaluation process.",
  },
  {
    icon: AiFileIcon,
    title: "AI Resume Parsing",
    description:
      "Automatically extract and organize candidate information from resumes to save time and reduce manual work.",
  },
  {
    icon: TeamWorkIcon,
    title: "Team Collaboration",
    description:
      "Collaborate on hiring decisions with shared feedback, candidate reviews, and streamlined communication.",
  },
  {
    icon: WebDesign02Icon,
    title: "Career Page Builder",
    description:
      "Build your career page that showcase opportunities and attract the right candidates to your organization.",
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
            <h1>
              <span>Open-Source Hiring Infrastructure</span>
              <span>for Growing Teams</span>
            </h1>
            <p>
              OpenATS is an open-source hiring platform that helps teams
              streamline recruitment, automate workflows, and hire faster.
            </p>
            <div className="hero-btn-container">
              <Link className="btn-pill-primary" to="/docs/intro">
                Get started
              </Link>
              <Link className="btn-pill-secondary" to="#">
                Get a demo
              </Link>
            </div>
          </div>
        </header>

        {/* 3-Column Clean Border Line Layout Grid */}
        <section className="usecases-section">
          <h2 className="section-main-title">
            Everything You Need to Hire Better
          </h2>
          <p className="section-subtitle">
            From job creation to candidate evaluation and hiring decisions,
            OpenATS provides the tools your team needs to build a faster, more
            organized recruitment process.
          </p>

          <div className="usecases-grid">
            {featuresList.map((item, idx) => (
              <div key={idx} className="usecase-card">
                <div className="usecase-icon-wrapper">
                  <HugeiconsIcon
                    icon={item.icon}
                    size={28}
                    color="currentColor"
                    strokeWidth={1.6}
                  />
                </div>
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
