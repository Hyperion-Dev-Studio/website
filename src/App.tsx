import { motion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// ------------------------------------------
// Typed UI primitives (no Tailwind, no shadcn)
// ------------------------------------------

type ButtonVariant = "solid" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
}
function Button({ children, variant = "solid", size = "md", href, type, onClick, className = "" }: ButtonProps) {
  const Comp = (href ? "a" : "button") as any;
  return (
    <Comp href={href} type={type} onClick={onClick} className={`btn btn-${variant} btn-${size} ${className}`}>
      {children}
    </Comp>
  );
}

interface CardProps { children: ReactNode; className?: string }
function Card({ children, className = "" }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>;
}
interface SimpleProps { children: ReactNode; className?: string }
function CardHeader({ children, className = "" }: SimpleProps) { return <div className={`card-header ${className}`}>{children}</div>; }
function CardTitle({ children, className = "" }: SimpleProps) { return <div className={`card-title ${className}`}>{children}</div>; }
function CardDescription({ children, className = "" }: SimpleProps) { return <div className={`card-description ${className}`}>{children}</div>; }
function CardContent({ children, className = "" }: SimpleProps) { return <div className={`card-content ${className}`}>{children}</div>; }

interface BadgeProps { children: ReactNode; variant?: "primary" | "secondary"; className?: string }
function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  return <span className={`badge badge-${variant} ${className}`}>{children}</span>;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { className?: string };
function Input(props: InputProps) { return <input {...props} className={`input ${props.className || ""}`} />; }

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string };
function Textarea(props: TextareaProps) { return <textarea {...props} className={`textarea ${props.className || ""}`} />; }

// ------------------------------------------
// Data
// ------------------------------------------
const nav = [
  { label: "Home", href: "#home" },
  { label: "Our Apps", href: "#logiquiz" },
  { label: "Contact", href: "#contact" },
];

const stacks = ["React Native", "Swift", "Kotlin", "TypeScript", "GraphQL", "Firebase", "Supabase", "AWS", "Vercel"];

function BlurBlob({ className = "" }: { className?: string }) {
  return <div className={`blur-blob ${className}`} aria-hidden />;
}

