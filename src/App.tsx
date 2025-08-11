import { motion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Settings,
  GraduationCap,
  BarChart2,
  Trophy,
} from "lucide-react";

// ----------------------------
// UI primitives
// ----------------------------
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
function Card({ children, className = "" }: CardProps) { return <div className={`card ${className}`}>{children}</div>; }
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

// ----------------------------
// Phone mock — matches your screenshot
// ----------------------------
function PhoneMock() {
  return (
    <div className="phone-wrap">
      <div className="phone-body">
        <div className="phone-notch" />
        <div className="appbar">
          <div className="title" title="CertQuiz – CPIM & CSCP Practice">CertQuiz – CPIM & CSCP Prac…</div>
          <button className="icon-btn" aria-label="settings"><Settings size={18} /></button>
        </div>
        <div className="hearts" aria-label="lives">
          <span className="heart full">♥</span>
          <span className="heart full">♥</span>
          <span className="heart full">♥</span>
          <span className="heart full">♥</span>
          <span className="heart empty">♡</span>
        </div>
        <div className="pill-list">
          {['CPIM Training','CSCP Training','CSCT Training','CLTD Training'].map((label) => (
            <button key={label} className="pill-btn">{label}</button>
          ))}
        </div>
        <div className="ad-banner">
          <div className="ad-label">Test Ad</div>
          <div className="ad-body">This is a 468x60 test ad.</div>
          <div className="ad-dot" aria-hidden />
        </div>
        <nav className="tabbar" aria-label="bottom navigation">
          <a className="tab-item active">
            <GraduationCap size={18} />
            <span>Training</span>
          </a>
          <a className="tab-item">
            <BarChart2 size={18} />
            <span>Progress</span>
          </a>
          <a className="tab-item">
            <Trophy size={18} />
            <span>Achievements</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

// ----------------------------
// Data
// ----------------------------
const nav: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "Our Apps", href: "#apps" },
  { label: "Contact", href: "#contact" },
];

const stacks: string[] = [
  "React Native",
  "Swift",
  "Kotlin",
  "TypeScript",
  "GraphQL",
  "Firebase",
  "Supabase",
  "AWS",
  "Vercel",
];

// ----------------------------
// Page
// ----------------------------
export default function HyperionDevStudio() {
  return (
    <div className="site" id="home">
      <StyleTag />
      {/* Navbar */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <span className="brand-icon"><Sparkles size={18} /></span>
            <span className="brand-text">Hyperion <span className="muted">Dev Studio</span></span>
          </a>
          <nav className="nav-links">
            {nav.map((n: { label: string; href: string }) => (
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
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge>Building premium mobile experiences</Badge>
            <h1 className="h1">Modern apps. <span className="grad-text">Elegant experiences.</span></h1>
            <p className="lead">Hyperion Dev Studio crafts polished, performant mobile applications for teams who care about detail.</p>
            <div className="btn-row">
              <Button href="#contact" size="lg" className="rounded-xl">
                <span className="icon-gap">Start a project <ArrowRight size={16} /></span>
              </Button>
              <Button href="#apps" variant="secondary" size="lg" className="rounded-xl">See our apps</Button>
            </div>
            <div className="chip-row">
              {stacks.map((s: string) => (
                <div key={s} className="chip">{s}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Apps */}
      <section id="apps" className="section">
        <div className="container fullwidth">
          <div className="grid-2 v-center gap-lg">
            <div>
              <Badge>Flagship App</Badge>
              <h2 className="h2 mt">Logiquiz — logic that plays beautifully</h2>
              <p className="muted-p">Logiquiz trains pattern recognition, deduction, and creative reasoning through bite-sized challenges.</p>
              <ul className="checklist">
                {[
                  "Daily challenges and seasonal leagues",
                  "Curated packs from educators and puzzle designers",
                  "Accessible design with rich haptics and soundscapes",
                  "Offline-first play with optional cloud sync",
                ].map((li, i) => (
                  <li key={i}>• {li}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Button className="rounded-xl">Join the waitlist</Button>
                <Button variant="secondary" href="#contact" className="rounded-xl">Partner with us</Button>
                <Badge variant="secondary">iOS • Android • Tablet</Badge>
              </div>
            </div>
            <div className="center">
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container fullwidth">
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
                    const body = encodeURIComponent(`New project inquiry\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
                    window.location.href = `mailto:hyperion.dev.studio@gmail.com?subject=Project%20Inquiry&body=${body}`;
                  }}
                  className="form-col"
                >
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Email" required />
                  <Textarea name="message" placeholder="What are you building?" required />
                  <Button type="submit" className="rounded-xl icon-gap">Send inquiry</Button>
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
            <a href="#apps">Our Apps</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ----------------------------
// Styles adjustments
// ----------------------------
function StyleTag() {
  return (
    <style>{`
.container.fullwidth{max-width:100%!important}
/* Keep all existing styles from previous version here */
    `}</style>
  );
}
