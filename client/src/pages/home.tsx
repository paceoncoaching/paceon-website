import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronUp,
  Instagram,
  MapPin,
  Mail,
  Shield,
  ClipboardList,
  Users,
  Activity,
  Flag,
  ChevronDown,
  Facebook,
  Monitor,
  BarChart3,
  Bike,
  Heart,
  Star,
  Handshake,
  Gift,
  BookOpen,
  Calendar,
  MessageCircle,
  Bell,
  Quote,
} from "lucide-react";
import logoPaceOn from "@assets/image_1770448613540_cropped.png";
import logoLeighton from "@assets/2-IMG_3191_1770257642382.jpg";
import logoJustin from "@assets/download_1770257312553.jpg";
import heroImage from "@assets/7-Photo_19-11-2024,_12_20_11_pm_1770449095941.jpg";
import offerImage from "@assets/1-IMG_2705_1770449148332.jpg";
import stepsImage from "@assets/10-Photo_12-12-2024,_11_28_31_am_1770449269730.jpg";
import { cn } from "@/lib/utils";

type SectionKey =
  | "welcome"
  | "approach"
  | "who"
  | "offer"
  | "benefits"
  | "work"
  | "community"
  | "talk";

const NAV: Array<{ key: SectionKey; label: string }> = [
  { key: "welcome", label: "Welcome" },
  { key: "approach", label: "Our Approach" },
  { key: "who", label: "Who We Are" },
  { key: "offer", label: "What We Offer" },
  { key: "benefits", label: "Athlete Benefits" },
  { key: "work", label: "How We Work" },
  { key: "community", label: "Community" },
];

function useInViewClass(selector = ".fade-up") {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!nodes.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-inview");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );

    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [selector]);
}

function useHubSpotForm() {
  useEffect(() => {
    const scriptId = "hubspot-forms-embed";

    const loadScript = () =>
      new Promise<void>((resolve, reject) => {
        const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
        if (existing) {
          resolve();
          return;
        }

        const s = document.createElement("script");
        s.id = scriptId;
        s.src = "https://js-ap1.hsforms.net/forms/embed/442585000.js";
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error("Failed to load HubSpot embed script"));
        document.body.appendChild(s);
      });

    const renderForm = async () => {
      try {
        await loadScript();

        const target = document.getElementById("hubspot-form-target");
        if (!target) return;

        target.innerHTML = "";

        const hs = (window as any).hbspt;
        if (!hs?.forms?.create) {
          target.innerHTML =
            "<div style=\"font-size:13px;color:rgba(0,0,0,.65)\">Loading contact form…</div>";
          return;
        }

        hs.forms.create({
          region: "ap1",
          portalId: "442585000",
          formId: "1c9f1023-c5a3-40a6-a7ae-0b3ad40cffb8",
          target: "#hubspot-form-target",
        });
      } catch (e) {
        const target = document.getElementById("hubspot-form-target");
        if (target) {
          target.innerHTML =
            "<div style=\"font-size:13px;color:rgba(0,0,0,.65)\">We couldn’t load the form here. Please refresh, or email <a href=\"mailto:hello@paceon.co\" style=\"text-decoration:underline\">hello@paceon.co</a>.</div>";
        }
      }
    };

    const t = window.setTimeout(renderForm, 0);
    return () => window.clearTimeout(t);
  }, []);
}

