import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const APPLY_URL = "https://forms.gle/6En9kywG3kDdhnFP6";
const CONTACT_URL =
  "mailto:marketing@scoopic.ai?subject=Scoopic%20Campus%20Ambassador%20Program";

const navItems = [
  { label: "What is Scoopic", href: "#scoopic" },
  { label: "Program", href: "#program" },
  { label: "Ambassadors", href: "#role" },
  { label: "FAQ", href: "#faq" }
];

const productPoints = [
  {
    title: "Built for close friends",
    body: "The best Scoopic moments feel like they belong to THE group chat."
  },
  {
    title: "Everyone gets a puppy",
    body: "Your paparazzi puppy decodes your camera roll and discovers what makes you YOU."
  },
  {
    title: "Your camera roll has lore",
    body: "Scoopic turns your everyday moments into funny, surprising stories worth sharing."
  }
];

const fitGroups = [
  "Currently enrolled at a U.S. college or university.",
  "Authorized to perform paid work in the U.S. for at least one academic semester.",
  "Well connected across campus communities and comfortable building new relationships.",
  "Reliable, organized, and able to commit at least 1-5 hours per week."
];

const roleItems = [
  "Build a campus promotion strategy around your school, student culture, and event calendar.",
  "Connect with fraternities, sororities, and other student organizations to introduce Scoopic and build partnerships.",
  "Host Scoopic events and parties, such as Greek-life mixers, philanthropy events, and game-day or tailgate activations."
];

const faqs = [
  {
    q: "Do I have to be in Greek Life?",
    a: "No. Greek Life experience can help, but it is not required. We welcome students who are well connected on campus and comfortable building local partnerships."
  },
  {
    q: "How much time does it take?",
    a: "Plan for at least 1-5 hours per week. If you choose to run more activations and put in more time, you will have more opportunities to earn."
  },
  {
    q: "Do I have to organize a separate Scoopic party?",
    a: "No. The goal is to bring Scoopic into parties, mixers, philanthropy events, and other gatherings that are already happening."
  },
  {
    q: "How do I get paid?",
    a: "Payments are sent every two weeks. Your compensation is determined by the type of activation and how well it performs."
  },
  {
    q: "Do event expenses come out of my pay?",
    a: "No. Approved expenses are reimbursed separately when the budget was approved in advance and valid receipts are submitted."
  },
  {
    q: "Can there be more than one ambassador at my school?",
    a: "Yes. Larger and more socially active campuses may have multiple ambassadors, ideally from different Greek organizations."
  },
  {
    q: "How long does the program last?",
    a: "The program runs by academic semester. Strong ambassadors may be invited to continue for the following semester."
  }
];

