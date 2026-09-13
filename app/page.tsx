const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "For when you need a website that feels like it belongs to the person or business behind it.",
  },
  {
    number: "02",
    title: "Web applications",
    description:
      "When there are users, accounts, bookings, payments, dashboards or other things happening behind the screen.",
  },
  {
    number: "03",
    title: "Digital products",
    description:
      "For ideas that need more than a few pages. I work out the moving parts and build them into one product.",
  },
];

const projects = [
  {
    number: "01",
    name: "GAVANA",
    category: "Shortlet marketplace",
    year: "2026",
    image: "/gavana.jpg",
    description:
      "A marketplace for finding and booking shortlets, built around a growing network of property agents.",
    details:
      "The interesting part wasn't the listings page. I built the pieces around it too: property management, bookings, agent dashboards, image storage, authentication and the database underneath everything.",
    stack: "Next.js · TypeScript · Tailwind · Supabase",
    href: "https://gavana-seven.vercel.app/",
  },
  {
    number: "02",
    name: "EASTCOSELS 2026",
    category: "Conference platform",
    year: "2026",
    image: "/eastcosels.jpg",
    description:
      "The digital home for an international conference bringing together South East students of English and Literary Studies.",
    details:
      "I built the platform to handle the parts of a real conference that happen online: registration, payments, tickets, QR check-in, admin management and data exports.",
    stack: "Next.js · TypeScript · Supabase · Paystack",
    href: "https://eastcosels-2026-six.vercel.app/",
  },
];

const experiments = [
  {
    number: "01",
    category: "Interface experiment",
    title: "Motion & interaction",
  },
  {
    number: "02",
    category: "Small tool",
    title: "Useful little things",
  },
  {
    number: "03",
    category: "Data / trading",
    title: "Things worth exploring",
  },
];

const faqs = [
  {
    question: "I have an idea, but I'm not sure what I actually need.",
    answer:
      "That's fine. Start with the problem you're trying to solve. We can work out the pages, features and technical bits from there.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. Websites are part of it. I also build web applications and products where there are users, data, payments or other things happening behind the scenes.",
  },
  {
    question: "Can you work with an existing business?",
    answer:
      "Yes. If you already have something running, we can figure out what needs improving instead of rebuilding everything for the sake of it.",
  },
  {
    question: "What happens after the website is finished?",
    answer:
      "I can handle deployment and the technical setup needed to get it running properly. If the project needs ongoing work, we can figure that out too.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on what we're building. A simple website and a platform with accounts, payments and dashboards are very different projects, so I price them accordingly.",
  },
];

