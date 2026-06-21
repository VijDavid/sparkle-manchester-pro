import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | MCR Pure Manchester Cleaners" },
      { name: "description", content: "Frequently asked questions about MCR Pure cleaning services in Manchester — how long, supplies, booking and coverage." },
      { property: "og:title", content: "FAQ | MCR Pure Manchester Cleaners" },
      { property: "og:description", content: "Answers to common questions about our Manchester cleaning service." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "How long does a typical cleaning take?", a: "A standard apartment clean takes 2–3 hours; a family home 3–5 hours; a deep clean 5–8 hours. We'll give you an accurate estimate when you book." },
  { q: "Do you bring your own supplies and equipment?", a: "Yes — every clean includes professional-grade equipment and eco-friendly, non-toxic supplies. You don't need to provide anything." },
  { q: "Do I need to be home during the cleaning?", a: "Not at all. Many of our Manchester customers give us a key or door code. Our staff are DBS-checked, insured and fully trusted." },
  { q: "What areas of Manchester do you cover?", a: "We cover all of Greater Manchester including the city centre, Salford, Stockport, Trafford, Didsbury, Chorlton, Altrincham and surrounding areas." },
  { q: "How do I book a cleaning?", a: "Call us on 0161 123 4567 or fill out our online quote form. We confirm bookings within 30 minutes and can often offer same-day availability." },
  { q: "Is your team insured?", a: "Yes — we carry full public liability insurance and every cleaner is DBS-checked and trained to our documented MCR Pure standard." },
  { q: "What if I'm not happy with the clean?", a: "We offer a 100% satisfaction guarantee. If anything's missed, call us within 24 hours and we'll come back and re-clean — free of charge." },
  { q: "Can you do same-day cleaning?", a: "Yes — depending on availability we can dispatch a Manchester team the same day. Call early for the best chance of a same-day slot." },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">FAQ</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Everything you need to know about MCR Pure cleaning services in Manchester.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-bold text-brand-navy sm:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-brand-blue transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title="Still have questions?" subtitle="Our Manchester team is ready to help." />
    </Layout>
  );
}
