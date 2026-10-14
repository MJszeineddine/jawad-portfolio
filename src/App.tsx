import { useState } from 'react';
import { solutionAreas } from './solutionCatalog';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Blocks, Braces, Check,
  ChevronDown, CircleHelp, Code2, Copy, Database, ExternalLink, Github,
  Layers3, Linkedin, Mail, Menu, Network, ShieldCheck, Sparkles, Workflow, X,
} from 'lucide-react';

const site = 'https://mjszeineddine.github.io/';
const email = 'mjawadzeineddine@gmail.com';

const expertise = [
  {
    icon: <Layers3 aria-hidden="true" />,
    index: '01',
    name: 'Full-stack web, mobile & SaaS',
    url: "/services/full-stack-saas-engineering.html",
    description: 'Build and extend web platforms, mobile experiences, dashboards, APIs, and the data layers behind them.',
    chips: ['React / Next.js', 'TypeScript', 'Flutter', 'FastAPI'],
  },
  {
    icon: <Sparkles aria-hidden="true" />,
    index: '02',
    name: 'AI systems & integrations',
    url: "/services/ai-integration-engineering.html",
    description: 'Bring useful AI features into real software, connect services, and put guardrails around the workflow.',
    chips: ['LLM APIs', 'Agents & workflows', 'API integration', 'Evaluation'],
  },
  {
    icon: <Workflow aria-hidden="true" />,
    index: '03',
    name: 'Business automation & data',
    url: "/services/business-automation-data.html",
    description: 'Replace brittle manual work with dependable data collection, browser workflows, and integrations.',
    chips: ['Python', 'Playwright', 'ETL pipelines', 'Webhooks'],
  },
  {
    icon: <ShieldCheck aria-hidden="true" />,
    index: '04',
    name: 'Production engineering',
    url: "/services/production-rescue-reliability.html",
    description: 'Diagnose, stabilize, test, deploy, and hand over systems that need to work beyond a demo.',
    chips: ['Docker', 'CI/CD', 'Testing', 'Reliability'],
  },
];

const projects = [
  {
    number: '01 / OPERATIONS',
    name: 'GoPilot Express',
    category: 'Multi-role logistics platform',
    summary: 'Documented delivery operations platform spanning merchant, dispatcher, courier, and owner workflows — with role-aware APIs, COD handling, and bilingual interfaces.',
    outcomes: ['Role-based operational design', 'Dispatch & COD workflows', 'Release and verification approach'],
    stack: 'React · TypeScript · Python/FastAPI',
    link: 'https://github.com/MJszeineddine/gopilot-express-case-study',
    proof: 'Public architecture case study — client source stays private',
  },
  {
    number: '02 / COMMERCE',
    name: 'LOOSH',
    category: 'E-commerce & internal operations',
    summary: 'Commerce and administration case study covering products, inventory, cash-on-delivery order flows, bilingual UX, and operational deployment considerations.',
    outcomes: ['Commerce plus back-office systems', 'Inventory & order lifecycle', 'Arabic/English interface'],
    stack: 'React · Node.js · PostgreSQL',
    link: 'https://github.com/MJszeineddine/loosh-ecommerce-case-study',
    proof: 'Public engineering case study — no confidential business data',
  },
  {
    number: '03 / INFRASTRUCTURE',
    name: 'Reliable Webhook Worker',
    category: 'Open-source engineering proof',
    summary: 'Public TypeScript example of signed webhook intake, input validation, Redis-backed deduplication, background jobs, retry behavior, and automated checks.',
    outcomes: ['Verified webhook payloads', 'Idempotency & retry design', 'Automated test examples'],
    stack: 'TypeScript · Fastify · Redis/BullMQ',
    link: 'https://github.com/MJszeineddine/reliable-webhook-worker',
    proof: 'Synthetic engineering demonstration — not a client engagement',
  },
  {
    number: '04 / DATA SYSTEMS',
    name: 'Browser Automation Lab',
    category: 'Open-source engineering proof',
    summary: 'A practical look at web extraction: rendered browser flows, structured parsing, normalization, validation, and maintainable data pipelines.',
    outcomes: ['Browser and HTTP extraction', 'Validation & deduplication', 'Testable pipeline boundaries'],
    stack: 'Python · Playwright · FastAPI',
    link: 'https://github.com/MJszeineddine/MJszeineddine/tree/main/scraping-lab',
    proof: 'Public demonstration using permitted sample sources',
  },
  {
    number: '05 / SOURCE CODE',
    name: 'LOOSH Storefront Source',
    category: 'Public code: e-commerce MVP',
    summary: 'Inspectable React and Node.js storefront source showing COD checkout, inventory lifecycle, admin authentication, localization, and release-readiness documentation.',
    outcomes: ['COD inventory reservation logic', 'Server-side admin sessions', 'E2E testing documentation'],
    stack: 'React · TypeScript · Express · Prisma',
    link: 'https://github.com/MJszeineddine/loosh-by-chatgpt-pro',
    proof: 'Public source repository — production deployment not claimed',
  },
  {
    number: '06 / AUTOMATION',
    name: 'Telegram Client Engine',
    category: 'Public code: consent-driven client workflow',
    summary: 'Engineering repository documenting opt-in technical intake, quotation workflows, simulated payment verification, queueing, authorization boundaries, and local demonstration.',
    outcomes: ['Human-approved commercial steps', 'Bounded mock payment controls', 'Technical checks & runbooks'],
    stack: 'TypeScript · Next.js · PostgreSQL · Redis',
    link: 'https://github.com/MJszeineddine/jawad-telegram-client-engine',
    proof: 'Public synthetic demonstration — no real customers or payments claimed',
  },
];

