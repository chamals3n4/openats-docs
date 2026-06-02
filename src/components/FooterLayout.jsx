import React from "react";

const footerLinks = [
  {
    title: "Product",
    items: [
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Sales", href: "/contact" },
      { label: "Features", href: "/#features" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Docs", href: "/docs/intro" },
      { label: "Docs details", href: "/docs/intro" },
      { label: "Blog", href: "/blog" },
      { label: "Blog Post", href: "/blog" },
    ],
  },
  {
    title: "Other Pages",
    items: [
      { label: "404", href: "/404" },
      { label: "Sign in", href: "/login" },
      { label: "Sign up", href: "/signup" },
    ],
  },
  {
    title: "Template",
    items: [
      { label: "Features", href: "#features" },
      { label: "Tutorials", href: "/docs/intro" },
      { label: "Purchase", href: "/docs/intro" },
      { label: "All templates", href: "https://github.com/OpenATS" },
    ],
  },
];

export default function FooterLayout() {
  return (
    <footer className="custom-footer">
      <div className="footer-main-grid">
        {/* Brand Information Area */}
        <div className="footer-brand-column">
          <div className="footer-logo-row">
            <img
              src="/img/logo.svg"
              alt="OpenATS Logo"
              className="footer-logo-img"
            />
            <span className="footer-brand-name">OpenATS</span>
          </div>
          <p className="footer-brand-tagline">
            Open-source software alternative for modern talent acquisition and
            candidate pipelines.
          </p>
        </div>

        {/* Dynamic Link Column Matrix */}
        <div className="footer-links-wrapper">
          {footerLinks.map((column, idx) => (
            <div key={idx} className="footer-links-column">
              <h4 className="footer-column-title">{column.title}</h4>
              <ul className="footer-links-list">
                {column.items.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="footer-link-node">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Base Segment Line */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <span className="footer-copyright">
            Copyright © {new Date().getFullYear()} OpenATS. All rights reserved.
          </span>
          <div className="footer-legal-links">
            <a href="/terms" className="footer-link-node">
              Terms & Conditions
            </a>
            <a href="/privacy" className="footer-link-node">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
