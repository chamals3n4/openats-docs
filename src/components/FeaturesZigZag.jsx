import React from "react";

const sectionData = [
  {
    badge: "Centralized Data",
    title: "All candidate information and interactions in one place",
    description:
      "Manage candidate communications, scheduling interviews and task management all on OpenATS. Work on Candidate profiles and collaborate on all hiring decisions — centrally organized in the database.",
    ctaText: "Start trial",
    ctaLink: "/docs/intro",
    imageSrc: "/img/candidate-dashboard-mock.png",
    imageAlt: "Candidate information workspace dashboard overview",
  },
  {
    badge: "Smart Sourcing",
    title: "Track talent pools before positions even open",
    description:
      "Build structured pipelines for future roles. Group potential candidates by skill tags, experience levels, and past application touchpoints without losing crucial communication history.",
    ctaText: "Explore Sourcing",
    ctaLink: "/docs/intro",
    imageSrc: "/img/talent-pool-mock.png",
    imageAlt: "Talent pooling database preview",
  },
  {
    badge: "Automated Workflows",
    title: "Move candidates through stages effortlessly",
    description:
      "Configure trigger actions that send emails, assign screening evaluations, or schedule live code reviews the moment a candidate card crosses into a new phase of your pipeline matrix.",
    ctaText: "See automation rules",
    ctaLink: "/docs/intro",
    imageSrc: "/img/automation-pipeline-mock.png",
    imageAlt: "Workflow trigger setup layout screen",
  },
  {
    badge: "Collaborative Reviews",
    title: "Gather transparent team alignment instantly",
    description:
      "Let interview loops leave standardized scorecards, hidden notes, and thumbs-up votes securely. Centralized reviews remove confirmation bias and help teams make fast, fair decisions.",
    ctaText: "Learn more",
    ctaLink: "/docs/intro",
    imageSrc: "/img/scorecard-collaboration-mock.png",
    imageAlt: "Team hiring scorecard evaluation pane",
  },
];

export default function FeaturesZigZag() {
  return (
    <section className="zigzag-section">
      <div className="zigzag-container">
        {sectionData.map((item, idx) => {
          const isFlipped = idx % 2 !== 0;

          return (
            <div
              key={idx}
              className={`zigzag-row ${isFlipped ? "row-flipped" : ""}`}
            >
              {/* Media Column */}
              <div className="zigzag-media-panel">
                <div className="zigzag-window-mock">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="zigzag-image"
                  />
                </div>
              </div>

              {/* Text Content Column */}
              <div className="zigzag-content-panel">
                <div className="zigzag-badge-wrapper">
                  <span className="zigzag-badge">{item.badge}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.ctaText && (
                  <a href={item.ctaLink} className="zigzag-cta-trigger">
                    {item.ctaText}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
