import { motion } from "framer-motion";
import {
  Rocket,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

function Button({ children, variant = "solid", size = "md", href, type, onClick, className = "" }) {
  const Comp = href ? "a" : "button";
  return (
    <Comp href={href} type={type} onClick={onClick} className={`btn btn-${variant} btn-${size} ${className}`}>
      {children}
    </Comp>
  );
}
function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}
function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}
function CardTitle({ children }) {
  return <div className="card-title">{children}</div>;
}
function CardDescription({ children }) {
  return <div className="card-description">{children}</div>;
}
function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}
function Badge({ children, variant = "primary", className = "" }) {
  return <span className={`badge badge-${variant} ${className}`}>{children}</span>;
}
function Input(props) {
  return <input {...props} className={`input ${props.className || ""}`} />;
}
function Textarea(props) {
  return <textarea {...props} className={`textarea ${props.className || ""}`} />;
}

const nav = [
  { label: "Home", href: "#home" },
  { label: "Our Apps", href: "#logiquiz" },
  { label: "Contact", href: "#contact" },
];

const stacks = ["React Native", "Swift", "Kotlin", "TypeScript", "GraphQL", "Firebase", "Supabase", "AWS", "Vercel"];

function BlurBlob({ className = "" }) {
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
            <div className="rel">
              <BlurBlob className="blob-c" />
              <BlurBlob className="blob-d" />
              <div className="center">
                <PhoneMock />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="grid-2 gap-lg">
            <div>
              <h2 className="h2">Let’s build something exceptional</h2>
              <p className="muted-p">Tell us about your product, timeline, and budget. We’ll get back within one business day.</p>
              <div className="contact-list">
                <div className="contact-item"><Mail size={16} /> hyperion.dev.studio@gmail.com</div>
                <div className="contact-item"><Github size={16} /> <a href="https://github.com/Hyperion-Dev-Studio">github.com/Hyperion-Dev-Studio</a></div>
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
                    const f = e.currentTarget.elements;
                    const name = f.namedItem("name").value;
                    const email = f.namedItem("email").value;
                    const message = f.namedItem("message").value;
                    const body = encodeURIComponent(`New project inquiry\\nName: ${name}\\nEmail: ${email}\\nMessage: ${message}`);
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

function StyleTag() {
  return (
    <style>{`
:root {
  --main-color: #3080E5;
}
.full-width .container { max-width: 100%; padding: 0 2rem; }
/* Keep rest of original CSS here, but replace indigo/fuchsia gradients with var(--main-color) where relevant */
`}</style>
  );
}