function App() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(() => new Set());
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const inlineButtons = Array.from(
        document.querySelectorAll<HTMLElement>(".inline-apply")
      );
      const inlineApplyVisible = inlineButtons.some((button) => {
        const rect = button.getBoundingClientRect();
        return (
          rect.width > 0 &&
          rect.height > 0 &&
          rect.bottom > 12 &&
          rect.top < window.innerHeight - 12 &&
          rect.right > 0 &&
          rect.left < window.innerWidth
        );
      });
      setShowFloatingCta(!inlineApplyVisible);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero section" id="top">
          <div className="breathing-layer" />
          <div className="hero-shell">
          <div className="hero-copy">
            <h1 className="hero-program-title">
              Scoopic Campus Ambassador Program
            </h1>
            <p className="hero-tagline">Bring Scoopic Into Greek Life</p>
            <p className="hero-lede">
              Introduce Scoopic inside your chapter, run simple campus
              activations, and get paid for verified student growth.
              </p>
              <div className="hero-actions">
                <a className="primary-cta inline-apply" href={APPLY_URL} target="_blank" rel="noreferrer">
                  Apply Now <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-label="Scoopic app preview">
              <PhoneFrame image="/assets/app-pup.png" className="phone phone-left" eager />
              <PhoneFrame
                image="/assets/app-feed-new.webp"
                className="phone phone-main"
                width={804}
                height={1748}
                priority
              />
              <PhoneFrame image="/assets/app-grid.png" className="phone phone-right" eager />
            </div>
          </div>
        </section>

        <section className="section product-section" id="scoopic">
          <div className="section-shell product-shell">
            <div className="section-heading">
              <img className="heading-pup" src="/assets/pup-green-steam.png" alt="" loading="lazy" decoding="async" />
              <h2>What is Scoopic?</h2>
            </div>
            <div className="product-layout">
              <div className="product-content">
                <p className="product-intro">
                  At Scoopic, you&apos;ll unbox a personal paparazzi puppy that turns
                  your camera roll moments into playful stories, inside jokes, and
                  memories to share with your people.
                </p>
                <ul className="point-list product-prose">
                  {productPoints.map((point) => (
                    <li key={point.title}>
                      <strong>{point.title}.</strong> {point.body}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-phone-wrap">
                <PhoneFrame image="/assets/app-story.png" className="product-phone" />
              </div>
            </div>
          </div>
        </section>

        <section className="section program-section" id="program">
          <div className="section-shell compact-shell">
            <div className="section-heading">
              <img className="heading-pup pink" src="/assets/pup-pink-main.png" alt="" loading="lazy" decoding="async" />
              <h2>Who We&apos;re Looking For</h2>
            </div>
            <ul className="point-list fit-prose">
              {fitGroups.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section role-section" id="role">
          <div className="section-shell compact-shell">
            <div className="section-heading">
              <img className="heading-pup blue" src="/assets/decor-pup-blue.png" alt="" loading="lazy" decoding="async" />
              <h2>What You&apos;ll Do</h2>
            </div>
            <div className="role-layout">
      <article className="role-card">
        <ul className="point-list role-prose">
          {roleItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <div className="section-heading earnings-heading">
        <img className="heading-pup" src="/assets/pup-brown-run.png" alt="" loading="lazy" decoding="async" />
        <h2>What You&apos;ll Get</h2>
      </div>
      <article className="earnings-strip">
        <strong>$200–$2,000/month</strong>
        <span className="earnings-note">Based on your results</span>
      </article>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-shell compact-shell">
            <div className="section-heading centered">
              <img className="heading-pup faq-pup" src="/assets/decor-pup-purple.png" alt="" loading="lazy" decoding="async" />
              <h2>FAQ</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) =>
                renderFaq(faq, index, openFaqs, setOpenFaqs)
              )}
            </div>
          </div>
        </section>

        <section className="section final-section" id="apply">
          <div className="section-shell final-shell">
            <img
              className="lineup"
              src="/assets/ip-combo-lineup-full-transparent.webp"
              width="1800"
              height="652"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <h2>Ready to Join Scoopic?</h2>
            <p className="final-subhead">Turn your Greek Life connections into real campus growth.</p>
            <a className="primary-cta inline-apply final-cta" href={APPLY_URL} target="_blank" rel="noreferrer">
              Apply Now <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <a
        className={`floating-apply ${showFloatingCta ? "visible" : ""}`}
        href={APPLY_URL}
        target="_blank"
        rel="noreferrer"
      >
        Apply Now <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="https://scoopic.ai/" target="_blank" rel="noreferrer">
        <img src="/assets/scoopic-logo.png" width="44" height="44" alt="Scoopic" decoding="async" />
        <span>Scoopic</span>
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="contact-button" href={CONTACT_URL}>
        Contact us <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

function PhoneFrame({
  image,
  className,
  width = 402,
  height = 874,
  eager = false,
  priority = false
}: {
  image: string;
  className?: string;
  width?: number;
  height?: number;
  eager?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`phone-frame ${className ?? ""}`}>
      <img
        src={image}
        width={width}
        height={height}
        alt=""
        loading={eager || priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </div>
  );
}

function renderFaq(
  faq: { q: string; a: string },
  index: number,
  openFaqs: Set<number>,
  setOpenFaqs: React.Dispatch<React.SetStateAction<Set<number>>>
) {
  const open = openFaqs.has(index);
  return (
    <article className={`faq-item ${open ? "open" : ""}`} key={faq.q}>
      <button
        type="button"
        onClick={() =>
          setOpenFaqs((current) => {
            const next = new Set(current);
            if (next.has(index)) {
              next.delete(index);
            } else {
              next.add(index);
            }
            return next;
          })
        }
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="faq-bullet" aria-hidden="true" />
        <span className="faq-question-text">{faq.q}</span>
        <strong>{open ? "-" : "+"}</strong>
      </button>
      {open ? <p id={`faq-answer-${index}`}>{faq.a}</p> : null}
    </article>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
