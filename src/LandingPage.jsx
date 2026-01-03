// src/LandingPage.jsx
import React, { useMemo, useState } from "react";
import "./landing.css";

export default function LandingPage() {
  // ✅ Change these to your real URLs (or relative routes if same domain)
  const APP_BASE = "https://app.kudipeak.com";

  const links = useMemo(
    () => ({
      signup: `${APP_BASE}/register`,
      login: `${APP_BASE}/login`,
      webapp: `${APP_BASE}`,
    }),
    [APP_BASE]
  );

  const [legalOpen, setLegalOpen] = useState(null); // "privacy" | "terms" | null

  return (
    <div className="kp-page">
      {/* Background accents */}
      <div className="kp-bgBlob kp-blob1" aria-hidden="true" />
      <div className="kp-bgBlob kp-blob2" aria-hidden="true" />

      {/* Header */}
      <header className="kp-header">
        <a className="kp-brand" href="#">
          <span className="kp-mark" aria-hidden="true" />
          <span className="kp-brandName">KudiPeak</span>
        </a>

        <nav className="kp-nav">
          <a href="#features">Features</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="kp-headerActions">
          <a className="kp-btn kp-btnGhost" href={links.login}>
            Login
          </a>
          <a className="kp-btn kp-btnPrimary" href={links.signup}>
            Sign up
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="kp-main">
        <section className="kp-hero">
          <div className="kp-heroText">
            <div className="kp-pill">
              <span className="kp-dot" aria-hidden="true" />
              Nigeria-first wallet • Fast transfers • Clean activity tracking
            </div>

            <h1 className="kp-h1">
              Send, receive, and manage money
              <span className="kp-h1Accent"> in seconds.</span>
            </h1>

            <p className="kp-sub">
              KudiPeak is a modern wallet experience designed for everyday
              payments: fund your wallet, transfer to friends, and keep a clear
              record of every transaction — simple, fast, and secure.
            </p>

            <div className="kp-ctaRow">
              <a className="kp-btn kp-btnPrimary kp-btnLg" href={links.signup}>
                Create free account
              </a>
              <a className="kp-btn kp-btnOutline kp-btnLg" href={links.login}>
                Login
              </a>
              <a className="kp-btn kp-btnSoft kp-btnLg" href={links.webapp}>
                Open web app
              </a>
            </div>

            <div className="kp-trustRow">
              <div className="kp-trustItem">
                <span className="kp-trustTitle">Clear status</span>
                <span className="kp-trustText">
                  Pending • Successful • Failed
                </span>
              </div>
              <div className="kp-trustItem">
                <span className="kp-trustTitle">Protected actions</span>
                <span className="kp-trustText">
                  PIN for transfers & withdrawals
                </span>
              </div>
              <div className="kp-trustItem">
                <span className="kp-trustTitle">Built for speed</span>
                <span className="kp-trustText">Fast UI + simple flows</span>
              </div>
            </div>
          </div>

          {/* Animated phone */}
          <div className="kp-heroVisual">
            <div className="kp-phoneFloat">
              <div className="kp-phone">
                <div className="kp-phoneTop">
                  <div className="kp-notch" aria-hidden="true" />
                  <div className="kp-signal" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="kp-screen">
                  <div className="kp-screenHeader">
                    <div className="kp-miniLogo" aria-hidden="true" />
                    <div className="kp-screenTitle">KudiPeak</div>
                    <div className="kp-chip">Verified</div>
                  </div>

                  <div className="kp-balanceCard">
                    <div className="kp-muted">Wallet balance</div>
                    <div className="kp-balance">₦ 250,430.00</div>
                    <div className="kp-actions">
                      <button type="button" className="kp-actBtn">
                        Add
                      </button>
                      <button type="button" className="kp-actBtn">
                        Send
                      </button>
                      <button type="button" className="kp-actBtn">
                        Withdraw
                      </button>
                    </div>
                  </div>

                  <div className="kp-activity">
                    <div className="kp-activityHeader">
                      <div className="kp-muted">Recent activity</div>
                      <div className="kp-linkLike">View all</div>
                    </div>

                    <div className="kp-rows">
                      <div className="kp-row kp-rowAnim1">
                        <div className="kp-rowLeft">
                          <div className="kp-rowTitle">Transfer to Ada</div>
                          <div className="kp-rowSub">Successful</div>
                        </div>
                        <div className="kp-rowAmt negative">-₦ 5,000</div>
                      </div>

                      <div className="kp-row kp-rowAnim2">
                        <div className="kp-rowLeft">
                          <div className="kp-rowTitle">Wallet funding</div>
                          <div className="kp-rowSub">Completed</div>
                        </div>
                        <div className="kp-rowAmt positive">+₦ 20,000</div>
                      </div>

                      <div className="kp-row kp-rowAnim3">
                        <div className="kp-rowLeft">
                          <div className="kp-rowTitle">Bill payment</div>
                          <div className="kp-rowSub">Pending</div>
                        </div>
                        <div className="kp-rowAmt">-₦ 3,200</div>
                      </div>
                    </div>

                    <div className="kp-pinPrompt">
                      <div>
                        <div className="kp-pinTitle">
                          Confirm with security PIN
                        </div>
                        <div className="kp-pinSub">
                          Sensitive actions are protected.
                        </div>
                      </div>
                      <div className="kp-pinDots" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="kp-phoneBottom" aria-hidden="true" />
              </div>

              {/* floating mini-cards */}
              <div className="kp-floatCard kp-float1">
                <div className="kp-floatTitle">Instant transfer</div>
                <div className="kp-floatSub">Receipt generated</div>
              </div>
              <div className="kp-floatCard kp-float2">
                <div className="kp-floatTitle">PIN required</div>
                <div className="kp-floatSub">For withdrawals</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="kp-section">
          <div className="kp-sectionHead">
            <h2 className="kp-h2">Everything you need — without clutter</h2>
            <p className="kp-sectionSub">
              Clean screens. Clear receipts. A wallet experience users can
              trust.
            </p>
          </div>

          <div className="kp-grid3">
            <div className="kp-card">
              <div className="kp-icon" aria-hidden="true" />
              <h3 className="kp-h3">Fast transfers</h3>
              <p className="kp-p">
                Send money quickly with clear transaction statuses and receipts.
              </p>
            </div>

            <div className="kp-card">
              <div className="kp-icon" aria-hidden="true" />
              <h3 className="kp-h3">Wallet funding</h3>
              <p className="kp-p">
                Fund your wallet and move money smoothly between your accounts.
              </p>
            </div>

            <div className="kp-card">
              <div className="kp-icon" aria-hidden="true" />
              <h3 className="kp-h3">Activity tracking</h3>
              <p className="kp-p">
                A clean activity feed so users always know what happened and
                when.
              </p>
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="kp-section kp-sectionDark">
          <div className="kp-split">
            <div>
              <h2 className="kp-h2">Security comes standard</h2>
              <p className="kp-sectionSub">
                KudiPeak protects sensitive actions with layered checks so users
                can transact confidently.
              </p>

              <ul className="kp-list">
                <li>
                  <span className="kp-bullet" /> PIN-protected transfers &
                  withdrawals
                </li>
                <li>
                  <span className="kp-bullet" /> Session controls and basic
                  device safety checks
                </li>
                <li>
                  <span className="kp-bullet" /> Audit-friendly activity history
                </li>
              </ul>
            </div>

            <div className="kp-securityBox">
              <div className="kp-securityTitle">Example: PIN Confirmation</div>
              <div className="kp-pinBoxes" aria-hidden="true">
                <div />
                <div />
                <div />
                <div />
              </div>
              <button type="button" className="kp-btn kp-btnPrimary kp-btnFull">
                Confirm
              </button>
              <button type="button" className="kp-btn kp-btnSoft kp-btnFull">
                Forgot PIN
              </button>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="kp-section">
          <div className="kp-sectionHead">
            <h2 className="kp-h2">Simple pricing</h2>
            <p className="kp-sectionSub">
              Start free. Add premium tiers later when you’re ready.
            </p>
          </div>

          <div className="kp-grid3">
            <div className="kp-price">
              <h3 className="kp-h3">Free</h3>
              <div className="kp-priceTag">₦0</div>
              <p className="kp-p">Basic wallet and transfers</p>
              <a className="kp-btn kp-btnSoft kp-btnFull" href={links.signup}>
                Get started
              </a>
            </div>

            <div className="kp-price kp-priceHighlight">
              <div className="kp-badge">Popular</div>
              <h3 className="kp-h3">Plus</h3>
              <div className="kp-priceTag">₦1,500 / month</div>
              <p className="kp-p">Higher limits + priority support</p>
              <a
                className="kp-btn kp-btnPrimary kp-btnFull"
                href={links.signup}
              >
                Upgrade
              </a>
            </div>

            <div className="kp-price">
              <h3 className="kp-h3">Business</h3>
              <div className="kp-priceTag">Custom</div>
              <p className="kp-p">Merchant tools and reports</p>
              <a className="kp-btn kp-btnSoft kp-btnFull" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* FAQ + Legal placeholders */}
        <section id="faq" className="kp-section">
          <div className="kp-sectionHead">
            <h2 className="kp-h2">FAQ</h2>
            <p className="kp-sectionSub">
              Quick answers for users and reviewers.
            </p>
          </div>

          <div className="kp-grid2">
            <div className="kp-card">
              <h3 className="kp-h3">Is this the web app?</h3>
              <p className="kp-p">
                This is the marketing landing page. The authenticated web app
                opens at <span className="kp-inlineCode">app.kudipeak.com</span>
                .
              </p>
            </div>

            <div className="kp-card">
              <h3 className="kp-h3">Where are Privacy & Terms?</h3>
              <p className="kp-p">
                They’re available as placeholders for now and will be published
                before launch.
              </p>

              <div className="kp-legalBtns">
                <button
                  type="button"
                  className="kp-btn kp-btnOutline"
                  onClick={() => setLegalOpen("privacy")}
                >
                  Privacy (Coming soon)
                </button>
                <button
                  type="button"
                  className="kp-btn kp-btnOutline"
                  onClick={() => setLegalOpen("terms")}
                >
                  Terms (Coming soon)
                </button>
              </div>
            </div>
          </div>

          {/* Legal modal */}
          {legalOpen && (
            <div
              className="kp-modalBackdrop"
              onClick={() => setLegalOpen(null)}
            >
              <div className="kp-modal" onClick={(e) => e.stopPropagation()}>
                <div className="kp-modalHead">
                  <div className="kp-modalTitle">
                    {legalOpen === "privacy"
                      ? "Privacy Policy"
                      : "Terms of Service"}{" "}
                    (Coming Soon)
                  </div>
                  <button
                    className="kp-x"
                    onClick={() => setLegalOpen(null)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <div className="kp-modalBody">
                  <p className="kp-p">
                    We’re preparing this document for launch.
                  </p>
                  <p className="kp-p">
                    In the meantime, if you have questions, contact:{" "}
                    <span className="kp-inlineCode">support@kudipeak.com</span>
                  </p>

                  <div className="kp-modalNote">
                    <strong>Note:</strong> Before production launch, we’ll
                    publish the full policy and terms, including data handling,
                    consent, refunds (if applicable), and dispute resolution.
                  </div>
                </div>

                <div className="kp-modalFoot">
                  <a className="kp-btn kp-btnPrimary" href={links.signup}>
                    Create account
                  </a>
                  <a className="kp-btn kp-btnSoft" href={links.login}>
                    Login
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="kp-footer" id="contact">
          <div className="kp-footerLeft">
            <div className="kp-footerBrand">
              <span className="kp-mark" aria-hidden="true" />
              <div>
                <div className="kp-footerName">KudiPeak</div>
                <div className="kp-footerSmall">
                  © {new Date().getFullYear()} KudiPeak
                </div>
              </div>
            </div>
            <div className="kp-footerSmall">
              Support:{" "}
              <span className="kp-inlineCode">support@kudipeak.com</span>
            </div>
          </div>

          <div className="kp-footerRight">
            <button
              className="kp-footerLink"
              onClick={() => setLegalOpen("privacy")}
            >
              Privacy
            </button>
            <button
              className="kp-footerLink"
              onClick={() => setLegalOpen("terms")}
            >
              Terms
            </button>
            <a className="kp-footerLink" href={links.login}>
              Login
            </a>
            <a className="kp-footerLink" href={links.signup}>
              Sign up
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
