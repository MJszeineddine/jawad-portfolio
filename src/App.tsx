import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Github,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const services = [
  'Web scraping and crawling',
  'Browser automation',
  'Data extraction and normalization',
  'APIs and data pipelines',
  'FastAPI backend systems',
  'PostgreSQL data workflows',
  'Production automation',
  'Full-stack product engineering',
];

const stack = [
  'Python',
  'Playwright',
  'Scrapy',
  'Selenium',
  'BeautifulSoup',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'REST APIs',
  'Data pipelines',
  'TypeScript',
  'Node.js',
  'React',
  'Next.js',
  'Redis',
  'GitHub Actions',
];

const work = [
  {
    title: 'Web Scraping & Browser Automation Lab',
    type: 'Public scraping and automation proof',
    href: 'https://github.com/MJszeineddine/MJszeineddine/tree/main/scraping-lab',
    details:
      'Public engineering sample showing HTTP-first extraction, Playwright-rendered page automation, structured validation, retries, normalization, deduplication, and testable pipeline separation.',
    points: ['Python + httpx + BeautifulSoup', 'Playwright browser automation', 'Pydantic validation', 'Production-oriented pipeline design'],
  },
  {
    title: 'GoPilot Express',
    type: 'Delivery operations platform',
    href: 'https://github.com/MJszeineddine/gopilot-express-case-study',
    details:
      'Multi-role delivery operations system for owner, dispatcher, merchant, and courier workflows, dispatch runs, role-based access, bilingual dashboards, and production release preparation.',
    points: ['React + TypeScript + Vite', 'FastAPI/Python backend', 'Relational data model', 'Docker and CI verification'],
  },
  {
    title: 'LOOSH',
    type: 'E-commerce and admin operations',
    href: 'https://github.com/MJszeineddine/loosh-ecommerce-case-study',
    details:
      'Production commerce system with storefront, admin operations, products, inventory lifecycle, COD order flow, USD/LBP presentation, Arabic/English RTL, media workflows, delivery rules, backups, and deployment preparation.',
    points: ['React + TypeScript + Vite', 'Node.js + Express API', 'Prisma + PostgreSQL', 'SEO and deployment handoff'],
  },
  {
    title: 'Reliable Webhook Worker',
    type: 'Webhook and background-job infrastructure',
    href: 'https://github.com/MJszeineddine/reliable-webhook-worker',
    details:
      'Public TypeScript sample for signed CRM webhooks, Zod validation, Redis idempotency, BullMQ queues, retry backoff, terminal failure handling, and safe job-status visibility.',
    points: ['Fastify + TypeScript', 'HMAC verification', 'Redis + BullMQ', 'Vitest and Docker Compose'],
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jawad Zeineddine',
  email: 'mailto:mjawadzeineddine@gmail.com',
  url: 'https://mjszeineddine.github.io/',
  sameAs: ['https://github.com/MJszeineddine'],
  jobTitle: 'Python Web Scraping & Browser Automation Engineer',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Lebanon',
  },
  knowsAbout: [
    'Python',
    'Web scraping',
    'Browser automation',
    'Playwright',
    'Scrapy',
    'Selenium',
    'FastAPI',
    'PostgreSQL',
    'Data pipelines',
    'APIs',
    'Docker',
    'TypeScript',
    'Node.js',
    'Production deployment',
  ],
};

function App() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="site-header" aria-label="Primary">
        <a className="brand" href="#top" aria-label="Jawad Zeineddine home">
          JZ
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">Web scraping • browser automation • production data systems</p>
            <h1>Jawad Zeineddine</h1>
            <p className="subtitle">Python Web Scraping & Browser Automation Engineer</p>
            <p className="hero-text">
              I build reliable scrapers, crawlers, browser automations, APIs, and data pipelines — backed by
              production full-stack engineering when the job needs more than a one-off script.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:mjawadzeineddine@gmail.com?subject=Web%20scraping%20or%20automation%20project">
                <Mail size={18} aria-hidden="true" />
                Discuss a data project
              </a>
              <a className="button secondary" href="https://github.com/MJszeineddine">
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
          <div className="system-panel" aria-label="Production systems snapshot">
            <div className="panel-top">
              <span />
              <span />
              <span />
            </div>
            <div className="panel-body">
              <div>
                <p className="panel-label">Current focus</p>
                <h2>Reliable extraction systems that survive real-world websites.</h2>
              </div>
              <div className="status-grid">
                <div>
                  <ShieldCheck aria-hidden="true" />
                  <span>100+ sites since 2020</span>
                </div>
                <div>
                  <Layers3 aria-hidden="true" />
                  <span>Scraping and APIs</span>
                </div>
                <div>
                  <Rocket aria-hidden="true" />
                  <span>Browser automation</span>
                </div>
                <div>
                  <Wrench aria-hidden="true" />
                  <span>Production delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>From difficult websites to structured, usable data.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service} className="service-card">
                <CheckCircle2 size={20} aria-hidden="true" />
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">Featured work</p>
              <h2>Public proof across scraping, backend systems, and production engineering.</h2>
            </div>
            <div className="work-grid">
              {work.map((item) => (
                <article key={item.title} className="work-card">
                  <div className="work-card-head">
                    <Code2 size={22} aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.type}</p>
                    </div>
                  </div>
                  <p>{item.details}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a href={item.href}>
                    Read case study <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap split-section">
          <div>
            <p className="eyebrow">How I work</p>
            <h2>Clear scope, acceptance criteria, and production-safe handoff.</h2>
          </div>
          <div className="process-list">
            {['Fixed scope', 'Acceptance criteria', 'Production-safe delivery', 'Clear handoff', 'Confidentiality'].map((item) => (
              <div key={item}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Technical stack</p>
            <h2>Tools I use to extract, automate, and ship stable systems.</h2>
          </div>
          <div className="stack-list" aria-label="Technical capabilities">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="privacy-band">
          <div className="section-wrap split-section">
            <div>
              <p className="eyebrow">Privacy note</p>
              <h2>Client trust stays protected.</h2>
            </div>
            <p>
              Public repositories show case-study architecture, product scope, and representative demo visuals only.
              Client source code, secrets, customer data, production records, and private documents remain private unless
              explicit permission exists.
            </p>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Send the target website or automation problem and I’ll define the extraction path, risks, and deliverable.</h2>
          </div>
          <form
            className="contact-form"
            action="mailto:mjawadzeineddine@gmail.com"
            method="post"
            encType="text/plain"
            aria-label="Email Jawad Zeineddine"
          >
            <label>
              Name
              <input name="name" autoComplete="name" />
            </label>
            <label>
              Requirement
              <textarea name="requirement" rows={5} />
            </label>
            <button type="submit">
              <Mail size={18} aria-hidden="true" />
              Email Jawad
            </button>
            <a className="direct-link" href="mailto:mjawadzeineddine@gmail.com">
              mjawadzeineddine@gmail.com
            </a>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