function useParallax() {
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
        for (const el of elements) {
          const speed = Number(el.dataset.parallax || "0.12");
          el.style.setProperty("--parallax-y", `${Math.min(40, y * speed)}px`);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}

function scrollToSection(id: SectionKey) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LogoMark({ subtle }: { subtle?: boolean }) {
  return (
    <div className={cn("leading-none", subtle ? "opacity-80" : "")}> 
      <div
        className={cn(
          "font-[var(--font-display)] text-[20px] tracking-[-0.02em]",
          subtle ? "text-black/80" : "text-black",
        )}
        data-testid="text-logo"
      >
        <span className="inline-block">Pace</span>
        <span className="inline-block translate-y-[8px] ml-0.5">On.</span>
      </div>
      <div
        className={cn(
          "mt-1 text-[10px] tracking-[0.28em] uppercase",
          subtle ? "text-[hsl(var(--secondary))]" : "text-[hsl(var(--secondary))]",
        )}
        data-testid="text-logo-sub"
      >
        Coaching
      </div>
    </div>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  id: SectionKey;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tone?: "light" | "offwhite";
}) {
  const bg = tone === "offwhite" ? "bg-[hsl(var(--background))]" : "bg-white";
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-28", bg)}
      aria-label={title}
      data-testid={`section-${id}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-18 sm:py-22 lg:py-26">
        <div className="fade-up">
          <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid={`text-eyebrow-${id}`}>
            {eyebrow}
          </div>
          <h2 className="mt-3 text-balance text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.02]" data-testid={`text-title-${id}`}>
            {title}
          </h2>
        </div>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  useInViewClass();
  useParallax();
  useHubSpotForm();

  const [active, setActive] = useState<SectionKey>("welcome");
  const [scrolled, setScrolled] = useState(false);
  const [coachModal, setCoachModal] = useState<null | { name: string; title: string; bio: string }>(null);

  const sectionRefs = useMemo(() => {
    const map = new Map<SectionKey, HTMLElement>();
    for (const n of NAV) {
      const el = document.getElementById(n.key);
      if (el) map.set(n.key, el);
    }
    return map;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds: SectionKey[] = ["welcome", "approach", "who", "offer", "benefits", "work", "community", "talk"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.3;
      let current: SectionKey = "welcome";
      for (const section of sections) {
        if (section.offsetTop <= scrollY) {
          current = section.id as SectionKey;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-black">
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur bg-white/78 shadow-[0_12px_40px_-34px_rgba(0,0,0,.55)] border-b border-black/5"
            : "bg-transparent",
        )}
        data-testid="header-main"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
          <a
            href="#welcome"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("welcome");
            }}
            className="group flex items-center gap-3"
            aria-label="Pace On Coaching"
            data-testid="link-logo"
          >
            <img
              src={logoPaceOn}
              alt="Pace On Coaching"
              className="h-11 w-auto"
              loading="eager"
              data-testid="img-logo"
            />
            <div className="hidden md:block text-[12px] text-black/55 leading-tight max-w-[28ch]">
              Evidence-driven coaching for endurance athletes.
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary" data-testid="nav-primary">
            {NAV.map((n) => {
              const isActive = active === n.key;
              return (
                <button
                  key={n.key}
                  onClick={() => scrollToSection(n.key)}
                  className={cn(
                    "whitespace-nowrap px-2.5 py-2 rounded-full text-[12px] transition-colors",
                    isActive
                      ? "bg-black text-white"
                      : "text-black/70 hover:text-black hover:bg-black/5",
                  )}
                  data-testid={`button-nav-${n.key}`}
                >
                  {n.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("talk")}
              className="whitespace-nowrap btn-cta hover-lift rounded-full bg-[hsl(var(--primary))] text-white px-4 py-2 text-[12px] font-semibold tracking-[-0.01em] shadow-[var(--shadow-soft)]"
              data-testid="button-start-journey"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </header>

      <main>
        <AnimatePresence>
          {coachModal ? (
            <motion.div
              className="fixed inset-0 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Coach bio"
              role="dialog"
              aria-modal="true"
              data-testid="modal-coach-bio"
            >
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setCoachModal(null)}
                data-testid="overlay-coach-bio"
              />
              <div className="absolute inset-0 p-5 sm:p-8 flex items-end sm:items-center justify-center">
                <motion.div
                  initial={{ y: 18, opacity: 0, scale: 0.98 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 10, opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.28, ease: [0.2, 0.75, 0.2, 1] }}
                  className="grain w-full max-w-2xl rounded-3xl border border-white/20 bg-white/85 backdrop-blur shadow-[0_30px_90px_-50px_rgba(0,0,0,.75)] overflow-hidden"
                  data-testid="card-coach-bio"
                >
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-coach-modal-label">
                          Coach
                        </div>
                        <div className="mt-2 font-[var(--font-display)] text-[28px] leading-[1.05]" data-testid="text-coach-modal-name">
                          {coachModal.name}
                        </div>
                        <div className="mt-1 text-[14px] text-black/70" data-testid="text-coach-modal-title">
                          {coachModal.title}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCoachModal(null)}
                        className="rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-2 text-[13px] font-semibold text-black/80 hover:bg-white transition-colors"
                        data-testid="button-close-coach-bio"
                      >
                        Close
                      </button>
                    </div>

                    <div className="mt-5 whitespace-pre-line text-[14px] leading-relaxed text-black/70" data-testid="text-coach-modal-bio">
                      {coachModal.bio}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setCoachModal(null)}
                        className="btn-cta hover-lift rounded-full bg-[hsl(var(--primary))] text-white px-5 py-2.5 text-[13px] font-semibold shadow-[var(--shadow-soft)]"
                        data-testid="button-close-coach-bio-bottom"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* HERO */}
        <section
          id="welcome"
          ref={heroRef}
          className="relative overflow-hidden scroll-mt-28"
          aria-label="Welcome"
          data-testid="section-welcome"
        >
          <div className="absolute inset-0 bg-white" />

          <div className="absolute inset-0 architectural-grid opacity-[0.45]" aria-hidden="true" />

          <div
            className="absolute -top-20 -right-16 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(closest-side, rgba(200,81,3,.22), rgba(200,81,3,0) 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-20 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(closest-side, rgba(106,113,75,.20), rgba(106,113,75,0) 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 pt-30 sm:pt-36 pb-18 sm:pb-22">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="fade-up">
                  <h1
                    className="text-balance text-[44px] sm:text-[56px] lg:text-[70px] leading-[0.95]"
                    data-testid="text-hero-heading"
                  >
                    Optimised Performance Coaching.
                  </h1>
                  <p
                    className="mt-8 max-w-[62ch] text-[15px] sm:text-[16px] leading-relaxed text-black/70"
                    data-testid="text-hero-subheading"
                  >
                    PaceOn is led by two current elite athletes, our coaching blends evidence-driven training with real world understanding of balancing life,
                    work, and the demands of endurance competition.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <button
                      onClick={() => scrollToSection("talk")}
                      className="btn-cta hover-lift rounded-full bg-[hsl(var(--primary))] text-white px-6 py-3 text-[14px] font-semibold shadow-[var(--shadow-soft)]"
                      data-testid="button-hero-cta"
                    >
                      <span className="inline-flex items-center gap-2">
                        Start Your Journey
                        <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                      </span>
                    </button>

                    <button
                      onClick={() => scrollToSection("approach")}
                      className="rounded-full border border-black/10 bg-white/60 backdrop-blur px-6 py-3 text-[14px] font-semibold text-black/80 hover:bg-white transition-colors"
                      data-testid="button-learn-approach"
                    >
                      Learn our approach
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="fade-up">
                  <div
                    className="grain rounded-3xl border border-black/10 bg-[hsl(var(--background))] shadow-[var(--shadow-card)] overflow-hidden"
                    data-testid="card-hero-image"
                  >
                    <div className="relative aspect-[5/5.5] overflow-hidden">
                      <div
                        className="absolute inset-0 parallax"
                        data-parallax="0.08"
                        style={{
                          backgroundImage:
                            `linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,0) 38%), radial-gradient(100% 120% at 10% 10%, rgba(200,81,3,.22), transparent 55%), radial-gradient(80% 80% at 85% 20%, rgba(106,113,75,.18), transparent 55%), url('${heroImage}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center 75%",
                        }}
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-white/20 to-transparent" aria-hidden="true" />

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-4 py-3">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-hero-card-eyebrow">
                                Coaching
                              </div>
                              <div className="mt-1 font-[var(--font-display)] text-[18px] leading-tight" data-testid="text-hero-card-title">
                                Structure, support, and sustainable progression.
                              </div>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center">
                              <Activity className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* VALUE PROPS */}
            <div className="mt-16 sm:mt-18">
              <div className="fade-up">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-valueprops-eyebrow">
                      What we do
                    </div>
                    <h3
                      className="mt-3 text-[26px] sm:text-[32px] leading-[1.05]"
                      data-testid="text-valueprops-title"
                    >
                      Coaching built for real life.
                    </h3>
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Monthly Coaching",
                      body:
                        "Structured training programmes with regular check-ins, plan adjustments, and messaging support. For athletes seeking expert guidance and accountability.",
                      icon: ClipboardList,
                    },
                    {
                      title: "Premium Coaching",
                      body:
                        "Fully personalised programmes with one-on-one calls, detailed analysis, and real-time adjustments. For athletes targeting competitive racing or breakthrough gains.",
                      icon: Users,
                    },
                    {
                      title: "Race Preparation",
                      body:
                        "Targeted programmes for specific events. From strategy sessions to taper planning, we prepare you to perform when it counts.",
                      icon: Flag,
                    },
                  ].map((c, idx) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.title}
                        className="fade-up hover-lift grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-[var(--shadow-card)]"
                        style={{ transitionDelay: `${idx * 70}ms` }}
                        data-testid={`card-valueprop-${idx}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div
                              className="mt-2 font-[var(--font-display)] text-[22px] leading-tight"
                              data-testid={`text-card-title-${idx}`}
                            >
                              {c.title}
                            </div>
                          </div>
                          <div className="h-11 w-11 rounded-2xl bg-black/[0.04] border border-black/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.2} />
                          </div>
                        </div>
                        <p className="mt-4 text-[14px] leading-relaxed text-black/70" data-testid={`text-card-body-${idx}`}>
                          {c.body}
                        </p>
                        <button
                          onClick={() => scrollToSection("offer")}
                          className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[hsl(var(--secondary))] hover:text-black"
                          data-testid={`button-card-learn-${idx}`}
                        >
                          Learn more <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <SectionShell
          id="approach"
          eyebrow="Our Approach"
          title="Performance through process."
          tone="offwhite"
        >
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="fade-up" data-testid="text-approach-body">
                <p className="text-[15px] leading-relaxed text-black/70">
                  Our coaching is built on experience, evidence, and honest communication. We leverage data and evidence to create structured, individualised programmes
                  that adapt as you progress. We aim to empower you through education - helping you understand not just what you're doing, but why.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-black/70">
                  Our commitment is to long-term athlete development, delivering consistent, intelligent coaching that compounds into real results over months and years.
                </p>
              </div>
              <div className="mt-8 fade-up">
                <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-[var(--shadow-card)]">
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-approach-callout-eyebrow">
                    The difference
                  </div>
                  <div className="mt-2 font-[var(--font-display)] text-[22px]" data-testid="text-approach-callout-title">
                    Consistent progress,<br />compounding results.
                  </div>
                  <div className="mt-3 text-[14px] leading-relaxed text-black/70" data-testid="text-approach-callout-body">
                    We prioritise progression you can repeat—built around your life, your work, and your capacity to recover.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Personalised Programming",
                    body:
                      "Training designed specifically for you, accounting for your experience level, physiology, and specific performance goals.",
                    icon: ClipboardList,
                  },
                  {
                    title: "Evidence & Experience",
                    body:
                      "Training informed by sports science and refined through years of coaching athletes from first-timers to national-level competitors.",
                    icon: Shield,
                  },
                  {
                    title: "Education Focused",
                    body:
                      "Knowledge empowers performance - we educate you on training principles so you execute with intention.",
                    icon: Users,
                  },
                  {
                    title: "Ongoing Support",
                    body:
                      "We're with you for the journey - ongoing dialogue, consistent feedback, and adjustments that keep training aligned with reality.",
                    icon: Activity,
                  },
                ].map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="fade-up hover-lift grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-[var(--shadow-card)]"
                      style={{ transitionDelay: `${i * 60}ms` }}
                      data-testid={`card-pillar-${i}`}
                    >
                      <div className="h-11 w-11 rounded-2xl bg-black/[0.04] border border-black/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.2} />
                      </div>
                      <div className="mt-4 font-[var(--font-display)] text-[20px]" data-testid={`text-pillar-title-${i}`}>
                        {p.title}
                      </div>
                      <div className="mt-2 text-[14px] leading-relaxed text-black/70" data-testid={`text-pillar-body-${i}`}>
                        {p.body}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionShell>

        {/* WHO WE ARE */}
        <SectionShell id="who" eyebrow="Who We Are" title="Athlete-led, evidence-driven." tone="light">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="fade-up">
                <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-mission-eyebrow">
                  Mission
                </div>
                <p className="mt-3 text-[16px] leading-relaxed text-black/70" data-testid="text-mission">
                  Empower athletes through individualised, evidence-based coaching that builds sustainable, long-term performance.
                </p>
              </div>

              <div className="mt-10 grid gap-3">
                {[
                  {
                    title: "Integrity",
                    body: "Open, honest coaching built on trust and transparency.",
                  },
                  {
                    title: "Excellence",
                    body: "Evidence-based programming refined through years of experience.",
                  },
                  {
                    title: "Empowerment",
                    body: "Knowledge and coaching that enables your long-term growth.",
                  },
                ].map((v, i) => (
                  <div
                    key={v.title}
                    className="fade-up rounded-3xl border border-black/10 bg-[hsl(var(--background))] p-5"
                    style={{ transitionDelay: `${i * 70}ms` }}
                    data-testid={`card-value-${i}`}
                  >
                    <div className="font-[var(--font-display)] text-[18px]" data-testid={`text-value-title-${i}`}>
                      {v.title}
                    </div>
                    <div className="mt-1 text-[14px] text-black/70" data-testid={`text-value-body-${i}`}>
                      {v.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Leighton Cook",
                    title: "PaceOn Co-Founder and Coach",
                    img: logoLeighton,
                    short:
                      "Professional cyclist and high-performance coach with WAIS experience—bringing a technical, athlete-first approach grounded in resilience, consistency, and genuine support.",
                    bio: `I am a professional cyclist riding for the Atom 6 Bikes – Cycleur de Luxe – Auto Stroo Continental Team, competing in UCI‑level road races. I opened the 2026 season with one of the strongest performances of my career, finishing 4th at the Australian Road Cycling National Championships while racing for the Pedal Mafia Falcons Racing Team.

Before returning to elite racing full‑time, I spent four years as an assistant coach at the Western Australian Institute of Sport (WAIS). During that time, I played a key role in developing some of Western Australia’s top emerging swimmers, contributing to the success of three athletes who qualified for the 2021 Tokyo Olympic Games. My experience at WAIS shaped my coaching philosophy: a blend of technical expertise, consistently striving to execute better, and a strong athlete‑first approach.

I am also a passionate advocate for mental health and wellbeing, particularly within the cycling community, a sport known for its physical demands and emotional challenges. I believe sustainable performance is built on a foundation of resilience, consistency, self‑awareness, and genuine support. Through both my coaching background and ongoing journey as a high‑performance athlete, I aim to create environments where athletes can grow, stay healthy, and continue to love the sport.

Today, I combine my dual experience as a current professional cyclist and high‑performance coach to offer guidance that is both technically grounded and deeply empathetic. I’m committed to helping athletes achieve their goals while continuing to enjoy their sport!`,
                  },
                  {
                    name: "Justin Ghosh",
                    title: "PaceOn Co-Founder and Coach",
                    img: logoJustin,
                    short:
                      "From age-group national titles to professional IRONMAN top-10s, Justin brings an evidence-led, athlete-first approach\u2014structured periodised programmes that keep training sustainable and engaging.",
                    bio: `My endurance journey has taken me from age group triathlon national titles to the professional ranks; top-10 finishes at professional IRONMAN events, National Road Series cycling races, and state medals in athletics and duathlon. Along the way, I've learnt what works, what doesn't, and why the difference often comes down to intelligent programming rather than just hard training.

Outside of coaching, I'm a data analyst at an AFL club, which feeds my fascination with how numbers translate into real-world performance. For me, coaching is where that analytical approach meets the art of understanding people. Yes, I build structured periodised programmes based on exercise science, but I also know that keeping athletes engaged and enjoying their training is just as critical to long-term success.

Over 5+ years, I've coached everyone from first-timers to elite-level athletes across running, cycling, and triathlon. I'm an AusTri accredited Foundation Coach with tertiary qualifications in commerce and analytics - bringing both racing credibility and evidence-based programming to every athlete I work with.`,
                  },
                ].map((c, i) => (
                  <div
                    key={c.name}
                    className="fade-up hover-lift grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur overflow-hidden shadow-[var(--shadow-card)]"
                    style={{ transitionDelay: `${i * 80}ms` }}
                    data-testid={`card-coach-${i}`}
                  >
                    <div
                      className="aspect-[4/3] bg-cover bg-[center_14%]"
                      style={{ backgroundImage: `url('${c.img}')` }}
                      aria-hidden="true"
                    />
                    <div className="p-6">
                      <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid={`text-coach-label-${i}`}>
                        Coach
                      </div>
                      <div className="mt-2 font-[var(--font-display)] text-[22px]" data-testid={`text-coach-name-${i}`}>
                        {c.name}
                      </div>
                      <div className="mt-1 text-[14px] text-black/70" data-testid={`text-coach-title-${i}`}>
                        {c.title}
                      </div>
                      <div className="mt-4 text-[13px] leading-relaxed text-black/60" data-testid={`text-coach-note-${i}`}>
                        {c.short ?? "Bio placeholder — add athlete highlights, coaching philosophy, and event focus."}
                      </div>

                      <div className="mt-5">
                        <button
                          type="button"
                          onClick={() => {
                            if (!c.bio) return;
                            setCoachModal({ name: c.name, title: c.title, bio: c.bio });
                          }}
                          className={cn(
                            "inline-flex items-center gap-2 text-[13px] font-semibold transition-colors",
                            c.bio ? "text-[hsl(var(--secondary))] hover:text-black" : "text-black/35 cursor-not-allowed",
                          )}
                          disabled={!c.bio}
                          data-testid={`button-coach-bio-${i}`}
                        >
                          Read full bio <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        {/* WHAT WE OFFER */}
        <SectionShell id="offer" eyebrow="What We Offer" title="Coaching services." tone="offwhite">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="grid gap-4">
                {[ 
                  {
                    name: "Standard Coaching",
                    price: "$180",
                    cadence: "/month",
                    desc:
                      "Structured monthly training programmes designed for committed athletes seeking expert guidance and accountability.",
                    bullets: [
                      "Personalised Training Plan — monthly periodised programme tailored to your goals and available training time",
                      "Weekly Plan Adjustments — regular modifications based on progress, recovery, and life circumstances",
                      "Email/Platform Communication — direct access for questions, feedback, and guidance",
                      "Training Plan Analysis — regular review of sessions, trends, and progress",
                    ],
                    cta: "Get started with Standard coaching",
                    tone: "standard" as const,
                  },
                  {
                    name: "Premium Coaching",
                    price: "$280",
                    cadence: "/month",
                    desc:
                      "Fully personalised training programmes with comprehensive support, detailed analysis, and real-time adjustments.",
                    bullets: [
                      "Everything in Standard — plus priority support",
                      "Unlimited Messaging Support — direct, priority access when you need it",
                      "Monthly Video Call Reviews — one-on-one progress and planning sessions",
                      "Detailed Session Feedback — in-depth analysis on key sessions",
                      "Race Strategy Planning — pacing, nutrition, and execution",
                    ],
                    cta: "Get started with Premium coaching",
                    tone: "premium" as const,
                  },
                ].map((p, i) => (
                  <div
                    key={p.name}
                    className={cn(
                      "fade-up grain rounded-3xl border border-black/10 p-7 shadow-[var(--shadow-card)]",
                      p.tone === "premium" ? "bg-white" : "bg-white/70 backdrop-blur",
                    )}
                    style={{ transitionDelay: `${i * 80}ms` }}
                    data-testid={`card-package-${i}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                      <div>
                        <div className="mt-2 font-[var(--font-display)] text-[28px] leading-[1.05]" data-testid={`text-package-name-${i}`}>
                          {p.name}
                        </div>
                        <div className="mt-3 text-[14px] text-black/70" data-testid={`text-package-desc-${i}`}>
                          {p.desc}
                        </div>
                      </div>
                      <div className="shrink-0">
                        <div className="rounded-2xl border border-black/10 bg-[hsl(var(--background))] px-5 py-4">
                          <div className="flex items-end gap-1">
                            <div className="font-[var(--font-display)] text-[34px] leading-none" data-testid={`text-package-price-${i}`}>
                              {p.price}
                            </div>
                            <div className="text-[13px] text-black/60 pb-1" data-testid={`text-package-cadence-${i}`}>
                              {p.cadence}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-2">
                      {p.bullets.map((b, bi) => (
                        <div
                          key={b}
                          className="flex items-start gap-3 text-[14px] text-black/70"
                          data-testid={`row-package-bullet-${i}-${bi}`}
                        >
                          <div className="mt-1 h-2 w-2 rounded-full bg-[hsl(var(--secondary))]" aria-hidden="true" />
                          <div>{b}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => scrollToSection("talk")}
                        className={cn(
                          "btn-cta hover-lift rounded-full px-5 py-2.5 text-[13px] font-semibold shadow-[var(--shadow-soft)]",
                          p.tone === "premium"
                            ? "bg-black text-white"
                            : "bg-[hsl(var(--primary))] text-white",
                        )}
                        data-testid={`button-package-cta-${i}`}
                      >
                        {p.cta}
                      </button>
                      <button
                        onClick={() => scrollToSection("work")}
                        className="rounded-full border border-black/10 bg-white/60 backdrop-blur px-5 py-2.5 text-[13px] font-semibold text-black/80 hover:bg-white transition-colors"
                        data-testid={`button-package-process-${i}`}
                      >
                        How it works
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 fade-up rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid="faq-offer">
                <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-faq-offer-eyebrow">
                  FAQ
                </div>
                <div className="mt-2 font-[var(--font-display)] text-[22px]" data-testid="text-faq-offer-title">
                  Common questions
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    {
                      q: "How long is the minimum commitment?",
                      a: "There's no lock-in contract, but coaching works best with a minimum 6-month commitment. Meaningful performance gains take time — structured periodisation and consistent training compound over months, not weeks. You're free to pause or cancel with one month's notice.",
                    },
                    {
                      q: "What sports do you coach?",
                      a: "We coach triathlon (all distances), road cycling, and running (5K to marathon and ultra). Our programmes can be tailored to single-sport athletes or multisport competitors preparing for specific events or long-term development.",
                    },
                    {
                      q: "How do I receive my training plan?",
                      a: "Training programmes are delivered through TrainingPeaks, an industry-standard platform that syncs with most GPS watches and cycling computers. You'll receive a weekly plan with detailed session descriptions, with updates as adjustments are made.",
                    },
                    {
                      q: "Can I switch between Standard and Premium?",
                      a: "Absolutely. If your needs change — race season approaching, work commitments increasing, or you want more support — you can upgrade or downgrade at any time with one month's notice.",
                    },
                    {
                      q: "What if I miss sessions or get injured?",
                      a: "Life happens, and training adapts. Both programmes include adjustments for missed sessions, illness, injury, or unexpected life events. The difference is Premium offers more responsive, real-time modifications, while Standard adjusts weekly.",
                    },
                    {
                      q: "Do you work with beginners?",
                      a: "Yes. We coach athletes across all experience levels, from complete beginners targeting their first event to seasoned competitors chasing podiums. Programmes are individualised to your current ability and goals.",
                    },
                    {
                      q: "How much time do I need to train?",
                      a: "This depends entirely on your goals. Most athletes we work with train 6–15 hours per week, but programmes can be designed for as little as 5 hours or as much as 20+. We build your plan around the time you realistically have available.",
                    },
                    {
                      q: "What's the difference between Standard and Premium?",
                      a: "Standard provides structured programming with weekly oversight — ideal for self-motivated athletes who execute well independently. Premium adds unlimited messaging, monthly video calls, detailed session feedback, and race strategy support — perfect for athletes wanting comprehensive, hands-on coaching.",
                    },
                    {
                      q: "Can I trial coaching before committing?",
                      a: "We offer a complimentary discovery call where we discuss your goals, experience, and whether coaching is the right fit. This isn't a sales pitch — it's an honest conversation to determine if we're aligned before you commit.",
                    },
                    {
                      q: "Do you offer in-person coaching or training camps?",
                      a: "Currently, all coaching is delivered remotely through digital platforms. However, if you're Perth-based, occasional in-person sessions or training rides can be arranged on a case-by-case basis.",
                    },
                  ].map((f, i) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-black/10 bg-[hsl(var(--background))] p-5"
                      data-testid={`faq-offer-item-${i}`}
                    >
                      <summary
                        className="flex cursor-pointer list-none items-center justify-between gap-4 select-none"
                        data-testid={`button-faq-offer-toggle-${i}`}
                      >
                        <div className="font-[var(--font-display)] text-[17px] leading-snug" data-testid={`text-faq-offer-q-${i}`}>
                          {f.q}
                        </div>
                        <div
                          className="grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-white/60 backdrop-blur transition-transform duration-200 group-open:rotate-180"
                          aria-hidden="true"
                          data-testid={`icon-faq-offer-chevron-${i}`}
                        >
                          <ChevronDown className="h-4 w-4 text-[hsl(var(--secondary))]" />
                        </div>
                      </summary>
                      <div
                        className="mt-3 text-[14px] leading-relaxed text-black/70"
                        data-testid={`text-faq-offer-a-${i}`}
                      >
                        {f.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="fade-up sticky top-24" data-testid="aside-offer">
                <div className="grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]">
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-offer-aside-eyebrow">
                    Choose your focus
                  </div>
                  <div className="mt-2 font-[var(--font-display)] text-[24px] leading-tight" data-testid="text-offer-aside-title">
                    Coaching that fits your needs.
                  </div>
                  <div className="mt-3 text-[14px] text-black/70" data-testid="text-offer-aside-body">
                    Build a base, sharpen for race day, or find structure around your schedule. We’ll match the support level to your goals and reality.
                  </div>

                  <div className="mt-6 rounded-2xl overflow-hidden border border-black/10">
                    <div
                      className="aspect-[4/3] bg-cover bg-center"
                      style={{
                        backgroundImage:
                          `linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,0) 45%), url('${offerImage}')`,
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      { label: "Remote coaching", value: "Anywhere" },
                      { label: "Primary focus", value: "Triathlon • Running • Cycling" },
                      { label: "Support", value: "Monthly or Premium" },
                    ].map((r, i) => (
                      <div
                        key={r.label}
                        className="flex items-center justify-between rounded-2xl border border-black/10 bg-[hsl(var(--background))] px-4 py-3"
                        data-testid={`row-offer-aside-${i}`}
                      >
                        <div className="text-[13px] text-black/60" data-testid={`text-offer-aside-label-${i}`}>
                          {r.label}
                        </div>
                        <div className="text-[13px] font-semibold" data-testid={`text-offer-aside-value-${i}`}>
                          {r.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollToSection("talk")}
                    className="mt-6 w-full btn-cta hover-lift rounded-full bg-[hsl(var(--primary))] text-white px-5 py-3 text-[13px] font-semibold shadow-[var(--shadow-soft)]"
                    data-testid="button-offer-aside-cta"
                  >
                    Talk to a coach
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        {/* ATHLETE BENEFITS */}
        <SectionShell id="benefits" eyebrow="Athlete Benefits" title="Tools and perks for every athlete." tone="light">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid="card-benefit-trainingpeaks">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-benefit-tp-eyebrow">
                    Platform
                  </div>
                  <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight" data-testid="text-benefit-tp-title">
                    Training Through TrainingPeaks
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center shrink-0">
                  <Monitor className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
                </div>
              </div>
              <p className="mt-3 text-[14px] text-black/70 leading-relaxed" data-testid="text-benefit-tp-body">
                Industry-standard platform used by coaches and athletes worldwide. Your structured, periodised programmes sync seamlessly with GPS watches and cycling computers.
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  { icon: ClipboardList, text: "Structured programmes with detailed session descriptions and target zones" },
                  { icon: Activity, text: "Seamless sync with Garmin, Wahoo, Polar, and Apple Watch" },
                  { icon: BarChart3, text: "Automatic upload and coach review of completed sessions" },
                  { icon: Monitor, text: "Web and mobile access — your training available anywhere" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[hsl(var(--background))] px-4 py-3" data-testid={`row-benefit-tp-${i}`}>
                    <item.icon className="h-4 w-4 mt-0.5 text-[hsl(var(--secondary))] shrink-0" strokeWidth={2.2} />
                    <span className="text-[13px] text-black/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid="card-benefit-portal">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-benefit-portal-eyebrow">
                    Coming Soon
                  </div>
                  <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight" data-testid="text-benefit-portal-title">
                    The PaceOn Portal
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center shrink-0">
                  <BookOpen className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
                </div>
              </div>
              <p className="mt-3 text-[14px] text-black/70 leading-relaxed" data-testid="text-benefit-portal-body">
                A dedicated hub for PaceOn athletes — educational resources, performance tracking, community, and everything you need in one place.
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  { icon: BookOpen, text: "Knowledge Hub — articles, podcasts, technique drills, and training glossary" },
                  { icon: BarChart3, text: "Performance Dashboards — custom reports on training load and goal progression (Premium)" },
                  { icon: Calendar, text: "Events Calendar — recommended races and training opportunities" },
                  { icon: MessageCircle, text: "Community Space — discussion forums connecting athletes" },
                  { icon: Bell, text: "Updates & Notices — coaching announcements and resources" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[hsl(var(--background))] px-4 py-3" data-testid={`row-benefit-portal-${i}`}>
                    <item.icon className="h-4 w-4 mt-0.5 text-[hsl(var(--secondary))] shrink-0" strokeWidth={2.2} />
                    <span className="text-[13px] text-black/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <div className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid="card-benefit-elite">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-benefit-elite-eyebrow">
                    Partner Discount
                  </div>
                  <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight" data-testid="text-benefit-elite-title">
                    Elite Racing Cycles
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center shrink-0">
                  <Bike className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
                </div>
              </div>
              <p className="mt-3 text-[14px] text-black/70 leading-relaxed" data-testid="text-benefit-elite-body">
                PaceOn athletes get exclusive 15% savings on accessories, apparel, and parts.
              </p>
              <div className="mt-4 text-[12px] text-black/50 italic" data-testid="text-benefit-elite-note">
                Exclusions apply: complete bikes, full groupsets, and service labour.
              </div>
            </div>

            <div className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid="card-benefit-marmion">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-benefit-marmion-eyebrow">
                    Partner Discount
                  </div>
                  <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight" data-testid="text-benefit-marmion-title">
                    Marmion Chiropractic & Massage
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center shrink-0">
                  <Heart className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
                </div>
              </div>
              <p className="mt-3 text-[14px] text-black/70 leading-relaxed" data-testid="text-benefit-marmion-body">
                Dr. Stephen Greensmith, a talented endurance athlete himself, understands what it takes to connect you to your full potential, injury-free. PaceOn athletes get an exclusive 10% discount on chiropractic and remedial massage services.
              </p>
            </div>
          </div>
        </SectionShell>

        {/* HOW WE WORK */}
        <SectionShell id="work" eyebrow="How We Work" title="Your journey with Pace On." tone="offwhite">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <div className="fade-up">
                <p className="text-[15px] leading-relaxed text-black/70" data-testid="text-work-intro">
                  A clear, repeatable process—designed to fit into your life, with communication that keeps training realistic and effective.
                </p>
              </div>

              <div className="mt-8 fade-up rounded-3xl border border-black/10 bg-[hsl(var(--background))] p-6" data-testid="card-work-callout">
                <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-work-callout-eyebrow">
                  What to expect
                </div>
                <div className="mt-2 font-[var(--font-display)] text-[22px]" data-testid="text-work-callout-title">
                  Clarity at every stage.
                </div>
                <div className="mt-3 text-[14px] text-black/70" data-testid="text-work-callout-body">
                  You’ll always know what matters this week—and why.
                </div>
              </div>

              <div
                className="mt-5 fade-up rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]"
                data-testid="faq-work"
              >
                <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-faq-work-eyebrow">
                  FAQ
                </div>
                <div className="mt-2 font-[var(--font-display)] text-[22px]" data-testid="text-faq-work-title">
                  How we work
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    {
                      q: "What happens after I sign up?",
                      a: "Within 24 hours of signing up, you'll receive a welcome email with a detailed questionnaire covering your training history, goals, available time, injury history, and current fitness. We'll then schedule a call to discuss your programme before your first training plan is delivered.",
                    },
                    {
                      q: "When will I receive my training plan?",
                      a: "Initial plans are typically delivered within 5-7 days of completing your discovery call and onboarding. Ongoing plans are generally delivered on a fortnightly basis, giving you time to review upcoming sessions and ask questions.",
                    },
                    {
                      q: "How do we communicate?",
                      a: "Standard athletes communicate primarily through email and TrainingPeaks messaging, with responses typically within 24 hours on weekdays. Premium athletes have access to unlimited messaging support via WhatsApp with priority response times plus scheduled monthly video calls.",
                    },
                    {
                      q: "How often are plans adjusted?",
                      a: "Standard plans are reviewed and adjusted weekly based on your completed sessions and feedback. Premium plans can be adjusted in real-time as circumstances change — illness, unexpected work demands, or performance breakthroughs can all trigger immediate modifications.",
                    },
                    {
                      q: "What if I can't complete a session?",
                      a: "Life happens. Simply log what you did (or didn't do) in TrainingPeaks with a brief note explaining why, and the plan will adjust accordingly. Missed sessions don't derail your programme — they inform smarter decisions about how to progress.",
                    },
                    {
                      q: "Do I need specific equipment or technology?",
                      a: "At minimum, you need a way to track your sessions — a GPS watch for running, bike computer for cycling, or smartphone app. A heart rate monitor is highly recommended. Power meters for cycling are valuable but not essential. All equipment should sync with TrainingPeaks.",
                    },
                    {
                      q: "How do you track my progress?",
                      a: "Progress is monitored through multiple indicators: completed session data (pace, power, heart rate), subjective feedback (how sessions felt), training load trends, benchmark sessions, and race results. Premium athletes also receive detailed performance reports through bespoke dashboards (coming soon).",
                    },
                    {
                      q: "What information do you need from me?",
                      a: "Honest communication is essential. We need to know how sessions felt (easy/hard/as expected), any life stressors affecting training (work, sleep, illness), and your subjective sense of fatigue and readiness. The more transparent you are, the better we can adapt your programme.",
                    },
                    {
                      q: "Can I still train with friends or groups?",
                      a: "Absolutely. Social training is valuable for motivation and enjoyment. Where possible, we structure your programme to accommodate group sessions or rides. Just let us know your regular group commitments during onboarding.",
                    },
                    {
                      q: "What happens during race week?",
                      a: "Premium athletes receive comprehensive race preparation including detailed strategy documents, pacing plans, and increased communication in the days leading up to the event. Standard athletes receive race-week guidance and modified training to ensure proper taper and readiness.",
                    },
                    {
                      q: "How do check-ins work?",
                      a: "Standard athletes have structured weekly check-ins via email or TrainingPeaks messaging. Premium athletes have monthly video calls via Teams (30-45 mins) to review progress, discuss challenges, and refine approach, plus ongoing messaging throughout the month.",
                    },
                    {
                      q: "What if I need to pause coaching?",
                      a: "You can pause or cancel anytime with one month's notice. If you need to take a break due to injury, life circumstances, or off-season rest, we can discuss pausing your subscription and resuming when you're ready to train again.",
                    },
                  ].map((f, i) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-black/10 bg-[hsl(var(--background))] p-5"
                      data-testid={`faq-work-item-${i}`}
                    >
                      <summary
                        className="flex cursor-pointer list-none items-center justify-between gap-4 select-none"
                        data-testid={`button-faq-work-toggle-${i}`}
                      >
                        <div className="font-[var(--font-display)] text-[17px] leading-snug" data-testid={`text-faq-work-q-${i}`}>
                          {f.q}
                        </div>
                        <div
                          className="grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-white/60 backdrop-blur transition-transform duration-200 group-open:rotate-180"
                          aria-hidden="true"
                          data-testid={`icon-faq-work-chevron-${i}`}
                        >
                          <ChevronDown className="h-4 w-4 text-[hsl(var(--secondary))]" />
                        </div>
                      </summary>
                      <div className="mt-3 text-[14px] leading-relaxed text-black/70" data-testid={`text-faq-work-a-${i}`}>
                        {f.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid gap-3">
                {[
                  {
                    n: "01",
                    title: "Initial Consultation",
                    body:
                      "We start with a detailed discussion about your goals, experience, available training time, and what you want to achieve.",
                  },
                  {
                    n: "02",
                    title: "Programme Design",
                    body:
                      "Your coach creates a personalised training programme built specifically for you - accounting for your physiology, lifestyle, and performance targets.",
                  },
                  {
                    n: "03",
                    title: "Regular Check-ins",
                    body:
                      "Ongoing communication ensures your training stays aligned with your progress, recovery, and life demands.",
                  },
                  {
                    n: "04",
                    title: "Analysis & Adjustment",
                    body:
                      "We continuously review your training data, provide feedback, and adjust your programme to optimise your development.",
                  },
                  {
                    n: "05",
                    title: "Race Preparation",
                    body:
                      "When race day approaches, we dial in your strategy, pacing, nutrition, and mental preparation.",
                  },
                  {
                    n: "06",
                    title: "Long-term Development",
                    body:
                      "Sustainable performance improvements compound over months and years - we're invested in your long-term success.",
                  },
                ].map((s, i) => (
                  <div
                    key={s.n}
                    className="fade-up hover-lift grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-[var(--shadow-card)]"
                    style={{ transitionDelay: `${i * 55}ms` }}
                    data-testid={`card-step-${i}`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid={`text-step-number-${i}`}>
                          {s.n}
                        </div>
                        <div className="mt-2 font-[var(--font-display)] text-[22px]" data-testid={`text-step-title-${i}`}>
                          {s.title}
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
                      </div>
                    </div>
                    <div className="mt-3 text-[14px] leading-relaxed text-black/70" data-testid={`text-step-body-${i}`}>
                      {s.body}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 fade-up rounded-3xl overflow-hidden border border-black/10 shadow-[var(--shadow-card)]">
                <div className="w-full overflow-hidden" style={{ maxHeight: '320px' }}>
                  <img
                    src={stepsImage}
                    alt="Cyclists racing in a group"
                    className="w-full h-full object-cover object-center"
                    style={{ marginTop: '-40px', marginBottom: '-40px' }}
                    data-testid="img-steps-cycling"
                  />
                </div>
              </div>

            </div>
          </div>
        </SectionShell>

        {/* COMMUNITY — TESTIMONIALS & PARTNERSHIPS */}
        <SectionShell id="community" eyebrow="Community" title="Testimonials & partnerships." tone="light">
          <div className="fade-up">
            <p className="text-[15px] leading-relaxed text-black/70 max-w-3xl" data-testid="text-community-intro">
              Hear from athletes we work with and the partners who support our community.
            </p>
          </div>

          <div className="mt-8">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-testimonials-eyebrow">
              Athlete Testimonials
            </div>
            <div className="mt-4 grid lg:grid-cols-3 gap-5">
              {[
                {
                  quote: "The structured approach and constant communication have completely changed the way I train. I've never felt more confident heading into a race.",
                  name: "Athlete testimonial",
                  sport: "Coming soon",
                },
                {
                  quote: "Having coaches who are competing at an elite level themselves makes all the difference. They understand the demands because they live them every day.",
                  name: "Athlete testimonial",
                  sport: "Coming soon",
                },
                {
                  quote: "I came to PaceOn looking for structure and accountability. What I got was a complete shift in how I approach training, recovery, and race preparation.",
                  name: "Athlete testimonial",
                  sport: "Coming soon",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-[var(--shadow-card)]"
                  style={{ transitionDelay: `${i * 55}ms` }}
                  data-testid={`card-testimonial-${i}`}
                >
                  <Quote className="h-5 w-5 text-[hsl(var(--secondary))]/40 mb-3" strokeWidth={2} />
                  <p className="text-[14px] leading-relaxed text-black/70 italic" data-testid={`text-testimonial-quote-${i}`}>
                    "{t.quote}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-black/10">
                    <div className="text-[13px] font-semibold" data-testid={`text-testimonial-name-${i}`}>{t.name}</div>
                    <div className="text-[12px] text-black/50" data-testid={`text-testimonial-sport-${i}`}>{t.sport}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-partnerships-eyebrow">
              Partnerships
            </div>
            <div className="mt-2 font-[var(--font-display)] text-[24px] leading-tight" data-testid="text-partnerships-title">
              Who we work with.
            </div>
            <div className="mt-6 grid lg:grid-cols-2 gap-6">
              <div className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid="card-partnership-falcons">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-partner-falcons-eyebrow">
                      Racing Team
                    </div>
                    <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight" data-testid="text-partner-falcons-title">
                      Falcons Pedal Mafia Racing Team
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center shrink-0">
                    <Handshake className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
                  </div>
                </div>
                <p className="mt-3 text-[14px] text-black/70 leading-relaxed" data-testid="text-partner-falcons-body">
                  Proud coaching partners of the Falcons Pedal Mafia Racing Team — supporting competitive cyclists with structured training programmes and race-day preparation.
                </p>
              </div>

              <div className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid="card-partnership-elite">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-partner-elite-eyebrow">
                      Retail Partner
                    </div>
                    <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight" data-testid="text-partner-elite-title">
                      Elite Racing Cycles
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center shrink-0">
                    <Bike className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
                  </div>
                </div>
                <p className="mt-3 text-[14px] text-black/70 leading-relaxed" data-testid="text-partner-elite-body">
                  PaceOn athletes receive exclusive discounts on accessories, apparel, and parts through our partnership with Elite Racing Cycles.
                </p>
              </div>

              <div className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid="card-partnership-marmion">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-partner-marmion-eyebrow">
                      Health Partner
                    </div>
                    <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight" data-testid="text-partner-marmion-title">
                      Marmion Chiropractic & Massage
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center shrink-0">
                    <Heart className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
                  </div>
                </div>
                <p className="mt-3 text-[14px] text-black/70 leading-relaxed" data-testid="text-partner-marmion-body">
                  Dr. Stephen Greensmith understands what it takes to keep endurance athletes performing at their best. PaceOn athletes enjoy exclusive discounts on chiropractic and remedial massage.
                </p>
              </div>
            </div>
          </div>
        </SectionShell>

        {/* LET'S TALK */}
        <SectionShell id="talk" eyebrow="Let’s Talk" title="Start your journey." tone="offwhite">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="fade-up">
              <p className="text-[15px] leading-relaxed text-black/70" data-testid="text-talk-body-1">
                Ready to take your performance to the next level? Whether you're preparing for your first event or chasing competitive goals, we're here to help you achieve sustainable, long-term performance gains.
              </p>
            </div>
            <div className="fade-up">
              <p className="text-[15px] leading-relaxed text-black/70" data-testid="text-talk-body-2">
                Get in touch to discuss your goals and find out which coaching package is right for you.
              </p>
            </div>
          </div>

          <div className="mt-10 fade-up rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-[var(--shadow-card)]" data-testid="card-hubspot">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-hubspot-eyebrow">
                  Contact
                </div>
                <div className="mt-2 font-[var(--font-display)] text-[24px] leading-tight" data-testid="text-hubspot-title">
                  Ready to elevate your performance?
                </div>
                <div className="mt-3 text-[14px] text-black/70" data-testid="text-hubspot-body">
                  Share your sport, experience level, and what you're aiming for. We'll respond with a clear next step.
                </div>
              </div>
              <div className="h-11 w-11 rounded-2xl bg-black/[0.04] border border-black/10 flex items-center justify-center" data-testid="icon-hubspot">
                <Mail className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.2} />
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-black/10 bg-[hsl(var(--background))] p-5" data-testid="hubspot-form">
              <div id="hubspot-form-target" data-testid="embed-hubspot-form" />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-14 pt-10 pb-24 lg:pb-0 border-t border-black/10">
            <div className="mx-auto max-w-6xl">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <img
                    src={logoPaceOn}
                    alt="Pace On Coaching"
                    className="h-10 w-auto opacity-85"
                    loading="lazy"
                    data-testid="img-footer-logo"
                  />
                  <div className="mt-4 text-[13px] text-black/60 max-w-[42ch]" data-testid="text-footer-blurb">
                    Evidence-driven performance coaching. Built for athletes balancing ambition with life.
                  </div>
                  <div className="mt-4 text-[12px] text-black/55" data-testid="text-footer-legal">
                    © {new Date().getFullYear()} PaceOn • Privacy Policy • Terms
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="grid grid-cols-2 gap-4">
                    {NAV.map((n) => (
                      <button
                        key={n.key}
                        onClick={() => scrollToSection(n.key)}
                        className="text-left text-[13px] text-black/70 hover:text-black"
                        data-testid={`button-footer-nav-${n.key}`}
                      >
                        {n.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-footer-social-eyebrow">
                    Social
                  </div>
                  <div className="mt-3 grid gap-2">
                    {[
                      { label: "Instagram", id: "instagram", icon: Instagram },
                      { label: "Facebook", id: "facebook", icon: Facebook },
                      { label: "Strava", id: "strava", icon: Activity },
                    ].map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.id}
                          href="#"
                          className="inline-flex items-center justify-between rounded-2xl border border-black/10 bg-white/60 backdrop-blur px-4 py-3 text-[13px] text-black/70 hover:bg-white transition-colors"
                          data-testid={`link-social-${s.id}`}
                        >
                          <span className="inline-flex items-center gap-2">
                            <Icon className="h-4 w-4 text-[hsl(var(--secondary))]" strokeWidth={2.2} aria-hidden="true" />
                            <span>{s.label}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 text-black/40" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>
      </main>

      {/* Mobile nav */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-50" data-testid="mobile-nav">
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="grain rounded-2xl border border-black/10 bg-white/78 backdrop-blur shadow-[0_16px_50px_-35px_rgba(0,0,0,.6)] p-2">
            <div className="grid grid-cols-4 gap-1">
              {[
                { key: "welcome" as SectionKey, label: "Home" },
                { key: "approach" as SectionKey, label: "Approach" },
                { key: "who" as SectionKey, label: "Team" },
                { key: "offer" as SectionKey, label: "Programs" },
                { key: "benefits" as SectionKey, label: "Benefits" },
                { key: "work" as SectionKey, label: "Process" },
                { key: "community" as SectionKey, label: "Community" },
                { key: "talk" as SectionKey, label: "Contact" },
              ].map((n) => {
                const isActive = active === n.key;
                return (
                  <button
                    key={n.key}
                    onClick={() => scrollToSection(n.key)}
                    className={cn(
                      "py-2.5 rounded-xl text-[12px] transition-colors",
                      isActive ? "bg-black text-white" : "text-black/65 hover:bg-black/5",
                    )}
                    data-testid={`button-mobile-nav-${n.key}`}
                  >
                    {n.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Page transition */}
      <AnimatePresence>
        <motion.div
          key="wipe"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          className="pointer-events-none fixed inset-0 bg-white"
        />
      </AnimatePresence>
    </div>
  );
}
