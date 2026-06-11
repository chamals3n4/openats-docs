import React from "react";

export default function FooterLayout() {
  return (
    <footer className="custom-footer">
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
