"use client";

import { useCallback } from "react";

type SectionId = "about" | "experience" | "work" | "contact";

type WorkHalf = "left" | "right";

type WorkCardDef = {
  half: WorkHalf;
  category: string;
  title: string;
  description: string;
  thumbAlt: string;
};

type WorkRowDef = {
  rowSrc: string;
  cards: [WorkCardDef, WorkCardDef];
};

const WORK_ROWS: WorkRowDef[] = [
  {
    rowSrc: "/work/row-bellina-whm.png",
    cards: [
      {
        half: "left",
        category: "Social Media Management",
        title: "@bellinaalimentari — Instagram",
        description:
          "Managed Bellina Alimentari's social presence across food content, event coverage, and brand campaigns — maintaining a distinct Italian identity across all posts.",
        thumbAlt: "Bellina Alimentari Instagram grid in phone mockup",
      },
      {
        half: "right",
        category: "Design",
        title: "Women's History Month Menu",
        description:
          "Seasonal cocktail menu design tying each drink to a trailblazing woman, with proceeds benefiting the Cool Girls Foundation.",
        thumbAlt: "Women's History Month cocktail menu design",
      },
    ],
  },
  {
    rowSrc: "/work/row-video-carmel.png",
    cards: [
      {
        half: "left",
        category: "Content Creation & Video Editing",
        title: "Short-Form Video — Carmel",
        description:
          "Filmed, directed, and edited short-form video content for TikTok and Instagram Reels — part of a content series that drove 30K+ views and grew Carmel's social presence.",
        thumbAlt: "Short-form video reel graphic for Carmel",
      },
      {
        half: "right",
        category: "Social Media Management",
        title: "@carmelatl — Instagram",
        description:
          "Full ownership of Carmel's Instagram — content planning, photography direction, caption writing, and publishing across feed and Reels. Grew account through consistent brand storytelling and visual cohesion.",
        thumbAlt: "Carmel Atlanta Instagram profile in phone mockup",
      },
    ],
  },
  {
    rowSrc: "/work/row-happyhour-atrium.png",
    cards: [
      {
        half: "left",
        category: "Menu Sample",
        title: "BB Happy Hour Menu",
        description:
          "Branded happy hour menu for the oyster program — oyster selections, drink pairings, and a clean editorial layout that matches the restaurant's tone.",
        thumbAlt: "BB Happy Hour oyster menu design",
      },
      {
        half: "right",
        category: "Event Design",
        title: "Mother's Day Brunch — Atrium",
        description:
          "Event menu design for the Mother's Day brunch at Atrium, featuring a soft floral aesthetic and multi-course first course layout.",
        thumbAlt: "Mother's Day brunch menu at Atrium",
      },
    ],
  },
  {
    rowSrc: "/work/row-mothers-email.png",
    cards: [
      {
        half: "left",
        category: "Event Design",
        title: "Mother's Day Brunch — Carmel",
        description:
          "Promotional design for Carmel's Mother's Day brunch — botanical illustration style with handwritten typography, distinct from the sister restaurant.",
        thumbAlt: "Mother's Day brunch promotional design for Carmel",
      },
      {
        half: "right",
        category: "Email Marketing",
        title: "Carmel Oyster Bar Launch",
        description:
          "Full Mailchimp email campaign announcing the Oyster Bar opening — brand reveal, menu highlights, dinner menu update, and a teaser for what's next.",
        thumbAlt: "Carmel Oyster Bar launch email campaign preview",
      },
    ],
  },
];

