import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  BrainCircuit,
  Code2,
  Database,
  Sparkles,
  Phone,
  X,
} from "lucide-react";
import "./style.css";

const projects = [
  {
    number: "01",
    type: "AI • E-COMMERCE",
    title: "Smart Fashion Shopping",
    description:
      "An AI-powered shopping experience combining product discovery, recommendations and virtual try-on.",
    stack: ["Python", "Flask", "Streamlit", "OpenCV", "MediaPipe", "Google GenAI"],
    status: "Final-year project",
  },
  {
    number: "02",
    type: "FINTECH • DATA",
    title: "StockAI",
    description:
      "An Indian stock-market analytics platform using market data, AI signals and a historical backtesting workflow.",
    stack: ["React", "FastAPI", "Python", "Upstox API", "Pandas"],
    status: "In development",
  },
  {
    number: "03",
    type: "COMPUTER VISION • AR",
    title: "MemoryLens AI + AR",
    description:
      "A photo-album experience that recognises printed photographs and plays creator-uploaded videos through an AR web experience.",
    stack: ["React", "TypeScript", "Vite", "MindAR", "Three.js"],
    status: "In development",
  },
  
  {
    number: "04",
    type: "ENVIRONMENTAL DATA • MAPPING",
    title: "Environmental Intelligence & Weather Map",
    description:
      "An interactive environmental monitoring platform that integrates weather and air-quality data with earthquake and severe-weather information. It provides a location-based map to explore environmental conditions and events.",
    stack: [
      "Python",
      "WeatherAPI",
      "API Integration",
      "Data Processing",
      "Interactive Mapping"
    ],
    status: "Personal project",
  },

];

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="site-shell">
      <header className="nav wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">V</span> VINITH J R<span className="brand-dot">.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>

        <button
          className="nav-cta"
          type="button"
          onClick={() => setShowContact(true)}
        >
          Let's talk <ArrowUpRight size={15} />
        </button>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse"></span> OPEN TO ENTRY-LEVEL OPPORTUNITIES
            </div>

            <h1>
              Building useful things
              <br />
              with <span>AI &amp; code.</span>
            </h1>

            <p className="hero-text">
              I'm Vinith J R — an aspiring AI/ML Engineer and Data Science
              professional who enjoys turning ideas into practical applications.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <button
                className="button secondary"
                type="button"
                onClick={() => setShowContact(true)}
              >
                <Mail size={16} /> Get in touch
              </button>
            </div>

            <div className="socials">
              <a
                href="https://www.linkedin.com/in/vinithjinka"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
              <a
                href="https://github.com/VINITHJR"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Abstract AI and technology illustration"
          >
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="core">
              <BrainCircuit size={68} strokeWidth={1.2} />
              <span>AI / ML</span>
            </div>
            <div className="float-card card-python">
              <Code2 size={17} />
              <span>Python</span>
            </div>
            <div className="float-card card-data">
              <Database size={17} />
              <span>Data</span>
            </div>
            <div className="float-card card-gen">
              <Sparkles size={17} />
              <span>Gen AI</span>
            </div>
            <div className="visual-caption">LEARN · BUILD · ITERATE</div>
          </div>

          <div className="hero-bottom">
            <span>BASED IN BENGALURU, INDIA</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        
        <section className="about-section" id="about">
          <div className="about-layout">
            {/* Left column: section label, tagline and profile photo */}
            <div className="about-left">
              <div className="about-heading">
                <p className="section-label">01 / ABOUT ME</p>
                <h2 className="about-tagline">
                  Curious by nature.
                  <span>Practical by design.</span>
                </h2>
              </div>

              <div className="about-image">
                <img
                  src="/image/VINITH.png"
                  alt="VINITH J R - Profile Photo"
                />
              </div>
            </div>

            {/* Right column: introduction */}
            <div className="about-content">
              <p className="section-label">GET TO KNOW ME</p>

              <h2>
                About <span>Me</span>
              </h2>

              <p>
                Hello! I'm VINITH J R, an Artificial Intelligence
                and Machine Learning graduate from Bengaluru, India.
              </p>

              <p>
                I'm passionate about Artificial Intelligence,
                Machine Learning, Data Science, and Generative AI.
                I enjoy building practical applications that solve
                real-world problems using technology.
              </p>

              <p>
                My technical interests include Python, Machine Learning,
                Deep Learning, NLP, RAG, and Full-Stack Development.
                I'm currently looking for opportunities to begin my
                career in the IT industry.
              </p>
            </div>
          </div>
        </section>


        <section className="section skills-section" id="skills">
          <div className="wrap">
            <div className="section-label">02 / TOOLKIT</div>
            <h2 className="section-title">
              Skills I work with<span>.</span>
            </h2>
            <div className="skills-grid">
              <div className="skill-card">
                <Code2 />
                <h3>Programming</h3>
                <p>Python · C · C++ · Java · JavaScript</p>
              </div>
              <div className="skill-card">
                <BrainCircuit />
                <h3>AI &amp; Machine Learning</h3>
                <p>
                  Machine Learning · Generative AI · NLP · RAG · OpenCV ·
                  TensorFlow · PyTorch
                </p>
              </div>
              <div className="skill-card">
                <Database />
                <h3>Data &amp; Databases</h3>
                <p>SQL · MongoDB · SQLite · PostgreSQL · Pandas · NumPy</p>
              </div>
              <div className="skill-card">
                <Sparkles />
                <h3>Tools &amp; Development</h3>
                <p>
                  Flask · FastAPI · React · Streamlit · Git/GitHub · Tableau ·
                  Power BI
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="projects">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="project-heading">
            <h2 className="section-title">
              Things I've <span>built.</span>
            </h2>
            <p>
              A selection of academic and personal projects exploring AI, data
              and application development.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-num">{project.number}</div>
                <div className="project-main">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="project-status">{project.status}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="wrap">
            <div className="section-label">04 / EXPERIENCE &amp; EDUCATION</div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">INTERNSHIP</div>
                <div>
                  <h3>
                    Data Science Intern <span>— Take It Smart Pvt. Ltd.</span>
                  </h3>
                  <p>
                    Applied Data Science and Machine Learning concepts using
                    Python; worked on data preprocessing, visualisation and
                    analysis of real-world datasets; developed practical
                    problem-solving and teamwork experience.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2022 — 2026</div>
                <div>
                  <h3>B.E. — Artificial Intelligence</h3>
                  <p>
                    Vemana Institute of Technology, Koramangala, Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact wrap" id="contact">
          <div className="section-label">05 / NEXT STEP</div>
          <h2>
            Have a problem
            <br />
            worth <span>solving?</span>
          </h2>
          <p>
            I'm open to entry-level roles and opportunities in AI/ML
            Engineering, Data Science and Generative AI applications.
          </p>
          <button
            className="button primary"
            type="button"
            onClick={() => setShowContact(true)}
          >
            Say hello <ArrowUpRight size={17} />
          </button>
        </section>
      </main>

      <footer className="footer wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">V</span> VINITH J R<span className="brand-dot">.</span>
        </a>
        <span>© 2026 Vinith J R. Built with curiosity.</span>
        <a href="#home">Back to top ↑</a>
      </footer>

      {showContact && (
        <div
          className="contact-overlay"
          onClick={() => setShowContact(false)}
          role="presentation"
        >
          <section
            className="contact-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-contact"
              type="button"
              aria-label="Close contact details"
              onClick={() => setShowContact(false)}
            >
              <X size={21} />
            </button>

            <div className="contact-icon">
              <Mail size={27} />
            </div>
            <h2 id="contact-title">Let's Connect!</h2>
            <p>
              Feel free to contact me for opportunities, collaborations or
              discussions.
            </p>

            <div className="contact-detail">
              <Mail size={20} />
              <div>
                <small>EMAIL ADDRESS</small>
                <a href="mailto:vinithjinka@gmail.com">
                  vinithjinka@gmail.com
                </a>
              </div>
              <button
                className="copy-contact"
                type="button"
                onClick={() =>
                  navigator.clipboard?.writeText("vinithjinka@gmail.com")
                }
                aria-label="Copy email address"
                title="Copy email"
              >
                Copy
              </button>
            </div>

            <div className="contact-detail">
              <Phone size={20} />
              <div>
                <small>PHONE NUMBER</small>
                <a href="tel:+919741028150">+91 97410 28150</a>
              </div>
            </div>

            <button
              className="button primary contact-done"
              type="button"
              onClick={() => setShowContact(false)}
            >
              Close
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