export default function Home() {
  return (
    <main id="top" className="site-shell">
      {/* NAVIGATION */}
      <div className="container">
        <nav className="nav reveal reveal-nav">
          <a href="/" className="nav-logo">
            Caleb Mmesoma
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#experiments">Experiments</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
            </summary>

            <div className="mobile-menu-panel">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#experiments">Experiments</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </nav>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-introduction">
              <p className="hero-kicker reveal reveal-1">
                Developer & digital product builder
              </p>

              <h1 className="hero-title">
                <span className="hero-line reveal reveal-2">
                  I make things.
                </span>

                <span className="hero-line reveal reveal-3">
                  <span className="italic">Some of them</span>
                </span>

                <span className="hero-line reveal reveal-4">
                  happen to be websites.
                </span>
              </h1>
            </div>

            <div className="hero-portrait-wrap reveal reveal-portrait">
              <div className="hero-portrait-frame">
                <div className="hero-portrait-image">
                  <img src="/hero.png" alt="Caleb Mmesoma" />
                </div>

                <div className="hero-portrait-caption">
                  <span>Caleb Mmesoma</span>
                  <span>01 / 01</span>
                </div>
              </div>
            </div>

            <div className="hero-bottom reveal reveal-5">
              <p className="hero-description">
                I&apos;m Caleb. I build websites and web applications,
                usually starting with a problem, a rough idea, or someone
                saying, &quot;I think we could build this.&quot;
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button">
                  Start a project <span>↗</span>
                </a>

                <a href="#work" className="button button-secondary">
                  See what I&apos;ve built
                </a>
              </div>
            </div>

            <div className="hero-bottom-meta reveal reveal-6">
              <span>Based in Nigeria</span>
              <span>Available for selected projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="container">
          <div className="section-meta">
            <span>01</span>
            <span>A little about me</span>
          </div>

          <div className="about-grid">
            <div>
              <h2 className="section-title">
                I like <em>figuring</em> things out.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I studied English and Literary Studies, so I spend an
                unreasonable amount of time thinking about words, structure
                and whether something actually makes sense.
              </p>

              <p>
                I ended up bringing that habit into development. I like
                taking something that starts out vague and turning it into a
                product with a clear shape: what people see, what they do,
                and what has to happen behind the scenes.
              </p>

              <p>
                That might mean a simple website. It might also mean
                authentication, payments, databases, dashboards and all the
                less glamorous bits that make a product actually work.
              </p>

              <div className="about-note">
                I care about the small details because people notice when
                something doesn&apos;t quite make sense.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services">
        <div className="container">
          <div className="section-meta">
            <span>02</span>
            <span>What I do</span>
          </div>

          <h2 className="section-title">
            Different problems need <em>different builds.</em>
          </h2>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <span className="service-number">{service.number}</span>

                <h3 className="service-name">{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section work">
        <div className="container">
          <div className="section-meta">
            <span>03</span>
            <span>Selected work</span>
          </div>

          <h2 className="section-title">
            A couple of things I&apos;ve <em>built.</em>
          </h2>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-visual"
                  aria-label={`Visit ${project.name}`}
                >
                  <div className="project-image-frame">
                    <img
                      src={project.image}
                      alt={`${project.name} website`}
                      className="project-image"
                    />
                  </div>
                </a>

                <div className="project-info">
                  <div className="project-main-info">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3>{project.name}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>

                  <div className="project-details">
                    <p>{project.details}</p>

                    <p className="project-stack">{project.stack}</p>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Visit live project <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIMENTS / LAB */}
      <section id="experiments" className="section experiments">
        <div className="container">
          <div className="section-meta">
            <span>04</span>
            <span>Experiments / Lab</span>
          </div>

          <div className="experiments-intro">
            <h2 className="section-title">
              Small things I build <em>because I&apos;m curious.</em>
            </h2>

            <p>
              Not everything I build needs to become a product or a client
              project. Sometimes I just want to test an idea, learn something
              new, or see if I can make a useful little thing.
            </p>
          </div>

          <div className="experiments-grid">
            {experiments.map((experiment) => (
              <article className="experiment-card" key={experiment.number}>
                <div className="experiment-placeholder">
                  <span className="experiment-placeholder-number">
                    {experiment.number}
                  </span>

                  <span className="experiment-coming-soon">
                    Coming soon
                  </span>

                  <span className="experiment-placeholder-mark">+</span>
                </div>

                <div className="experiment-info">
                  <div>
                    <span className="experiment-category">
                      {experiment.category}
                    </span>

                    <h3>{experiment.title}</h3>
                  </div>

                  <span className="experiment-number">
                    {experiment.number}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="experiments-note">
            UI experiments · small tools · tiny web apps · data · trading
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section pricing">
        <div className="container">
          <div className="section-meta">
            <span>05</span>
            <span>Pricing</span>
          </div>

          <h2 className="section-title">
            No mystery <em>numbers.</em>
          </h2>

          <p className="pricing-intro">
            I don&apos;t think a five-page website and a full web application
            should have the same price tag. I look at what the project needs,
            then price it from there.
          </p>

          <div className="pricing-list">
            <div className="price-row">
              <div>
                <h3 className="price-name">Websites</h3>
                <p className="price-description">
                  Personal sites, landing pages and business websites.
                </p>
              </div>

              <span className="price-value">From ₦250,000</span>
            </div>

            <div className="price-row">
              <div>
                <h3 className="price-name">Web applications</h3>
                <p className="price-description">
                  Products with accounts, dashboards, bookings, databases or
                  payments.
                </p>
              </div>

              <span className="price-value">From ₦750,000</span>
            </div>

            <div className="price-row">
              <div>
                <h3 className="price-name">Digital products</h3>
                <p className="price-description">
                  Larger builds where the product needs its own structure,
                  workflows and moving parts.
                </p>
              </div>

              <span className="price-value">From ₦1,500,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process">
        <div className="container">
          <div className="section-meta">
            <span>06</span>
            <span>How it usually goes</span>
          </div>

          <h2 className="section-title">
            You bring the idea. We work out the <em>rest.</em>
          </h2>

          <div className="process-grid">
            <div className="process-step">
              <span className="process-number">01</span>

              <h3>We talk about the idea</h3>

              <p>
                Tell me what you have in mind, even if you haven&apos;t
                figured everything out yet.
              </p>
            </div>

            <div className="process-step">
              <span className="process-number">02</span>

              <h3>We work out what it needs</h3>

              <p>
                We decide what belongs in the first version and what can wait.
              </p>
            </div>

            <div className="process-step">
              <span className="process-number">03</span>

              <h3>I build it</h3>

              <p>
                Design, development, database work, integrations and the
                details in between.
              </p>
            </div>

            <div className="process-step">
              <span className="process-number">04</span>

              <h3>We put it out there</h3>

              <p>
                Once everything works, I handle the deployment and hand it
                over ready to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq">
        <div className="container">
          <div className="section-meta">
            <span>07</span>
            <span>Before you ask</span>
          </div>

          <h2 className="section-title">
            A few things you might be <em>wondering.</em>
          </h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question}>
                <summary className="faq-question">
                  <span>0{index + 1}</span>

                  <span>{faq.question}</span>

                  <span className="faq-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>

                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-meta">
            <span>08</span>
            <span>Say hello</span>
          </div>

          <div className="contact-inner">
            <h2 className="contact-title">
              Have something
              <br />
              worth <em>building?</em>
            </h2>

            <div className="contact-side">
              <p>
                If you&apos;ve got an idea you&apos;ve been sitting on, or
                something that already exists but needs work, tell me about
                it.
              </p>

              <a
                href="mailto:mmesomacaleb8@gmail.com"
                className="contact-email"
              >
                mmesomacaleb8@gmail.com <span>↗</span>
              </a>

              <a
                href="https://wa.me/2349120201509"
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp"
                aria-label="Chat with Caleb on WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="whatsapp-icon"
                >
                  <path
                    fill="currentColor"
                    d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.91c0 2.1.55 4.15 1.59 5.96L.08 24l6.27-1.64a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.23-6.17-3.46-8.43ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.27C2.19 6.46 6.62 2.03 12.09 2.03c2.65 0 5.14 1.03 7.01 2.91a9.88 9.88 0 0 1 2.9 7.02c0 5.47-4.44 9.91-9.92 9.91Zm5.43-7.43c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.19-.58-.34Z"
                  />
                </svg>

                <span>WhatsApp</span>
                <span className="whatsapp-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <p>Caleb Mmesoma</p>

            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#experiments">Experiments</a>
              <a href="#contact">Contact</a>
            </div>

            <p>© 2026</p>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <a href="#top" className="back-to-top" aria-label="Back to top">
        ↑
      </a>
    </main>
  );
}