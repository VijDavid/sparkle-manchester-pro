import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Layout, PHONE_DISPLAY, PHONE_TEL } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MCR Pure | Manchester Cleaning Quotes" },
      { name: "description", content: "Get a free cleaning quote in Manchester. Call 0161 123 4567 or send a message. Mon–Sat 7am–8pm." },
      { property: "og:title", content: "Contact MCR Pure | Manchester Cleaning Quotes" },
      { property: "og:description", content: "Free quotes in under 60 seconds. Call or email today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">Contact</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl">
            Get your free cleaning quote
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Tell us about your space and we'll get back to you in under 30 minutes with a no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-brand-green/10 text-brand-green-dark">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-brand-navy">Thanks — we've got your details!</h2>
                  <p className="mt-3 text-slate-600">
                    A member of our Manchester team will call you back within 30 minutes.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <h2 className="font-display text-2xl font-bold text-brand-navy">Request a quote</h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Postcode" name="postcode" required placeholder="e.g. M3 2BA" />
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-brand-navy">Service required</label>
                    <select
                      name="service"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    >
                      <option>House cleaning</option>
                      <option>Apartment cleaning</option>
                      <option>Office cleaning</option>
                      <option>Deep cleaning</option>
                      <option>End-of-tenancy</option>
                      <option>Post-construction</option>
                      <option>Carpet & sofa</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-brand-navy">Tell us more (optional)</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Bedrooms, bathrooms, preferred date..."
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-blue px-6 py-4 text-base font-bold text-white shadow-xl shadow-brand-blue/25 transition-all hover:bg-brand-blue-dark"
                  >
                    Get my free quote
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    We respond within 30 minutes during business hours.
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <InfoBlock icon={Phone} title="Call us" body={<a href={`tel:${PHONE_TEL}`} className="font-bold text-brand-navy hover:text-brand-blue">{PHONE_DISPLAY}</a>} />
            <InfoBlock icon={Mail} title="Email" body={<a href="mailto:hello@mcrpure.co.uk" className="font-bold text-brand-navy hover:text-brand-blue">hello@mcrpure.co.uk</a>} />
            <InfoBlock icon={MapPin} title="Office" body={<p className="text-slate-600">Deansgate<br />Manchester M3 2BA</p>} />
            <InfoBlock
              icon={Clock}
              title="Business hours"
              body={
                <ul className="text-sm text-slate-600">
                  <li>Mon – Fri: 7:00am – 8:00pm</li>
                  <li>Saturday: 8:00am – 6:00pm</li>
                  <li>Sunday: by appointment</li>
                </ul>
              }
            />

            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <iframe
                title="MCR Pure Manchester location"
                src="https://www.google.com/maps?q=Deansgate+Manchester&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold text-brand-navy">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
      />
    </div>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Phone;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5">
      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-sm font-bold text-brand-navy">{title}</p>
        <div className="mt-1 text-sm">{body}</div>
      </div>
    </div>
  );
}
