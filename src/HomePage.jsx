import SiteHeader from "./SiteHeader.jsx";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="shell hero" aria-labelledby="hero-title">
          <div className="hero-frame">
            <p className="hero-kicker">Mehdi Heydari <span>· 8+ years building software</span></p>
            <h1 id="hero-title">Senior full-stack<br /><span className="lime">software engineer.</span></h1>
            <p className="hero-description">I build and improve procurement SaaS, integrations, and booking systems — from the interface and API to production support.</p>
          </div>
          <div className="hero-subrow">
            <div className="meta-box"><strong>PHP / Laravel · JavaScript / Vue.js / Node.js</strong><br /><span>SQL performance · Third-party integrations · Production reliability</span></div>
            <a className="action primary" href="#work">View selected work <span className="arrow" aria-hidden="true">↓</span></a>
            <a className="action" href="Mehdi-Heydari-Resume.pdf" download="Mehdi-Heydari-General-Software-Engineer-CV.pdf">Download résumé <span className="arrow" aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note"><span>Based in Istanbul, Turkey</span><span>Recent product work: Java / Spring Boot / React / TypeScript</span></div>
        </section>

        <section className="shell section" id="work" aria-labelledby="work-title">
          <div className="section-title">
            <div><div className="eyebrow">01 / Selected work</div><h2 id="work-title">Built. Improved. Shipped.</h2></div>
            <div className="count">SELECTED WORK / 06</div>
          </div>
          <p className="section-lead">Production work, a published learning app, and a local AI prototype. Each case explains the problem, my contribution, and the engineering decisions.</p>
          <div className="work-grid">
            <article className="work-card featured voice-project" aria-labelledby="voice-assistant-title">
              <div className="visual voice-visual" aria-hidden="true">
                <span className="visual-label">Real-estate voice assistant / Applied AI</span>
                <div className="voice-wave"><i style={{ "--bar": 14 }}></i><i style={{ "--bar": 24 }}></i><i style={{ "--bar": 38 }}></i><i style={{ "--bar": 20 }}></i><i style={{ "--bar": 56 }}></i><i style={{ "--bar": 78 }}></i><i style={{ "--bar": 46 }}></i><i style={{ "--bar": 94 }}></i><i style={{ "--bar": 62 }}></i><i style={{ "--bar": 38 }}></i><i style={{ "--bar": 76 }}></i><i style={{ "--bar": 100 }}></i><i style={{ "--bar": 54 }}></i><i style={{ "--bar": 82 }}></i><i style={{ "--bar": 40 }}></i><i style={{ "--bar": 64 }}></i><i style={{ "--bar": 28 }}></i><i style={{ "--bar": 48 }}></i><i style={{ "--bar": 18 }}></i></div>
                <div className="voice-signal"><span>VOICE</span><b>→</b><span>CLUES</span><b>→</b><span>CONTEXT</span></div>
                <p>Incomplete clues.<br /><strong>A better next question.</strong></p>
                <span className="release-status">Local inference · Browser prototype</span>
              </div>
              <div className="project-info">
                <div className="project-top"><span>Real-estate voice assistant</span><span>Prototype · In development</span></div>
                <h3 id="voice-assistant-title"><a className="text-link" href="projects/real-estate-voice-assistant/">Finding a property through conversation. ↗</a></h3>
                <p>A local prototype that helps an estate office route Turkish-speaking callers to the right consultant. It searches sample listings, asks follow-up questions, and can collect details for a simulated callback.</p>
                <div className="tags"><span>Python / FastAPI</span><span>React / TypeScript</span><span>Local speech models</span><span>DeepEval</span></div>
                <p className="voice-project-note">The browser shows per-turn timings. A separate text evaluation checks routing outcomes in code and uses LLM-as-a-judge for conversation quality.</p>
                <a className="project-link" href="projects/real-estate-voice-assistant/">Explore the engineering case <span aria-hidden="true">↗</span></a>
              </div>
            </article>

            <article className="work-card featured" aria-labelledby="artikelsense-title">
              <div className="visual product-visual">
                <span className="visual-label">ArtikelSense / Learning product</span>
                <img src="assets/artikelsense-icon.png" width="512" height="512" alt="ArtikelSense app logo" decoding="async" />
                <p>Stop memorizing.<br /><strong>Start recognizing.</strong></p>
                <span className="release-status">Android · Published on Google Play</span>
              </div>
              <div className="project-info">
                <div className="project-top"><span>ArtikelSense · Sep 2026 – Present</span><span>Product development</span></div>
                <h3 id="artikelsense-title"><a className="text-link" href="https://www.artikelsense.top/" target="_blank" rel="noopener noreferrer">German articles, learned through patterns. ↗</a></h3>
                <p>An Android app that teaches German noun articles through recognition patterns, practice, and quizzes. I develop the Java/Spring Boot backend and React/TypeScript client with Codex assistance.</p>
                <div className="tags"><span>Java / Spring Boot</span><span>React / TypeScript</span><span>PostgreSQL</span><span>Capacitor</span></div>
                <details className="case-details">
                  <summary>How I’m building it</summary>
                  <dl>
                    <dt>The problem</dt><dd>Help learners recognize useful noun patterns and practice exceptions instead of relying only on isolated memorization.</dd>
                    <dt>My contribution</dt><dd>Develop the backend and client, including guided practice, quizzes, review flows, and saved learning progress.</dd>
                    <dt>Technical decisions</dt><dd>The server controls the learning journey and progress. Resumable sessions and idempotent answer submission prevent duplicate progress updates when a request is retried.</dd>
                    <dt>Delivery</dt><dd>GitHub Actions runs builds and tests automatically. Deployment to Google Cloud Compute Engine is manual. Codex supports implementation; I review and test changes.</dd>
                    <dt>Current stage</dt><dd>Released on Google Play. The repository is private; the public product website explains the app.</dd>
                  </dl>
                </details>
                <a className="project-link" href="https://www.artikelsense.top/" target="_blank" rel="noopener noreferrer">Visit ArtikelSense <span aria-hidden="true">↗</span></a>
              </div>
            </article>

            <article className="work-card" aria-labelledby="integrations-title">
              <div className="visual" aria-hidden="true">
                <span className="visual-label">Team Procure / Financial integrations</span>
                <div className="flow"><div className="node"><b>PROCUREMENT</b>Purchasing</div><i className="connector"></i><div className="node"><b>PAYMENTS</b>Stripe</div><i className="connector"></i><div className="node"><b>ACCOUNTING</b>QuickBooks</div></div>
                <span className="sync">OAuth · APIs · webhooks</span>
              </div>
              <div className="project-info">
                <div className="project-top"><a href="https://teamprocure.com/" target="_blank" rel="noopener noreferrer">Team Procure ↗</a><span>Senior Software Engineer</span></div>
                <h3 id="integrations-title">Financial workflows, connected.</h3>
                <p>Integrated Stripe, QuickBooks, and Sage into a procurement SaaS platform using REST APIs, OAuth-based workflows, and webhooks.</p>
                <div className="tags"><span>Laravel</span><span>OAuth</span><span>Stripe</span><span>QuickBooks</span><span>Sage</span></div>
                <details className="case-details">
                  <summary>Read the integration case</summary>
                  <dl>
                    <dt>The problem</dt><dd>Connect procurement functionality with external payment and accounting systems.</dd>
                    <dt>My contribution</dt><dd>Designed and maintained the APIs and integrations, including OAuth-based connections and event-driven workflows.</dd>
                    <dt>Delivery context</dt><dd>Developed the main procurement application end to end, from JavaScript/Bootstrap interfaces to Laravel APIs, as part of the product team.</dd>
                    <dt>Quality</dt><dd>Wrote backend tests with PHPUnit and reviewed changes through GitHub pull requests.</dd>
                  </dl>
                </details>
              </div>
            </article>

            <article className="work-card" aria-labelledby="performance-title">
              <div className="visual" aria-hidden="true">
                <span className="visual-label">Team Procure / Search &amp; reporting</span>
                <div className="article-visual"><div className="article-tile"><small>QUERY DESIGN</small><strong>SQL</strong><span>Reshape the query</span></div><div className="article-tile"><small>INDEXING</small><strong>DB</strong><span>Improve access paths</span></div><div className="article-tile"><small>RESULT</small><strong>2×</strong><span>Faster, up to</span></div></div>
              </div>
              <div className="project-info">
                <div className="project-top"><a href="https://teamprocure.com/" target="_blank" rel="noopener noreferrer">Team Procure ↗</a><span>Performance</span></div>
                <h3 id="performance-title">Search and reporting, up to 2× faster.</h3>
                <p>Improved production search and reporting performance through SQL query redesign and indexing.</p>
                <div className="tags"><span>SQL</span><span>Query optimization</span><span>Indexing</span><span>Production</span></div>
                <details className="case-details">
                  <summary>Read the performance case</summary>
                  <dl>
                    <dt>The problem</dt><dd>Search and reporting in the existing application needed better database performance.</dd>
                    <dt>My contribution</dt><dd>Worked on the SQL queries behind these features, redesigning queries and improving indexing to address the bottlenecks.</dd>
                    <dt>The result</dt><dd>Up to 2× faster search and reporting in the optimized workflows. This was my final task at Team Procure.</dd>
                  </dl>
                </details>
              </div>
            </article>

            <article className="work-card" aria-labelledby="reliability-title">
              <div className="visual" aria-hidden="true">
                <span className="visual-label">Team Procure / Production reliability</span>
                <div className="flow"><div className="node"><b>INVESTIGATE</b>Root causes</div><i className="connector"></i><div className="node"><b>PRIORITIZE</b>Fixes</div><i className="connector"></i><div className="node"><b>MAINTAIN</b>Production</div></div>
                <span className="sync">Incident investigation · Legacy refactoring</span>
              </div>
              <div className="project-info">
                <div className="project-top"><a href="https://teamprocure.com/" target="_blank" rel="noopener noreferrer">Team Procure ↗</a><span>Reliability</span></div>
                <h3 id="reliability-title">Stabilizing a customer-facing platform.</h3>
                <p>Led a stabilization project to investigate production issues, identify root causes, prioritize fixes, and improve an existing application.</p>
                <div className="tags"><span>Debugging</span><span>Refactoring</span><span>Queues</span><span>Production support</span></div>
                <details className="case-details">
                  <summary>Read the reliability case</summary>
                  <dl>
                    <dt>The problem</dt><dd>A live customer-facing application needed stabilization while remaining in use.</dd>
                    <dt>My contribution</dt><dd>Investigated incidents, worked through root causes, refactored legacy code, and helped prioritize the fixes.</dd>
                    <dt>Related work</dt><dd>Implemented asynchronous processing with queues and scheduled jobs, and maintained the separate Node.js tender service after its migration from the core application.</dd>
                    <dt>The result</dt><dd>Helped turn the application into a more stable, usable platform while continuing production support.</dd>
                  </dl>
                </details>
              </div>
            </article>

            <article className="work-card" aria-labelledby="travel-title">
              <div className="visual" aria-hidden="true">
                <span className="visual-label">Galactic Travel / Booking &amp; communication</span>
                <div className="flow"><div className="node"><b>PROVIDERS</b>Transport</div><i className="connector"></i><div className="node"><b>AVAILABILITY</b>Live data</div><i className="connector"></i><div className="node"><b>BOOKING</b>APIs</div></div>
                <span className="sync">Provider integrations · Real-time communication</span>
              </div>
              <div className="project-info">
                <div className="project-top"><a href="http://galactictravel.ir/" target="_blank" rel="noopener noreferrer">Galactic Travel ↗</a><span>Backend Developer</span></div>
                <h3 id="travel-title">Booking APIs and a separate communication service.</h3>
                <p>Built APIs connecting transportation providers for bookings and real-time availability. Extracted the communication system from the core application using Node.js and Vue.js.</p>
                <div className="tags"><span>REST APIs</span><span>Node.js</span><span>Vue.js</span><span>Service extraction</span></div>
                <details className="case-details">
                  <summary>Read the service extraction case</summary>
                  <dl>
                    <dt>The problem</dt><dd>Connect transportation providers and relay customer requests to hotel staff in real time.</dd>
                    <dt>My contribution</dt><dd>Designed and developed the provider APIs, then extracted the existing communication system from the core application and rebuilt it with Node.js and Vue.js.</dd>
                    <dt>The result</dt><dd>A separate communication service supporting real-time customer requests alongside the booking integrations.</dd>
                  </dl>
                </details>
              </div>
            </article>
          </div>
        </section>

        <section className="shell section" id="experience" aria-labelledby="experience-title">
          <div className="section-title"><div><div className="eyebrow">02 / Experience</div><h2 id="experience-title">8+ years in software.</h2></div><div className="count">2015 — 2026</div></div>
          <div className="experience">
            <article className="job"><h3><a className="text-link" href="https://teamprocure.com/" target="_blank" rel="noopener noreferrer">Team Procure ↗</a></h3><p>Senior Software Engineer · End-to-end procurement development, Laravel APIs, JavaScript/Bootstrap interfaces, financial integrations, SQL optimization, PHPUnit, and GitHub code reviews.</p><time>Sep 2021 – Apr 2026</time></article>
            <article className="job"><h3>Mahak Learning Group</h3><p>Full Stack Developer · Maintained frontend and backend as the sole developer, migrated the interface to Bootstrap, and improved browser video playback and Farsi RTL support.</p><time>Oct 2019 – Aug 2020</time></article>
            <article className="job"><h3>KIMIA TEB</h3><p>Software Developer · Docker and Nginx deployments to clinic servers; insurance API integrations and secure data exchange.</p><time>Apr 2019 – Oct 2019</time></article>
            <article className="job"><h3><a className="text-link" href="http://galactictravel.ir/" target="_blank" rel="noopener noreferrer">Galactic Travel ↗</a></h3><p>Backend Developer · Transportation provider APIs, bookings, and extraction of a communication service using Node.js and Vue.js.</p><time>May 2017 – Dec 2018</time></article>
            <article className="job"><h3>Royal Concert</h3><p>Software Developer / Co-founder · Developed a concert and event ticketing platform with PHP, MySQL, and JavaScript, supporting online bookings and event management.</p><time>May 2015 – Nov 2016</time></article>
          </div>
        </section>

        <section className="shell section" id="about" aria-labelledby="about-title">
          <div className="section-title"><div><div className="eyebrow">03 / About me</div><h2 id="about-title">Own the work. Ship it well.</h2></div><div className="count">ISTANBUL / TURKEY</div></div>
          <div className="about-grid">
            <p className="about-statement">Building <span>business applications that people can depend on.</span></p>
            <div className="about-copy">
              <p>I’m Mehdi, a senior full-stack engineer with 8+ years of experience across procurement SaaS, booking, ticketing, and third-party integrations. My professional work spans PHP/Laravel, JavaScript, Vue.js, and Node.js.</p>
              <p>I work across interfaces, APIs, and databases, including production troubleshooting, legacy modernization, and background processing. At Team Procure, my work also included backend tests with PHPUnit and code reviews through GitHub pull requests.</p>
              <p>My recent work on ArtikelSense includes Java/Spring Boot and React/TypeScript. I use Codex for implementation support, debugging, and tests, while reviewing changes and taking responsibility for the software I ship.</p>
              <div className="timeline">
                <div className="timeline-row"><span className="timeline-label">EDUCATION</span><span>M.S. Software Engineering · Seraj University · 2015–2018</span></div>
                <div className="timeline-row"><span className="timeline-label">EDUCATION</span><span>B.S. Software Engineering · UCNA · 2012–2015</span></div>
                <div className="timeline-row"><span className="timeline-label">BASED</span><span>Istanbul, Turkey</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="shell section" aria-labelledby="toolkit-title">
          <div className="section-title"><div><div className="eyebrow">04 / Toolkit</div><h2 id="toolkit-title">Tools behind the work.</h2></div></div>
          <div className="toolkit-group"><h3>Professional experience</h3><div className="skill-wrap"><span className="skill">PHP</span><span className="skill">Laravel</span><span className="skill">JavaScript</span><span className="skill">Vue.js</span><span className="skill">Bootstrap</span><span className="skill">Node.js</span><span className="skill">REST APIs</span><span className="skill">MySQL</span><span className="skill">PostgreSQL</span><span className="skill">Redis</span><span className="skill">PHPUnit</span><span className="skill">Docker</span><span className="skill">Linux</span><span className="skill">Git / GitHub</span><span className="skill">SQL optimization</span><span className="skill">Third-party integrations</span></div></div>
          <div className="toolkit-group"><h3>Recent product work · ArtikelSense</h3><div className="skill-wrap"><span className="skill">Java / Spring Boot</span><span className="skill">React / TypeScript</span><span className="skill">Capacitor</span><span className="skill">GitHub Actions</span><span className="skill">Google Cloud Compute Engine</span><span className="skill">Codex</span></div></div>
          <div className="toolkit-group"><h3>Applied AI prototype · Real-estate voice assistant</h3><div className="skill-wrap"><span className="skill">Python / FastAPI</span><span className="skill">Qwen / llama.cpp</span><span className="skill">Whisper / whisper.cpp</span><span className="skill">Silero VAD / ONNX</span><span className="skill">FreyaTTS / PyTorch</span><span className="skill">Dialogue state</span><span className="skill">DeepEval / LLM-as-a-judge</span></div></div>
        </section>

        <section className="shell contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-box"><div><div className="eyebrow">05 / Contact</div><h2 id="contact-title">Let’s talk about<br />your next project.</h2><p>Mehdi Heydari · Senior Full Stack Engineer · Istanbul, Turkey</p></div><a className="contact-link" href="mailto:mehdi.heydari@live.com">Get in touch <span aria-hidden="true">↗</span></a></div>
          <div className="contact-options"><a className="text-link" href="mailto:mehdi.heydari@live.com">mehdi.heydari@live.com</a><a className="text-link" href="https://www.linkedin.com/in/heydari-m/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="text-link" href="Mehdi-Heydari-Resume.pdf" download="Mehdi-Heydari-General-Software-Engineer-CV.pdf">Download résumé ↓</a></div>
          <footer><span>© 2026 Mehdi Heydari</span><span>Senior Full Stack Engineer · Istanbul, Turkey</span><a className="footer-mark" href="#top">Back to top ↑</a></footer>
        </section>
      </main>
    </>
  );
}