const process = [
  { n: '01', title: 'Understand the system', body: 'We clarify the real business outcome, existing constraints, access, scope, and what success looks like.' },
  { n: '02', title: 'Engineer the right solution', body: 'We choose the smallest reliable implementation, with clear ownership of data, behavior, and integrations.' },
  { n: '03', title: 'Prove it and hand it over', body: 'We verify realistic workflows, document the result, and make the system maintainable for what comes next.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jawad Zeineddine',
  url: site,
  email: 'mailto:' + email,
  jobTitle: 'AI-Native Software Engineer',
  description: 'Full-stack, SaaS, AI integrations, data systems, browser automation and production engineering.',
  sameAs: [
    'https://github.com/MJszeineddine',
    'https://www.linkedin.com/in/jawad-zeineddine-2279b613a/',
    'https://www.upwork.com/freelancers/~0108bf9dfc98b94e9a',
  ],
  address: { '@type': 'PostalAddress', addressCountry: 'LB' },
  knowsAbout: ['Full-stack software engineering', 'SaaS', 'Mobile applications', 'Flutter', 'React', 'TypeScript', 'Python', 'FastAPI', 'AI integrations', 'Agents', 'PostgreSQL', 'Browser automation', 'Data engineering', 'Production systems'],
};

function InquiryForm() {
  const [client, setClient] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [area, setArea] = useState('SaaS / full-stack engineering');
  const [summary, setSummary] = useState('');
  const [copied, setCopied] = useState(false);

  const draft = [
    'Name: ' + (client.trim() || '(not provided)'),
    'Email: ' + (replyTo.trim() || '(not provided)'),
    'Project area: ' + area,
    '',
    'Project brief:',
    summary.trim(),
  ].join('\n');
  const subject = 'Project inquiry: ' + area;
  const mailto = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(draft);
  const valid = client.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo.trim()) && summary.trim().length >= 15;

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText('To: ' + email + '\nSubject: ' + subject + '\n\n' + draft);
      setCopied(true);
    } catch {
      const input = document.createElement('textarea');
      input.value = 'To: ' + email + '\nSubject: ' + subject + '\n\n' + draft;
      document.body.appendChild(input);
      input.select();
      setCopied(document.execCommand('copy'));
      input.remove();
    }
  }

  return (
    <form className="inquiry-form" onSubmit={(event) => { event.preventDefault(); if (valid) window.location.href = mailto; }}>
      <div className="field-grid">
        <label className="field">
          <span>Your name</span>
          <input required minLength={2} autoComplete="name" name="client" value={client} onChange={(event) => setClient(event.target.value)} placeholder="Name" />
        </label>
        <label className="field">
          <span>Your email</span>
          <input required type="email" autoComplete="email" name="replyTo" value={replyTo} onChange={(event) => setReplyTo(event.target.value)} placeholder="you@company.com" />
        </label>
      </div>
      <label className="field">
        <span>What do you need?</span>
        <span className="select-wrap">
          <select value={area} name="area" onChange={(event) => setArea(event.target.value)}>
            <option>SaaS / full-stack engineering</option>
            <option>AI systems & integrations</option>
            <option>Automation & data engineering</option>
            <option>Production debugging & rescue</option>
            <option>Not sure yet</option>
          </select>
          <ChevronDown aria-hidden="true" size={17} />
        </span>
      </label>
      <label className="field">
        <span>Tell me about the project</span>
        <textarea required minLength={15} maxLength={5000} rows={5} name="summary" value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="What are you building or trying to fix? What would a successful result look like?" />
      </label>
      <div className="inquiry-actions">
        <button className="button primary dark-button" type="submit" disabled={!valid}>
          Open email draft <ArrowUpRight size={18} aria-hidden="true" />
        </button>
        <button className="button outline-button copy-button" type="button" disabled={!valid} onClick={copyBrief}>
          {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy brief instead'}
        </button>
      </div>
      <p className="form-disclosure"><CircleHelp size={15} aria-hidden="true" /> This opens your email application. Nothing is sent or stored on this website. If email does not open, copy the brief and send it to <a href={'mailto:' + email}>{email}</a>.</p>
    </form>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState(solutionAreas[0].id);
  const currentSolutions = solutionAreas.find((area) => area.id === activeArea) ?? solutionAreas[0];
  const close = () => setMenuOpen(false);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jawad Zeineddine, home" onClick={close}>
          <span className="brand-mark">JZ<span className="brand-dot">.</span></span>
          <span className="brand-label">JAWAD<br />ZEINEDDINE</span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
        <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          <a href="#expertise" onClick={close}>Expertise</a>
          <a href="#work" onClick={close}>Selected work</a>
          <a href="#solutions" onClick={close}>Solutions</a>
          <a href="#approach" onClick={close}>Approach</a>
          <a href="#contact" className="nav-contact" onClick={close}>Discuss a project <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-inner page-wrap">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse-dot" /> INDEPENDENT AI-NATIVE ENGINEERING PRACTICE · WORLDWIDE</div>
              <h1>Engineering the systems <em>behind ambitious businesses.</em></h1>
              <p className="hero-role">Jawad Zeineddine <span aria-hidden="true">/</span> AI-Native Product & Systems Engineer</p>
              <p className="hero-description">Work directly with the engineer who can architect the product, build the platform, integrate AI and data, and carry complex systems through to dependable production. Full-stack SaaS, web and mobile, operational software, and engineering rescue — connected by one accountable technical owner.</p>
              <div className="hero-actions">
                <a className="button primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeTtJoymcR3Zr4JdVvCq8lY1yuiyp6w_FI_hqiLG6IvEJgqDg/viewform?usp=header" target="_blank" rel="noopener noreferrer">Send your project brief <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a className="button text-button" href="#work">See engineering evidence <ArrowDownRight size={19} aria-hidden="true" /></a>
                <a className="button text-button" href="https://www.linkedin.com/services/page/a80620347a04800082/" target="_blank" rel="noopener noreferrer">Request on LinkedIn <ArrowUpRight size={19} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-visual" aria-label="An illustration of connected software systems">
              <div className="visual-grid" aria-hidden="true" />
              <div className="visual-label top-left">JZ / SOFTWARE SYSTEMS</div>
              <div className="orbit orbit-1" />
              <div className="orbit orbit-2" />
              <div className="system-center"><Braces size={42} strokeWidth={1.35} aria-hidden="true" /><span>BUILD<br />CONNECT<br />SHIP</span></div>
              <div className="system-tag tag-one"><Blocks size={17} /> SaaS</div>
              <div className="system-tag tag-two"><Sparkles size={17} /> AI</div>
              <div className="system-tag tag-three"><Database size={17} /> DATA</div>
              <div className="system-tag tag-four"><Network size={17} /> SYSTEMS</div>
              <div className="visual-label bottom-right">FROM CONCEPT TO PRODUCTION ↗</div>
            </div>
          </div>
          <div className="hero-footer page-wrap">
            <span>PRODUCT ARCHITECTURE. AI SYSTEMS. FULL-STACK DELIVERY. PRODUCTION OWNERSHIP.</span>
            <a href="#expertise">What I do <ArrowDownRight size={16} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="intro-strip">
          <div className="page-wrap intro-inner">
            <span className="section-kicker">WHY THIS PRACTICE</span>
            <p>Not another handoff in a crowded delivery chain. <strong>One engineering partner who can connect product strategy to working systems</strong> — from architecture and interfaces to data, integrations, testing and reliable release.</p>
          </div>
        </section>

        <section id="expertise" className="page-wrap section expertise-section">
          <div className="section-topline"><span className="section-kicker">01 / CAPABILITIES</span><span className="section-caption">BUILT FOR COMPLEX WORK</span></div>
          <div className="section-header"><h2>Senior-level scope.<br /><em>End-to-end ownership.</em></h2><p>For founders, product teams and agencies building complex software: one independent engineer spanning the layers that usually require several disconnected specialists.</p></div>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card" key={item.index}>
                <div className="expertise-card-top"><div className="expertise-icon">{item.icon}</div><span>{item.index}</span></div>
                <h3>{item.name}</h3><p>{item.description}</p>
                <div className="chip-row">{item.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
                <a className="expertise-more" href={item.url}>Explore this practice <ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <p className="section-footnote">Capabilities describe services I can evaluate and deliver; specific tools and project scope are agreed case by case.</p>
        </section>

        <section id="work" className="work-band">
          <div className="page-wrap section">
            <div className="section-topline"><span className="section-kicker">02 / SELECTED WORK</span><span className="section-caption">ENGINEERING EVIDENCE</span></div>
            <div className="section-header"><h2>Systems built with<br /><em>engineering discipline.</em></h2><p>Inspect software architecture, operational product decisions and public code. Every case study distinguishes real project work from synthetic engineering demonstrations.</p></div>
            <div className="projects-grid">
              {projects.map((item) => (
                <article className="project-card" key={item.name}>
                  <div className="project-topline"><span>{item.number}</span><ArrowUpRight size={19} aria-hidden="true" /></div>
                  <p className="project-category">{item.category}</p>
                  <h3>{item.name}</h3>
                  <p className="project-summary">{item.summary}</p>
                  <ul>{item.outcomes.map((point) => <li key={point}><Check size={15} aria-hidden="true" />{point}</li>)}</ul>
                  <div className="project-bottom"><span className="project-stack">{item.stack}</span><a href={item.link} target="_blank" rel="noopener noreferrer">Explore case study <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in new tab)</span></a></div>
                  <p className="proof-note">{item.proof}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="trust-panel">
            <div>
              <span className="section-kicker">WHY WORK DIRECTLY WITH ME</span>
              <h3>Good software earns<br /><em>trust through evidence.</em></h3>
              <p>Clear technical ownership from the first discussion to a maintainable handoff. See how I structure operational software, manage failure paths, and document decisions before choosing a partner.</p>
              <a className="trust-proof-link" href="https://github.com/MJszeineddine/reliable-webhook-worker" target="_blank" rel="noopener noreferrer">Inspect a working engineering example <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="trust-points" aria-label="What partners can expect">
              <div><Check size={19} aria-hidden="true" /><span><strong>Direct engineering ownership</strong><small>One accountable technical contact across architecture, APIs, UI, integration and delivery.</small></span></div>
              <div><Check size={19} aria-hidden="true" /><span><strong>Reviewable technical decisions</strong><small>Inspectable public source and architecture examples instead of unsupported performance claims.</small></span></div>
              <div><Check size={19} aria-hidden="true" /><span><strong>Defined verification and handoff</strong><small>Testing scope, release checks and maintenance responsibilities established for each engagement.</small></span></div>
            </div>
          </div>
        </section>

        <section id="solutions" className="page-wrap section solution-section" aria-labelledby="solutions-title">
          <div className="section-topline"><span className="section-kicker">03 / PROJECT POSSIBILITIES</span><span className="section-caption">80 EXAMPLES · 4 PRACTICE AREAS</span></div>
          <div className="section-header">
            <h2 id="solutions-title">The right build<br /><em>for your challenge.</em></h2>
            <p>Explore 80 kinds of projects I can scope across software engineering. These are <strong>service examples, not claims of 80 past client deliveries.</strong> My confirmed project work and code evidence are in <a href="#work">Selected work</a>.</p>
          </div>
          <div className="solution-tabs" role="tablist" aria-label="Explore engineering solutions">
            {solutionAreas.map((area) => (
              <button
                type="button"
                role="tab"
                key={area.id}
                id={'tab-' + area.id}
                aria-controls="solution-panel"
                aria-selected={activeArea === area.id}
                className={activeArea === area.id ? 'solution-tab active' : 'solution-tab'}
                onClick={() => setActiveArea(area.id)}
              >
                <span>{area.label}</span><span className="solution-tab-count">{area.items.length}</span>
              </button>
            ))}
          </div>
          <div id="solution-panel" role="tabpanel" aria-labelledby={'tab-' + activeArea} className="solution-panel">
            <div className="solution-panel-heading">
              <div><span className="solution-panel-eyebrow">EXAMPLE PROJECT SCOPES · NOT CLIENT CASE STUDIES</span><h3>{currentSolutions.label}</h3><p>{currentSolutions.caption}</p></div>
              <span className="solution-panel-counter">{currentSolutions.items.length} project types</span>
            </div>
            <div className="solution-grid">
              {currentSolutions.items.map((item, index) => (
                <article className="solution-card" key={currentSolutions.id + item.title}>
                  <span className="solution-number">{String(index + 1).padStart(2, '0')}</span>
                  <div><h4>{item.title}</h4><p>{item.deliverable}</p></div>
                </article>
              ))}
            </div>
            <div className="solution-cta"><span>Have an adjacent challenge that is not listed? Scope and feasibility are evaluated case by case.</span><a className="button primary dark-button" href="#contact">Talk through your project <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section id="approach" className="page-wrap section approach-section">
          <div className="section-topline"><span className="section-kicker">04 / WORKING TOGETHER</span><span className="section-caption">FROM DISCOVERY TO HANDOVER</span></div>
          <div className="section-header"><h2>A disciplined partner.<br /><em>From direction to delivery.</em></h2><p>Serious projects deserve explicit scope, direct technical ownership, verifiable milestones and no surprises at handover.</p></div>
          <div className="process-grid">{process.map((step) => <div className="process-step" key={step.n}><span className="process-number">{step.n}</span><h3>{step.title}</h3><p>{step.body}</p></div>)}</div>
          <div className="partner-band"><Code2 size={23} aria-hidden="true" /><p><strong>Also available for white-label delivery.</strong> Agencies and product teams can engage me for defined engineering milestones, technical integrations, and operational handover.</p><a href="#contact">Start a conversation <ArrowRight size={17} aria-hidden="true" /></a></div>
        </section>

        <section id="contact" className="contact-band">
          <div className="page-wrap section">
            <div className="section-topline"><span className="section-kicker">05 / START A PROJECT</span><span className="section-caption">DIRECTLY WITH THE ENGINEER</span></div>
            <div className="contact-grid">
              <div className="contact-copy"><h2>Your next product deserves<br /><em>serious engineering.</em></h2><p>Building a platform, integrating AI into real operations, or rescuing a critical system? Describe the business objective and constraints. Work directly with the engineer responsible for the solution.</p>
                <div className="contact-links">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTtJoymcR3Zr4JdVvCq8lY1yuiyp6w_FI_hqiLG6IvEJgqDg/viewform?usp=header" target="_blank" rel="noopener noreferrer"><ArrowUpRight size={19} aria-hidden="true" />Project inquiry form<ExternalLink size={15} aria-hidden="true" /></a>
                  <a href={'mailto:' + email}><Mail size={19} aria-hidden="true" />{email}<ExternalLink size={15} aria-hidden="true" /></a>
                  <a href="https://www.linkedin.com/services/page/a80620347a04800082/" target="_blank" rel="noopener noreferrer"><Linkedin size={19} aria-hidden="true" />Request project via LinkedIn<ExternalLink size={15} aria-hidden="true" /></a>
                  <a href="https://www.linkedin.com/in/jawad-zeineddine-2279b613a/" target="_blank" rel="noopener noreferrer"><Linkedin size={19} aria-hidden="true" />LinkedIn profile<ExternalLink size={15} aria-hidden="true" /></a>
                  <a href="https://github.com/MJszeineddine" target="_blank" rel="noopener noreferrer"><Github size={19} aria-hidden="true" />Engineering GitHub<ExternalLink size={15} aria-hidden="true" /></a>
                  <a href="https://www.upwork.com/freelancers/~0108bf9dfc98b94e9a" target="_blank" rel="noopener noreferrer"><ArrowUpRight size={19} aria-hidden="true" />Upwork profile<ExternalLink size={15} aria-hidden="true" /></a>
                </div>
              </div>
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="page-wrap footer-inner"><span>© {new Date().getFullYear()} Jawad Zeineddine</span><span>Independent software engineering · Worldwide</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}

export default App;