export default function Portfolio() {
  const showSection = useCallback((id: SectionId, el: HTMLButtonElement | null) => {
    document.querySelectorAll(".section").forEach((s) => s.classList.remove("visible"));
    document.getElementById(id)?.classList.add("visible");
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
    el?.classList.add("active");
  }, []);

  return (
    <>
      <div className="header">
        <div className="name-block">
          <div className="eyebrow">Portfolio</div>
          <div className="name">
            Noam <em>Laks</em>
          </div>
          <div className="tagline">
            Brand storyteller & creative strategist with a track record in food, hospitality, and culture.
          </div>
        </div>
        <div className="contact-block">
          <div>Atlanta, GA</div>
          <div>(314) 368-6635</div>
          <div>
            <a href="mailto:noamlaks2003@gmail.com">noamlaks2003@gmail.com</a>
          </div>
          <div>
            <a href="https://linkedin.com/in/noamlaks" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/noamlaks
            </a>
          </div>
        </div>
      </div>

      <nav className="nav" aria-label="Primary">
        <button type="button" className="nav-btn active" onClick={(e) => showSection("about", e.currentTarget)}>
          About
        </button>
        <button
          type="button"
          className="nav-btn"
          onClick={(e) => showSection("experience", e.currentTarget)}
        >
          Experience
        </button>
        <button type="button" className="nav-btn" onClick={(e) => showSection("work", e.currentTarget)}>
          Work Samples
        </button>
        <button type="button" className="nav-btn" onClick={(e) => showSection("contact", e.currentTarget)}>
          Contact
        </button>
      </nav>

      <div id="about" className="section visible">
        <div className="about-grid">
          <div>
            <p className="about-intro">
              Good marketing <em>tells a story</em> — and the best events make people part of it. I specialize in
              weaving those two things together, turning communications and live moments into a single, coherent
              narrative that moves people.
            </p>
            <div className="about-support">
              From launching TikTok channels with 30K+ views to orchestrating 20+ brand events across four locations,
              my work lives at the crossroads of creative vision and operational follow-through. I bring both the idea
              and the plan to get it done.
            </div>
            <div className="skills-wrap">
              {[
                "Social Media",
                "Brand Storytelling",
                "Event Production",
                "Content Strategy",
                "Email Marketing",
                "Copywriting",
                "Video Editing",
                "Visual Merchandising",
                "Graphic Design",
                "Account Management",
              ].map((t) => (
                <span key={t} className="skill-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="stat-row">
              <span className="stat-label">Followers managed</span>
              <span className="stat-val">50K+</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Annual revenue supported</span>
              <span className="stat-val">$9M+</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Events produced</span>
              <span className="stat-val">20+</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">TikTok views</span>
              <span className="stat-val">30K+</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">YoY growth driven</span>
              <span className="stat-val">6%+</span>
            </div>
          </div>
        </div>
      </div>

      <div id="experience" className="section">
        <div className="exp-entry">
          <div className="exp-left">
            <div className="exp-company">Oliva Restaurant Group</div>
            <div className="exp-location">Atlanta, GA</div>
            <div className="exp-date">
              June 2025 – Present
              <br />
              <em className="role-accent">Marketing & Events Manager</em>
            </div>
            <div className="exp-date">
              June 2024 – June 2025
              <br />
              <em className="role-muted">Marketing Coordinator</em>
            </div>
          </div>
          <div className="exp-right">
            <div className="exp-title">Oliva Restaurant Group</div>
            <ul className="exp-bullets">
              <li>
                Led a 1-year digital marketing campaign driving <strong>6%+ year-over-year growth</strong> across four
                restaurant locations contributing to <strong>$9M+ in annual revenue</strong>.
              </li>
              <li>
                Managed and grew <strong>5+ social media accounts</strong> totaling 50K+ followers through consistent
                brand storytelling and content strategy.
              </li>
              <li>
                Planned and executed <strong>20+ marketing and promotional events</strong> supporting seasonal
                campaigns and brand launches.
              </li>
              <li>
                Launched TikTok channel with short-form video content achieving <strong>30K+ views</strong>, expanding
                audience reach to new demographics.
              </li>
              <li>
                Conducted comprehensive audit of all digital platforms, refreshing brand presence and implementing new
                marketing tools.
              </li>
            </ul>
          </div>
        </div>

        <div className="exp-entry">
          <div className="exp-left">
            <div className="exp-company">Americas Mart | ANDMORE</div>
            <div className="exp-location">Atlanta, GA</div>
            <div className="exp-date">
              Jan 2024 – May 2024
              <br />
              <em className="role-accent">Social Media Intern</em>
            </div>
          </div>
          <div className="exp-right">
            <div className="exp-title">Americas Mart | ANDMORE</div>
            <ul className="exp-bullets">
              <li>
                Designed and executed national social media campaigns for an account with{" "}
                <strong>53K+ followers</strong>.
              </li>
              <li>
                Attended national apparel tradeshows, coordinated pop-ups and brand events — handling logistics, onsite
                content capture, and real-time social coverage.
              </li>
              <li>
                Supported photoshoot operations from ideation through execution: concept development, clothing selection,
                on-set coordination, and content planning.
              </li>
            </ul>
          </div>
        </div>

        <div className="exp-entry">
          <div className="exp-left">
            <div className="exp-company">Stein Shani</div>
            <div className="exp-location">Tel Aviv, Israel</div>
            <div className="exp-date">
              May 2023 – Jul 2023
              <br />
              <em className="role-accent">Marketing & Events Intern</em>
            </div>
          </div>
          <div className="exp-right">
            <div className="exp-title">Stein Shani</div>
            <ul className="exp-bullets">
              <li>Gained international marketing experience in a fast-paced brand environment in Tel Aviv.</li>
              <li>Collaborated across teams on event coordination and operational marketing initiatives.</li>
            </ul>
          </div>
        </div>

        <div className="edu-block">
          <div className="exp-company" style={{ marginBottom: 4 }}>
            Education
          </div>
          <div className="edu-title">Georgia College & State University</div>
          <div className="edu-sub">B.B.A., Marketing</div>
        </div>
      </div>

      <div id="work" className="section">
        <div className="portfolio-header">
          <h2>Work Samples</h2>
          <p>
            A selection of campaigns, menus, event designs, press, social media management, and email marketing produced
            for Oliva Restaurant Group.
          </p>
        </div>

        <div className="portfolio-grid portfolio-grid--work" id="portfolio-grid">
          {WORK_ROWS.flatMap((row) =>
            row.cards.map((card) => (
              <article className="work-card" key={`${row.rowSrc}-${card.half}`}>
                <div
                  className={`work-split-thumb ${card.half === "right" ? "work-split-thumb--right" : ""}`}
                  style={{ backgroundImage: `url(${encodeURI(row.rowSrc)})` }}
                  role="img"
                  aria-label={card.thumbAlt}
                />
                <div className="card-body">
                  <div className="card-category">{card.category}</div>
                  <div className="card-title-static">{card.title}</div>
                  <div className="card-desc-static">{card.description}</div>
                </div>
              </article>
            )),
          )}
        </div>
      </div>

      <div id="contact" className="section">
        <div className="contact-section">
          <h2>Contact</h2>
          <p>Reach out for collaborations, freelance opportunities, or to request a full media kit.</p>
          <ul className="contact-list">
            <li>
              <span className="cl-label">Location</span>
              <span className="cl-val">Atlanta, GA</span>
            </li>
            <li>
              <span className="cl-label">Phone</span>
              <span className="cl-val">
                <a href="tel:+13143686635">(314) 368-6635</a>
              </span>
            </li>
            <li>
              <span className="cl-label">Email</span>
              <span className="cl-val">
                <a href="mailto:noamlaks2003@gmail.com">noamlaks2003@gmail.com</a>
              </span>
            </li>
            <li>
              <span className="cl-label">LinkedIn</span>
              <span className="cl-val">
                <a href="https://linkedin.com/in/noamlaks" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/noamlaks
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
