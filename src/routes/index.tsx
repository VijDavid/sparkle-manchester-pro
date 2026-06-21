import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  CheckCircle2,
  Shield,
  Leaf,
  Clock,
  Star,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Layout, PHONE_DISPLAY, PHONE_TEL } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/CtaBand";
import heroImg from "@/assets/hero-cleaner.jpg";
import houseImg from "@/assets/service-house.jpg";
import officeImg from "@/assets/service-office.jpg";
import deepImg from "@/assets/service-deep.jpg";
import beforeAfterImg from "@/assets/before-after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Professional Cleaning Services in Manchester | MCR Pure" },
      {
        name: "description",
        content:
          "Manchester's trusted cleaning company. Same-day service, insured staff, eco-friendly products. House, office & deep cleaning from £65. Call 0161 123 4567.",
      },
      { property: "og:title", content: "Professional Cleaning Services in Manchester | MCR Pure" },
      {
        property: "og:description",
        content: "Trusted, insured cleaners across Manchester. Same-day quotes — call now.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { name: "House Cleaning", desc: "Weekly, bi-weekly or one-off cleans for busy Manchester homes.", img: houseImg, color: "blue" },
  { name: "Office Cleaning", desc: "Commercial-grade cleaning for productive workspaces.", img: officeImg, color: "green" },
  { name: "Deep Cleaning", desc: "Top-to-bottom intensive cleans for total reset.", img: deepImg, color: "orange" },
];

const whyUs = [
  { icon: Shield, title: "Fully Insured & DBS Checked", desc: "Every cleaner is vetted, insured and background checked for total peace of mind." },
  { icon: Leaf, title: "Eco-Friendly Products", desc: "Plant-based, non-toxic supplies that are safe for kids, pets and the planet." },
  { icon: Clock, title: "Reliable & Punctual", desc: "We show up on time, every time. Real-time arrival updates included." },
  { icon: Sparkles, title: "Satisfaction Guaranteed", desc: "Not 100% happy? We come back and re-clean — free of charge." },
];

const testimonials = [
  { name: "Sarah J.", area: "Didsbury", quote: "Absolutely spotless every single time. They're punctual, friendly and incredibly thorough." },
  { name: "James R.", area: "Salford Quays", quote: "Best cleaning company in Manchester. We've used them for our office for two years." },
  { name: "Priya K.", area: "Chorlton", quote: "End-of-tenancy clean was flawless — got our full deposit back without a single dispute." },
];

const areas = [
  "Manchester City Centre", "Deansgate", "Salford", "Salford Quays", "Didsbury",
  "Chorlton", "Stockport", "Trafford", "Altrincham", "Sale",
  "Northern Quarter", "Ancoats", "Prestwich", "Withington", "Levenshulme",
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-12 pb-20 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-bold text-brand-green-dark">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-green" />
              </span>
              Same-day cleaning available in Manchester
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl xl:text-7xl">
              Professional cleaning services in{" "}
              <span className="text-brand-blue">Manchester</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Premium residential and commercial cleaning across Greater Manchester. From Deansgate
              to Didsbury — we bring 5-star standards to every doorstep.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-4 text-base font-bold text-white shadow-xl shadow-brand-blue/25 transition-all hover:bg-brand-blue-dark sm:text-lg"
              >
                <Phone className="size-5" /> Call Now: {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-6 py-4 text-base font-bold text-brand-navy transition-all hover:border-brand-navy sm:text-lg"
              >
                Request a Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-brand-green" /> Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-brand-green" /> DBS-checked</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-brand-green" /> 4.9★ on Google</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-brand-green" /> Eco-friendly</span>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                src={heroImg}
                alt="Professional cleaner in a Manchester apartment"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 sm:block">
                <div className="mb-1 flex gap-0.5 text-brand-green">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="font-display text-2xl font-extrabold text-brand-navy">2,000+</p>
                <p className="text-xs font-semibold text-slate-500">Happy Manchester customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Same-day banner */}
      <section className="bg-brand-green py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 text-sm font-bold text-white sm:px-6">
          <span className="flex items-center gap-2"><Sparkles className="size-4" /> Same-day cleaning</span>
          <span className="hidden sm:inline">•</span>
          <span>Free no-obligation quotes</span>
          <span className="hidden sm:inline">•</span>
          <span>100% satisfaction guarantee</span>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">Why Choose MCR Pure</p>
            <h2 className="font-display text-3xl font-bold text-brand-navy sm:text-4xl">
              Manchester's most trusted cleaning team
            </h2>
            <p className="mt-4 text-slate-600">
              We're a local Manchester company on a mission to make professional cleaning feel
              effortless and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-brand-blue/30 hover:shadow-lg"
              >
                <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <item.icon className="size-6" />
                </div>
                <h3 className="text-base font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">Services</p>
              <h2 className="font-display text-3xl font-bold text-brand-navy sm:text-4xl">
                Tailored cleaning for every space
              </h2>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-sm font-bold text-brand-blue">
              View all services <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.name}
                to="/services"
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={s.img} alt={s.name} loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-navy">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-blue">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">The Results</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
              See the MCR Pure difference
            </h2>
            <p className="mt-4 text-slate-600">
              Real results from real Manchester homes. Our trained teams use professional-grade
              equipment and eco-friendly products to deliver flawless results — every time.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-semibold text-brand-navy">
              {[
                "Surgical precision on every surface",
                "Professional equipment & supplies",
                "Background-checked, uniformed staff",
                "Re-clean guarantee if you're not delighted",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-green/15 text-brand-green-dark">
                    <CheckCircle2 className="size-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src={beforeAfterImg}
              alt="Before and after professional carpet cleaning"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">Reviews</p>
            <h2 className="font-display text-3xl font-bold text-brand-navy sm:text-4xl">
              Loved by 2,000+ Manchester customers
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-6 ring-1 ring-slate-100">
                <div className="mb-3 flex gap-0.5 text-brand-green">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-slate-700">"{t.quote}"</p>
                <p className="mt-5 text-sm font-bold text-brand-navy">
                  {t.name} <span className="font-normal text-slate-500">— {t.area}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
              Read all reviews <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">Coverage</p>
            <h2 className="font-display text-3xl font-bold text-brand-navy sm:text-4xl">
              Areas we cover in Manchester
            </h2>
            <p className="mt-4 text-slate-600">
              Trusted local cleaners across Greater Manchester — and we're growing.
            </p>
          </div>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
            {areas.map((a) => (
              <span
                key={a}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
              >
                <MapPin className="size-3.5 text-brand-blue" /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
