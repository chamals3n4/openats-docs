import React, { useState } from "react";

const sectionData = [
  {
    title: "Manage Every Candidate in One Place",
    description:
      "Access complete candidate profiles with resumes, hiring history, notes, activity timelines, and application details. Give recruiters and hiring managers a single source of truth throughout the entire hiring journey.",
    imageSrc: "/img/candidate-profile.png",
    imageAlt: "Candidate information workspace dashboard overview",
  },
  {
    title: "Design Hiring Processes That Fit Your Team",
    description:
      "Create custom hiring workflows with stages, evaluations, interview rounds, and approval steps tailored to your recruitment strategy. Adapt every process to match how your organization hires.",
    imageSrc: "/img/hiring-process.png",
    imageAlt: "Talent pooling database preview",
  },
  {
    title: "Track Hiring Progress with Visual Pipelines",
    description:
      "Monitor candidate movement across every stage with a clear drag-and-drop pipeline view. Identify bottlenecks, manage workload, and keep hiring efforts moving forward.",
    imageSrc: "/img/pipeline.png",
    imageAlt: "Workflow trigger setup layout screen",
  },
  {
    title: "Make Better Decisions with Structured Assessments",
    description:
      "Evaluate candidates using customizable scorecards, interview feedback, and standardized evaluation criteria. Ensure fair, consistent, and data-driven hiring decisions across teams.",
    imageSrc: "/img/assessments.png",
    imageAlt: "Team hiring scorecard evaluation pane",
  },
];

export default function FeaturesZigZag() {
  const [activeImage, setActiveImage] = useState(null);

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
                <button
                  type="button"
                  className="zigzag-window-mock"
                  onClick={() => setActiveImage(item)}
                  aria-label="Open larger preview"
                >
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="zigzag-image"
                  />
                </button>
              </div>

              {/* Text Content Column */}
              <div className="zigzag-content-panel">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {activeImage && (
        <div
          className="zigzag-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.imageAlt}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="zigzag-image-modal-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image preview"
          >
            x
          </button>
          <img
            src={activeImage.imageSrc}
            alt={activeImage.imageAlt}
            className="zigzag-image-modal-img"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
