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
            "<div style=\"font-size:13px;color:rgba(0,0,0,.65)\">We couldn't load the form here. Please refresh, or email <a href=\"mailto:hello@paceon.co\" style=\"text-decoration:underline\">hello@paceon.co</a>.</div>";
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
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const id = e.target.id as SectionKey;
            setActive(id);
          }
        }
      },
      { threshold: 0.5 },
    );

    sectionRefs.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionRefs]);

  return (
    <div className="relative bg-white min-h-screen">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/78 backdrop-blur border-b border-black/10 shadow-[0_5px_25px_-13px_rgba(0,0,0,.12)]" : "bg-transparent",
        )}
        data-testid="header"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="flex h-18 sm:h-20 items-center justify-between">
            <button onClick={() => scrollToSection("welcome")} className="shrink-0" data-testid="button-logo">
              <LogoMark subtle={!scrolled} />
            </button>

            <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
              {NAV.map((n) => {
                const isActive = active === n.key;
                return (
                  <button
                    key={n.key}
                    onClick={() => scrollToSection(n.key)}
                    className={cn(
                      "px-4 py-2 text-[13px] tracking-tight rounded-xl transition-all",
                      isActive ? "bg-black text-white" : "text-black/65 hover:bg-black/5",
                    )}
                    data-testid={`button-nav-${n.key}`}
                  >
                    {n.label}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => scrollToSection("talk")}
              className="px-5 py-2.5 bg-black text-white text-[13px] tracking-tight rounded-xl hover:bg-black/90 transition-colors"
              data-testid="button-cta"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* WELCOME */}
        <SectionShell id="welcome" title="Optimised Performance Coaching.">
          <div className="relative">
            <div
              className="absolute -inset-6 sm:-inset-10 opacity-[0.015] bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="fade-up">
                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-black/70" data-testid="text-welcome-body">
                    PaceOn is led by two current elite athletes, our coaching blends evidence-driven training with real world understanding of balancing life, work, and the demands of endurance competition.
                  </p>
                  <button
                    onClick={() => scrollToSection("talk")}
                    className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white text-[14px] rounded-xl hover:bg-black/90 transition-colors"
                    data-testid="button-welcome-cta"
                  >
                    <span>Start Your Journey</span>
                    <ArrowRight className="h-4 w-4" strokeWidth={2.3} />
                  </button>
                </div>

                <div className="fade-up relative" data-parallax="0.06">
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-black/10 shadow-[var(--shadow-card)]">
                    <img
                      src={heroImage}
                      alt="Elite athlete training"
                      className="h-full w-full object-cover"
                      loading="eager"
                      data-testid="img-hero"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16 sm:mt-20 grid sm:grid-cols-3 gap-5" data-testid="value-props">
                {[
                  {
                    id: "monthly",
                    title: "Monthly Coaching",
                    body: "Structured training programmes with regular check-ins, plan adjustments, and messaging support. For athletes seeking expert guidance and accountability.",
                  },
                  {
                    id: "premium",
                    title: "Premium Coaching",
                    body: "Fully personalised programmes with one-on-one calls, detailed analysis, and real-time adjustments. For athletes targeting competitive racing or breakthrough gains.",
                  },
                  {
                    id: "race",
                    title: "Race Preparation",
                    body: "Targeted programmes for specific events. From strategy sessions to taper planning, we prepare you to perform when it counts.",
                  },
                ].map((v) => (
                  <div
                    key={v.id}
                    className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
                    data-testid={`card-value-${v.id}`}
                  >
                    <div className="font-[var(--font-display)] text-[20px] leading-tight" data-testid={`text-value-title-${v.id}`}>
                      {v.title}
                    </div>
                    <p className="mt-3 text-[14px] text-black/70 leading-relaxed" data-testid={`text-value-body-${v.id}`}>
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        {/* OUR APPROACH */}
        <SectionShell id="approach" eyebrow="Our Approach" title="Performance through process." tone="offwhite">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 fade-up">
              <p className="text-[15px] leading-relaxed text-black/70" data-testid="text-approach-body">
                Our coaching is built on experience, evidence, and honest communication. We leverage data and evidence to create structured, individualised programmes that adapt as you progress. We aim to empower you through education - helping you understand not just what you're doing, but why. Our commitment is to long-term athlete development, delivering consistent, intelligent coaching that compounds into real results over months and years.
              </p>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
              {[
                {
                  id: "personalised",
                  icon: Users,
                  title: "Personalised Programming",
                  body: "Training designed specifically for you, accounting for your experience level, physiology, and specific performance goals.",
                },
                {
                  id: "evidence",
                  icon: BarChart3,
                  title: "Evidence & Experience",
                  body: "Training informed by sports science and refined through years of coaching athletes from first-timers to national-level competitors.",
                },
                {
                  id: "education",
                  icon: BookOpen,
                  title: "Education Focused",
                  body: "Knowledge empowers performance - we educate you on training principles so you execute with intention.",
                },
                {
                  id: "support",
                  icon: Handshake,
                  title: "Ongoing Support",
                  body: "We're with you for the journey - ongoing dialogue, consistent feedback, and adjustments that keep training aligned with reality.",
                },
              ].map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.id} className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid={`card-pillar-${p.id}`}>
                    <div className="h-11 w-11 rounded-2xl bg-black/[0.04] border border-black/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.2} aria-hidden="true" />
                    </div>
                    <div className="mt-4 font-[var(--font-display)] text-[18px] leading-tight" data-testid={`text-pillar-title-${p.id}`}>
                      {p.title}
                    </div>
                    <p className="mt-2 text-[14px] text-black/70 leading-relaxed" data-testid={`text-pillar-body-${p.id}`}>
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionShell>

        {/* WHO WE ARE */}
        <SectionShell id="who" eyebrow="Who We Are" title="Your coaches.">
          <div className="fade-up max-w-3xl">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-mission-eyebrow">
              Mission
            </div>
            <p className="mt-3 text-[18px] sm:text-[20px] font-[var(--font-display)] leading-snug" data-testid="text-mission-body">
              Empower athletes through individualised, evidence-based coaching that builds sustainable, long-term performance.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-5" data-testid="values">
            {[
              { id: "integrity", icon: Shield, title: "Integrity", body: "Open, honest coaching built on trust and transparency." },
              { id: "excellence", icon: Star, title: "Excellence", body: "Evidence-based programming refined through years of experience." },
              { id: "empowerment", icon: Gift, title: "Empowerment", body: "Knowledge and coaching that enables your long-term growth." },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.id} className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid={`card-value-${v.id}`}>
                  <div className="h-11 w-11 rounded-2xl bg-black/[0.04] border border-black/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <div className="mt-4 font-[var(--font-display)] text-[18px] leading-tight" data-testid={`text-value-title-${v.id}`}>
                    {v.title}
                  </div>
                  <p className="mt-2 text-[14px] text-black/70 leading-relaxed" data-testid={`text-value-body-${v.id}`}>
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Leighton Taylor",
                title: "Co-Founder & Head Coach",
                bio: "Current elite triathlete competing at 70.3 & 140.6 distances. Leighton brings technical precision, structured programming, and years of experience balancing elite training with career demands.",
                img: logoLeighton,
              },
              {
                name: "Justin Tamsett",
                title: "Co-Founder & Head Coach",
                bio: "Former professional cyclist and current elite age-group triathlete. Justin combines decades of competitive endurance sport with deep expertise in periodisation, race strategy, and athlete development.",
                img: logoJustin,
              },
            ].map((c) => (
              <div
                key={c.name}
                className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)] cursor-pointer hover:shadow-[var(--shadow-card-hover)] transition-shadow"
                onClick={() => setCoachModal(c)}
                data-testid={`card-coach-${c.name.toLowerCase().replace(" ", "-")}`}
              >
                <div className="flex items-start gap-5">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden border border-black/10 shrink-0">
                    <img src={c.img} alt={c.name} className="h-full w-full object-cover" loading="lazy" data-testid={`img-coach-${c.name.toLowerCase().replace(" ", "-")}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-[var(--font-display)] text-[20px] leading-tight" data-testid={`text-coach-name-${c.name.toLowerCase().replace(" ", "-")}`}>
                      {c.name}
                    </div>
                    <div className="mt-1 text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid={`text-coach-title-${c.name.toLowerCase().replace(" ", "-")}`}>
                      {c.title}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[14px] text-black/70 leading-relaxed" data-testid={`text-coach-bio-${c.name.toLowerCase().replace(" ", "-")}`}>
                  {c.bio}
                </p>
              </div>
            ))}
          </div>
        </SectionShell>

        {/* WHAT WE OFFER */}
        <SectionShell id="offer" eyebrow="What We Offer" title="Coaching packages." tone="offwhite">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Standard */}
            <div className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 shadow-[var(--shadow-card)]" data-testid="card-package-standard">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-package-standard-eyebrow">
                    Standard
                  </div>
                  <div className="mt-2 font-[var(--font-display)] text-[28px] leading-tight" data-testid="text-package-standard-title">
                    Monthly Coaching
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-[var(--font-display)] text-[32px] leading-none" data-testid="text-package-standard-price">
                    $180
                  </div>
                  <div className="mt-1 text-[12px] text-black/60" data-testid="text-package-standard-period">
                    / month
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[14px] text-black/70 leading-relaxed" data-testid="text-package-standard-desc">
                Structured monthly training programmes designed for committed athletes seeking expert guidance and accountability. Standard coaching suits self-motivated athletes who want evidence-based programming with regular oversight but don't require daily interaction or real-time adjustments. Through intelligent periodisation and coaching accountability, you'll achieve consistent progression toward your goals—whether that's completing your first event, setting a new PB, or building a sustainable training foundation that delivers results month after month.
              </p>

              <div className="mt-6 space-y-3" data-testid="list-package-standard">
                {[
                  "Personalised Training Plan – Monthly periodised programme tailored to your goals, experience level, and available training time across triathlon, running, or cycling",
                  "Weekly Plan Adjustments – Regular modifications based on your progress, recovery, and life circumstances to keep training effective and sustainable",
                  "Email/Platform Communication – Direct access to your coach for questions, feedback, and guidance throughout the month",
                  "Training Plan Analysis – Regular review of your completed sessions, trends, and progress to inform ongoing programming decisions",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-[13px]" data-testid={`item-package-standard-${i}`}>
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--secondary))] shrink-0" aria-hidden="true" />
                    <div className="text-black/70 leading-relaxed">{f}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("talk")}
                className="mt-7 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white text-[14px] rounded-xl hover:bg-black/90 transition-colors"
                data-testid="button-package-standard-cta"
              >
                <span>Get started with Standard coaching</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2.3} />
              </button>
            </div>

            {/* Premium */}
            <div className="fade-up grain rounded-3xl border-2 border-black bg-white/70 backdrop-blur p-8 shadow-[var(--shadow-card-hover)]" data-testid="card-package-premium">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-package-premium-eyebrow">
                    Premium
                  </div>
                  <div className="mt-2 font-[var(--font-display)] text-[28px] leading-tight" data-testid="text-package-premium-title">
                    Premium Coaching
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-[var(--font-display)] text-[32px] leading-none" data-testid="text-package-premium-price">
                    $280
                  </div>
                  <div className="mt-1 text-[12px] text-black/60" data-testid="text-package-premium-period">
                    / month
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[14px] text-black/70 leading-relaxed" data-testid="text-package-premium-desc">
                Fully personalised training programmes with comprehensive support, detailed analysis, and real-time adjustments for athletes targeting competitive racing or breakthrough performance gains. Premium coaching is designed for athletes pursuing specific competitive goals, significant performance improvements, or those needing comprehensive support to balance demanding training with work and life. Through highly individualised programming, responsive coaching, strategic race preparation, and priority support, you'll achieve maximum performance gains and execute at your highest level consistently.
              </p>

              <div className="mt-6 space-y-3" data-testid="list-package-premium">
                {[
                  "Everything in Standard – All the structure, planning, and analysis of our Standard tier, plus;",
                  "Unlimited Messaging Support – Direct, priority access to your coach whenever you need guidance, feedback, or adjustments",
                  "Monthly Video Call Reviews – One-on-one video sessions to discuss progress, address challenges, review data, and refine your approach",
                  "Detailed Session Feedback – In-depth analysis and commentary on key sessions, helping you understand your performance and development",
                  "Race Strategy Planning – Pre-race preparation including pacing strategies, nutrition plans, mental preparation, and tactical execution guidance",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-[13px]" data-testid={`item-package-premium-${i}`}>
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-black shrink-0" aria-hidden="true" />
                    <div className="text-black/70 leading-relaxed">{f}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("talk")}
                className="mt-7 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white text-[14px] rounded-xl hover:bg-black/90 transition-colors"
                data-testid="button-package-premium-cta"
              >
                <span>Get started with Premium coaching</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2.3} />
              </button>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12 fade-up">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-faq-offer-eyebrow">
              FAQ
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {[
                {
                  q: "Can I switch between Standard and Premium coaching?",
                  a: "Yes, you can upgrade or adjust your coaching tier at any time to suit your changing goals and needs.",
                },
                {
                  q: "What sports do you coach?",
                  a: "We specialise in triathlon, running, and cycling coaching for athletes of all levels.",
                },
                {
                  q: "Do I need to use specific training platforms?",
                  a: "We work with most major training platforms including TrainingPeaks, Final Surge, and others. We'll discuss the best option for you.",
                },
                {
                  q: "How quickly will I see results?",
                  a: "Most athletes begin to see measurable improvements within 8-12 weeks, with significant gains developing over 6-12 months of consistent training.",
                },
                {
                  q: "What if I need to pause my coaching?",
                  a: "Life happens. We offer flexible pausing options - just let us know and we'll work with you.",
                },
                {
                  q: "Is there a minimum commitment period?",
                  a: "We work on a month-to-month basis with no lock-in contracts, though we recommend at least 3-6 months to achieve meaningful performance gains.",
                },
              ].map((faq, i) => (
                <div key={i} className="grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-[var(--shadow-card)]" data-testid={`card-faq-offer-${i}`}>
                  <div className="font-[var(--font-display)] text-[16px] leading-tight" data-testid={`text-faq-offer-q-${i}`}>
                    {faq.q}
                  </div>
                  <p className="mt-2 text-[13px] text-black/70 leading-relaxed" data-testid={`text-faq-offer-a-${i}`}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        {/* ATHLETE BENEFITS */}
        <SectionShell id="benefits" eyebrow="Athlete Benefits" title="More than coaching.">
          <div className="fade-up max-w-2xl">
            <p className="text-[15px] leading-relaxed text-black/70" data-testid="text-benefits-body">
              PaceOn athletes gain access to exclusive partnerships and community benefits designed to support your training, recovery, and performance goals.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              {
                id: "community",
                icon: Users,
                title: "Private Athlete Community",
                body: "Connect with other PaceOn athletes, share training insights, celebrate wins, and find training partners through our exclusive Slack community.",
              },
              {
                id: "sessions",
                icon: Calendar,
                title: "Group Training Sessions",
                body: "Join regular group training sessions and social rides/runs. Build camaraderie, push your limits, and train alongside athletes pursuing similar goals.",
              },
              {
                id: "knowledge",
                icon: BookOpen,
                title: "Knowledge Base Access",
                body: "Comprehensive library of training resources, technique guides, nutrition strategies, and recovery protocols to support your development.",
              },
              {
                id: "support",
                icon: MessageCircle,
                title: "Priority Support",
                body: "Direct access to your coach plus community support from fellow athletes navigating similar training challenges and race preparation.",
              },
            ].map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.id} className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid={`card-benefit-${b.id}`}>
                  <div className="h-11 w-11 rounded-2xl bg-black/[0.04] border border-black/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <div className="mt-4 font-[var(--font-display)] text-[18px] leading-tight" data-testid={`text-benefit-title-${b.id}`}>
                    {b.title}
                  </div>
                  <p className="mt-2 text-[14px] text-black/70 leading-relaxed" data-testid={`text-benefit-body-${b.id}`}>
                    {b.body}
                  </p>
                </div>
              );
            })}
          </div>
        </SectionShell>

        {/* HOW WE WORK */}
        <SectionShell id="work" eyebrow="How We Work" title="Your journey with PaceOn." tone="offwhite">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="fade-up" data-parallax="0.04">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-black/10 shadow-[var(--shadow-card)]">
                <img
                  src={stepsImage}
                  alt="Athlete in training"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  data-testid="img-work"
                />
              </div>
            </div>

            <div className="space-y-6">
              {[
                { step: "1", title: "Initial Consultation", body: "We start with a detailed discussion about your goals, experience, available training time, and what you want to achieve." },
                { step: "2", title: "Programme Design", body: "Your coach creates a personalised training programme built specifically for you - accounting for your physiology, lifestyle, and performance targets." },
                { step: "3", title: "Regular Check-ins", body: "Ongoing communication ensures your training stays aligned with your progress, recovery, and life demands." },
                { step: "4", title: "Analysis & Adjustment", body: "We continuously review your training data, provide feedback, and adjust your programme to optimise your development." },
                { step: "5", title: "Race Preparation", body: "When race day approaches, we dial in your strategy, pacing, nutrition, and mental preparation." },
                { step: "6", title: "Long-term Development", body: "Sustainable performance improvements compound over months and years - we're invested in your long-term success." },
              ].map((s) => (
                <div key={s.step} className="fade-up flex items-start gap-4" data-testid={`step-${s.step}`}>
                  <div className="h-10 w-10 rounded-2xl bg-black text-white flex items-center justify-center font-[var(--font-display)] text-[16px] shrink-0" data-testid={`step-number-${s.step}`}>
                    {s.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-[var(--font-display)] text-[18px] leading-tight" data-testid={`step-title-${s.step}`}>
                      {s.title}
                    </div>
                    <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed" data-testid={`step-body-${s.step}`}>
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 fade-up">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-faq-work-eyebrow">
              FAQ
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {[
                {
                  q: "How often will I communicate with my coach?",
                  a: "Standard athletes have regular email/platform access, while Premium athletes have unlimited messaging and monthly video calls.",
                },
                {
                  q: "What happens if I miss sessions or need to adjust my plan?",
                  a: "Real life takes priority. We'll adjust your programme to accommodate illness, work demands, family commitments, or unexpected circumstances.",
                },
                {
                  q: "How do you handle training during injuries?",
                  a: "We work with you to modify training appropriately, communicate with your healthcare providers as needed, and focus on what you can do safely.",
                },
                {
                  q: "Do you provide nutrition guidance?",
                  a: "We provide sport nutrition guidance specific to training and racing. For complex nutritional needs, we can refer you to accredited sports dietitians.",
                },
                {
                  q: "Can you coach me remotely?",
                  a: "Yes, all our coaching is conducted remotely, allowing us to work with athletes anywhere in Australia and internationally.",
                },
                {
                  q: "What experience level do I need?",
                  a: "We coach everyone from complete beginners to national-level competitors. Your programme is designed specifically for your current level and goals.",
                },
              ].map((faq, i) => (
                <div key={i} className="grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-[var(--shadow-card)]" data-testid={`card-faq-work-${i}`}>
                  <div className="font-[var(--font-display)] text-[16px] leading-tight" data-testid={`text-faq-work-q-${i}`}>
                    {faq.q}
                  </div>
                  <p className="mt-2 text-[13px] text-black/70 leading-relaxed" data-testid={`text-faq-work-a-${i}`}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        {/* COMMUNITY */}
        <SectionShell id="community" eyebrow="Community" title="Our partnerships.">
          <div className="fade-up max-w-2xl">
            <p className="text-[15px] leading-relaxed text-black/70" data-testid="text-community-body">
              We partner with organisations that share our commitment to athlete development, performance excellence, and community support.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="fade-up grain rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-7 shadow-[var(--shadow-card)]" data-testid="card-partnership-falcons">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.28em] text-[hsl(var(--secondary))]" data-testid="text-partner-falcons-eyebrow">
                      Racing Partner
                    </div>
                    <div className="mt-2 font-[var(--font-display)] text-[22px] leading-tight" data-testid="text-partner-falcons-title">
                      Falcons Pedal Mafia Racing Team
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center shrink-0">
                    <Flag className="h-5 w-5 text-[hsl(var(--secondary))]" strokeWidth={2.3} />
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
{/* TEMPORARILY HIDDEN - MARMION CHIROPRACTIC
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
              */}
            </div>
          </div>
        </SectionShell>

        {/* LET'S TALK */}
        <SectionShell id="talk" eyebrow="Let's Talk" title="Start your journey." tone="offwhite">
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
  <div 
    dangerouslySetInnerHTML={{
      __html: `
        <script src="https://js-ap1.hsforms.net/forms/embed/442585000.js" defer></script>
        <div class="hs-form-frame" data-region="ap1" data-form-id="1c9f1023-c5a3-40a6-a7ae-0b3ad40cffb8" data-portal-id="442585000"></div>
      `
    }}
  />
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
                      { label: "Instagram", id: "instagram", icon: Instagram, url: "https://www.instagram.com/paceoncoaching/" },
                      { label: "Facebook", id: "facebook", icon: Facebook, url: "https://www.facebook.com/paceoncoaching" },
                      { label: "Strava", id: "strava", icon: Activity, url: "https://www.strava.com/clubs/paceon" },
                    ].map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.id}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
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