function PhoneMock() {
  return (
    <div className="phone-wrap">
      <div className="phone-body">
        <div className="phone-notch" />
        <div className="phone-inner">
          <div className="phone-toprow">
            <Badge variant="secondary">Logiquiz</Badge>
            <div className="phone-topmeta">
              <Star size={16} /> <span>Logic • IQ • Fun</span>
            </div>
          </div>
          <div className="phone-cards">
            {["Deduce the pattern", "Spot the odd rule", "Chain the clues"].map((t, i) => (
              <div key={i} className="phone-card">
                <div className="phone-card-row">
                  <div>
                    <p className="phone-card-title">{t}</p>
                    <p className="phone-card-sub">30 sec • +10 pts</p>
                  </div>
                  <Button variant="secondary" size="sm" className="btn-invert">Play</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="daily">
            <p className="daily-title">Daily Challenge</p>
            <p className="daily-sub">Beat 85% of players to earn a streak bonus.</p>
            <div className="daily-bars">
              {[0,1,2,3,4].map((i)=> <div key={i} className="daily-bar" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HyperionDevStudio() {
  return (
    <div className="site full-width" id="home">
      <StyleTag />
      <BlurBlob className="blob-a" />
      <BlurBlob className="blob-b" />

      {/* Navbar */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <span className="brand-icon"><Sparkles size={18} /></span>
            <span className="brand-text">Hyperion <span className="muted">Dev Studio</span></span>
          </a>
          <nav className="nav-links">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="nav-link">{n.label}</a>
            ))}
          </nav>
          <div className="nav-cta">
            <Button href="#contact" className="rounded-xl">Get in touch</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="section">
        <div className="container grid-2 hero">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge>Building premium mobile experiences</Badge>
              <h1 className="h1">Modern apps. <span className="grad-text">Elegant experiences.</span></h1>
              <p className="lead">Hyperion Dev Studio crafts polished, performant mobile applications for teams who care about detail. Our flagship title, <strong>Logiquiz</strong>, blends logic puzzles with delightful micro-interactions.</p>
              <div className="btn-row">
                <Button href="#contact" size="lg" className="rounded-xl">
                  <span className="icon-gap">Start a project <ArrowRight size={16} /></span>
                </Button>
                <Button href="#logiquiz" variant="secondary" size="lg" className="rounded-xl">Learn about our apps</Button>
              </div>
              <div className="chip-row">
                {stacks.map((s) => (
                  <div key={s} className="chip">{s}</div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="rel">
              <BlurBlob className="blob-c" />
              <BlurBlob className="blob-d" />
              <PhoneMock />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Apps (Logiquiz spotlight) */}
      <section id="logiquiz" className="section">
        <div className="container">
          <div className="grid-2 v-center gap-lg">
            <div>
              <Badge>Flagship App</Badge>
              <h2 className="h2 mt">Logiquiz — logic that plays beautifully</h2>
              <p className="muted-p">Logiquiz is our upcoming puzzle app that trains pattern recognition, deduction, and creative reasoning through bite-sized challenges. Designed for focus, built for flow.</p>
              <ul className="checklist">
                {[
                  "Daily challenges and seasonal leagues",
                  "Curated packs from educators and puzzle designers",
                  "Accessible design with rich haptics and soundscapes",
                  "Offline-first play with optional cloud sync",
                ].map((li, i) => (
                  <li key={i}><CheckCircle2 size={16} /> {li}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Button className="rounded-xl">Join the waitlist</Button>
                <Button variant="secondary" href="#contact" className="rounded-xl">Partner with us</Button>
                <Badge variant="secondary">iOS • Android • Tablet</Badge>
              </div>
            </div>
            <div className="rel center">
              <BlurBlob className="blob-c" />
              <BlurBlob className="blob-d" />
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="grid-2 gap-lg">
            <div>
              <h2 className="h2">Let’s build something exceptional</h2>
              <p className="muted-p">Tell us about your product, timeline, and budget. We’ll get back within one business day.</p>
              <div className="contact-list">
                <div className="contact-item"><Mail size={16} /> hyperion.dev.studio@gmail.com</div>
                <div className="contact-item"><Github size={16} /> <a href="https://github.com/Hyperion-Dev-Studio" target="_blank" rel="noreferrer">github.com/Hyperion-Dev-Studio</a></div>
                <div className="contact-item"><Linkedin size={16} /> linkedin.com/company/hyperion-dev</div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="card-title-text">Project inquiry</CardTitle>
                <CardDescription>Give us a few details and we’ll follow up with a short plan and estimate.</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const f = e.currentTarget.elements as any;
                    const name = f.namedItem("name").value;
                    const email = f.namedItem("email").value;
                    const message = f.namedItem("message").value;
                    const body = encodeURIComponent(`New project inquiry
Name: ${name}
Email: ${email}
Message: ${message}`);
                    window.location.href = `mailto:hyperion.dev.studio@gmail.com?subject=Project%20Inquiry&body=${body}`;
                  }}
                  className="form-col"
                >
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Email" required />
                  <Textarea name="message" placeholder="What are you building?" required />
                  <Button type="submit" className="rounded-xl icon-gap"><Sparkles size={16} /> Send inquiry</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <span className="brand-icon"><Sparkles size={16} /></span>
            <span className="brand-text">Hyperion Dev Studio</span>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Hyperion Dev Studio. All rights reserved.</p>
          <div className="footer-links">
            <a href="#logiquiz">Our Apps</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ------------------------------------------
// CSS (inline <style> tag) — Main color: #3080E5
// ------------------------------------------
function StyleTag() {
  return (
    <style>{`
:root{
  --main-color:#3080E5; /* requested primary */
  --main-color-2:#1e5fb4; /* darker shade for gradients */
  --text:#0f172a; --text-dim:#6b7280; --glass:rgba(255,255,255,0.6); --glass-dark:rgba(255,255,255,0.05);
  --border:rgba(255,255,255,0.3); --border-soft:rgba(255,255,255,0.2); --shadow:0 10px 30px rgba(0,0,0,0.12);
  --radius-xl:1rem;
}
*{box-sizing:border-box}
html,body,#root{height:100%}
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial;color:var(--text);
  background:
    radial-gradient(60% 60% at 70% 10%, rgba(48,128,229,0.14), transparent),
    radial-gradient(40% 40% at 0% 90%, rgba(48,128,229,0.10), transparent);
}
.site{position:relative;min-height:100vh}
.container{max-width:100%;margin:0 auto;padding:0 2rem}
.rel{position:relative}.center{display:grid;place-items:center}

/* Blobs */
.blur-blob{position:absolute;filter:blur(80px);pointer-events:none;z-index:-1;border-radius:9999px}
.blob-a{left:-10%;top:-10%;width:36rem;height:36rem;background:rgba(48,128,229,0.22)}
.blob-b{right:-10%;top:20%;width:28rem;height:28rem;background:rgba(30,95,180,0.22)}
.blob-c{left:-10%;top:-10%;width:18rem;height:18rem;background:rgba(48,128,229,0.30)}
.blob-d{right:-5%;bottom:-10%;width:16rem;height:16rem;background:rgba(30,95,180,0.30)}

/* Navbar */
.nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.3);backdrop-filter:blur(10px);border-bottom:1px solid var(--border-soft)}
.nav-inner{height:64px;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:.5rem;text-decoration:none;color:inherit}
.brand-icon{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:14px;background:linear-gradient(135deg,var(--main-color),var(--main-color-2));color:#fff;box-shadow:var(--shadow)}
.brand-text{font-weight:700;letter-spacing:.2px}
.muted{color:#64748b}
.nav-links{display:none;gap:1.25rem}
.nav-link{font-size:.9rem;color:rgba(15,23,42,.8);text-decoration:none}
.nav-link:hover{color:#0f172a}
.nav-cta{display:flex;gap:.5rem}
@media (min-width:768px){.nav-links{display:flex}}

/* Buttons */
.btn{border:none;border-radius:12px;padding:.6rem 1rem;font-weight:600;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;transition:transform .08s ease, opacity .2s ease}
.btn:active{transform:translateY(1px)}
.btn-solid{color:#fff;background:linear-gradient(135deg,var(--main-color),var(--main-color-2));box-shadow:var(--shadow)}
.btn-secondary{background:#fff;color:#111;border:1px solid rgba(0,0,0,.08)}
.btn-invert{background:#fff;color:#000;border:1px solid rgba(255,255,255,0.2)}
.btn-sm{padding:.4rem .7rem;font-size:.85rem}
.btn-md{padding:.6rem 1rem}
.btn-lg{padding:.8rem 1.2rem;font-size:1rem}
.icon-gap{display:inline-flex;align-items:center;gap:.5rem}

/* Badges */
.badge{display:inline-flex;align-items:center;gap:.4rem;padding:.35rem .7rem;border-radius:999px;font-size:.8rem;font-weight:600;background:linear-gradient(90deg,var(--main-color),var(--main-color-2));color:#fff}
.badge-secondary{background:rgba(255,255,255,.6);color:#111;border:1px solid rgba(0,0,0,.08)}

/* Sections */
.section{position:relative;padding:4rem 0}
.hero{gap:3rem;align-items:center}
@media (min-width:1024px){.hero{display:grid;grid-template-columns:1fr 1fr}}

/* Typography */
.h1{font-size:clamp(2.2rem,4vw,3.5rem);line-height:1.1;margin:.3rem 0 0}
.h2{font-size:clamp(1.6rem,2.5vw,2.2rem);margin:0}
.lead{margin-top:1rem;max-width:46ch;color:#334155}
.muted-p{margin-top:.5rem;max-width:60ch;color:#475569}
.grad-text{background:linear-gradient(90deg,var(--main-color),var(--main-color-2));-webkit-background-clip:text;background-clip:text;color:transparent}

/* Chips */
.chip-row{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.2rem}
.chip{border:1px solid rgba(0,0,0,.06);background:rgba(255,255,255,.6);padding:.35rem .8rem;border-radius:999px;font-size:.8rem}

/* Grid helpers */
.grid-2{display:grid;grid-template-columns:1fr;gap:2rem}
@media (min-width:1024px){.grid-2{grid-template-columns:1fr 1fr}}
.v-center{align-items:center}
.gap-lg{gap:2.5rem}

/* Cards */
.card{border:1px solid var(--border);background:var(--glass);backdrop-filter:blur(6px);border-radius:16px;box-shadow:var(--shadow)}
.card-header{padding:1.1rem 1.1rem 1rem}
.card-title{font-weight:700}
.card-title-text{font-weight:700;font-size:1.05rem}
.card-description{color:#475569;margin-top:.35rem}
.card-content{padding:0 1.1rem 1.1rem}

/* Phone mock */
.phone-wrap{position:relative;max-width:320px;margin:0 auto;aspect-ratio:9/19.5;border-radius:36px;border:1px solid rgba(255,255,255,.2);padding:12px;background:linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.1));box-shadow:var(--shadow);backdrop-filter:blur(8px)}
.phone-body{border-radius:30px;border:1px solid rgba(255,255,255,.35);background:#0b0b0b;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
.phone-notch{height:24px;width:96px;margin:12px auto;border-radius:999px;background:rgba(255,255,255,.08)}
.phone-inner{padding:0 20px 24px}
.phone-toprow{margin-top:6px;display:flex;align-items:center;justify-content:space-between}
.phone-topmeta{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,.75);font-size:12px}
.phone-cards{display:grid;gap:12px;margin-top:16px}
.phone-card{border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);padding:14px}
.phone-card-row{display:flex;align-items:center;justify-content:space-between}
.phone-card-title{color:#fff;font-weight:600;margin:0}
.phone-card-sub{color:rgba(255,255,255,.7);font-size:12px;margin:.2rem 0 0}
.daily{margin-top:18px;border-radius:14px;border:1px solid rgba(255,255,255,.12);padding:14px;background:linear-gradient(90deg, rgba(48,128,229,.5), rgba(30,95,180,.5))}
.daily-title{color:#fff;font-weight:600;margin:0}
.daily-sub{color:rgba(255,255,255,.85);font-size:12px;margin:.25rem 0 0}
.daily-bars{display:flex;gap:8px;margin-top:12px}
.daily-bar{height:8px;flex:1;border-radius:999px;background:rgba(255,255,255,.6)}

/* Forms */
.form-col{display:grid;gap:.6rem}
.input,.textarea{width:100%;border:1px solid rgba(0,0,0,.08);background:#fff;border-radius:12px;padding:.7rem .9rem;font-size:.95rem}
.textarea{min-height:120px;resize:vertical}

/* Contact */
.contact-list{margin-top:18px;display:grid;gap:.5rem;font-size:.95rem}
.contact-item{display:flex;align-items:center;gap:.5rem}

/* Layout utils */
.btn-row{margin-top:1.2rem;display:flex;gap:.6rem;flex-wrap:wrap}
.mt{margin-top:.8rem}

/* Footer */
.footer{border-top:1px solid var(--border-soft);padding:2rem 0}
.footer-inner{display:flex;flex-direction:column;align-items:center;gap:1rem}
.footer-links{display:flex;gap:1rem}
.footer a{text-decoration:none;color:inherit}
.footer a:hover{text-decoration:underline}
@media (min-width:768px){.footer-inner{flex-direction:row;justify-content:space-between}}
    `}</style>
  );
}
