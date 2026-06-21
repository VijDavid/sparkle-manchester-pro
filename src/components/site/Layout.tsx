import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Phone, Menu, X, Mail, MapPin, Clock } from "lucide-react";

const PHONE_DISPLAY = "0161 123 4567";
const PHONE_TEL = "01611234567";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="grid size-10 place-items-center rounded-lg bg-brand-navy text-xl font-bold italic tracking-tighter text-white font-display">
        MC
      </div>
      <span className="font-display text-xl font-extrabold tracking-tight text-brand-navy">
        MCR<span className="text-brand-green">PURE</span>
      </span>
    </Link>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Logo />
        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-brand-blue"
              activeProps={{ className: "text-brand-blue" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-brand-navy"
          >
            <Phone className="size-4" />
            {PHONE_DISPLAY}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-brand-navy px-5 py-2.5 text-white transition-all hover:bg-slate-800"
          >
            Request Quote
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-bold text-brand-navy lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                activeProps={{ className: "bg-slate-50 text-brand-blue" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-28 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-slate-500">
              Premium cleaning across Manchester since 2012. Insured, DBS-checked teams.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-brand-navy">Services</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/services" className="hover:text-brand-blue">House Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue">Office Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue">Deep Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue">End of Tenancy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-brand-navy">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-brand-blue">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-blue">Pricing</Link></li>
              <li><Link to="/reviews" className="hover:text-brand-blue">Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-brand-blue">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-brand-navy">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 size-4 shrink-0 text-brand-blue" /> {PHONE_DISPLAY}</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 size-4 shrink-0 text-brand-blue" /> hello@mcrpure.co.uk</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-brand-blue" /> Deansgate, Manchester M3 2BA</li>
              <li className="flex items-start gap-2"><Clock className="mt-0.5 size-4 shrink-0 text-brand-blue" /> Mon–Sat 7am–8pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} MCR Pure Cleaning Ltd. Registered in England &amp; Wales.</p>
          <p className="italic">Serving Manchester, Salford, Stockport, Trafford &amp; Didsbury.</p>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCall() {
  return (
    <div className="fixed right-4 bottom-4 left-4 z-50 lg:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex items-center justify-between rounded-full bg-brand-navy px-5 py-3.5 text-white shadow-2xl ring-4 ring-white"
      >
        <span className="flex items-center gap-2 text-sm font-bold">
          <Phone className="size-4" /> Free Quote
        </span>
        <span className="font-display text-base font-extrabold text-brand-green">
          {PHONE_DISPLAY}
        </span>
      </a>
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <main>{children}</main>
      <Footer />
      <StickyMobileCall />
    </div>
  );
}

export { PHONE_DISPLAY, PHONE_TEL };
