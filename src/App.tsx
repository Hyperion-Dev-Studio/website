import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { ReactNode, MouseEventHandler } from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Settings,
  GraduationCap,
  BarChart2,
  Trophy,
} from "lucide-react";
import logo from "./assets/Hyperion Dev Studio.png";

/* -------------------- UI PRIMITIVES -------------------- */
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
function Button({
  children,
  variant = "solid",
  size = "md",
  href,
  type,
  onClick,
  className = "",
}: ButtonProps) {
  const Comp = (href ? "a" : "button") as any;
  return (
    <Comp
      href={href}
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} btn-${size} ${className}`}
    >
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

/* -------------------- Tiny Hash Router -------------------- */
type Route = { name: "home" | "apps" | "contact" | "blogIndex" | "blogPost"; slug?: string };
function useHashRoute(): Route {
  const parse = (): Route => {
    const h = window.location.hash.replace(/^#/, "");
    if (h.startsWith("/blog/")) return { name: "blogPost", slug: decodeURIComponent(h.slice("/blog/".length)) };
    if (h === "/blog") return { name: "blogIndex" };
    if (h === "apps" || h === "/apps") return { name: "apps" };
    if (h === "contact" || h === "/contact") return { name: "contact" };
    return { name: "home" };
  };
  const [route, setRoute] = useState<Route>(parse());
  useEffect(() => {
    const onHash = () => setRoute(parse());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

/* -------------------- Blog Data + Views -------------------- */
type Post = { slug: string; title: string; date: string; summary: string; content: string; tags : string[]; };
const posts: Post[] = [
  {
  slug: "cscp-study-guide",
  title: "How to Pass the CSCP Exam on the First Attempt: A Complete Study Guide",
  date: "2025-01-15",
  summary: "A structured, step-by-step study guide to maximize your chances of passing CSCP on your first try.",
  content: `
    <p>The <strong>APICS CSCP</strong> exam is challenging, but with the right plan you can pass on your first attempt.</p>
    <h3>✅ Steps to Success</h3>
    <ul>
      <li>Understand the exam blueprint: 3 modules (Design, Planning/Execution, Improvement).</li>
      <li>Set a 3–4 month timeline and break it into weekly goals.</li>
      <li>Study official APICS content, then reinforce with practice questions.</li>
      <li>Simulate exam timing: 150 questions in 3.5 hours.</li>
    </ul>
    <p><em>LogiQuiz</em> accelerates your prep with exam-style quizzes, instant feedback, and offline practice.</p>
    <p><a href="#apps" class="btn btn-lg">📲 Prepare with LogiQuiz</a></p>
  `,
  tags: ["CSCP","Study Guide","Certification","LogiQuiz"]
},
{
  slug: "cscp-practice-questions",
  title: "Top 50 CSCP Exam Questions with Explanations (Free Practice Quiz)",
  date: "2025-02-07",
  summary: "A free set of 50 CSCP-style questions with answers and explanations to test your readiness.",
  content: `
    <p>Practice is key to passing the CSCP. Here are 50 sample questions covering Modules 1–3.</p>
    <ul>
      <li>CPIM vs CSCP scope knowledge</li>
      <li>Supply chain design trade-offs</li>
      <li>Planning and execution best practices</li>
      <li>Continuous improvement and KPIs</li>
    </ul>
    <p>Every question in <em>LogiQuiz</em> includes instant feedback and detailed explanations—turning mistakes into lessons.</p>
    <p><a href="#apps" class="btn btn-lg">📲 Try LogiQuiz Free Practice</a></p>
  `,
  tags: ["CSCP","Practice","Quiz","LogiQuiz"]
},
{
  slug: "cpim-vs-cscp",
  title: "CPIM vs CSCP: Which APICS Certification Is Right for You?",
  date: "2025-03-08",
  summary: "A side-by-side comparison of CPIM and CSCP to help you decide the best path for your career.",
  content: `
    <h3>📊 Key Differences</h3>
    <ul>
      <li><strong>CPIM:</strong> Focused on internal operations, inventory, and planning.</li>
      <li><strong>CSCP:</strong> Broader supply chain, from suppliers to customers.</li>
    </ul>
    <p>Both certifications boost careers. Use <em>LogiQuiz</em> to prepare for CPIM Parts 1 & 2 or CSCP Modules 1–3.</p>
  `,
  tags: ["CSCP","CPIM","Certification","Comparison"]
},
{
  slug: "study-time-cscp-cpim",
  title: "How Much Time Do You Need to Prepare for CSCP/CPIM?",
  date: "2025-04-19",
  summary: "Understand the average preparation time for CSCP and CPIM and how to plan effectively.",
  content: `
    <p>Most candidates spend:</p>
    <ul>
      <li><strong>CPIM:</strong> ~150–200 hours of study</li>
      <li><strong>CSCP:</strong> ~120–160 hours of study</li>
    </ul>
    <p>Consistency beats cramming. Daily 60–90 minute sessions, combined with <em>LogiQuiz</em> practice, build confidence fast.</p>
  `,
  tags: ["CSCP","CPIM","Study Plan","Time Management"]
},
{
  slug: "best-resources-apics",
  title: "The Best Study Resources for APICS Certification (Ranked)",
  date: "2025-04-25",
  summary: "Our ranking of the most effective study resources for APICS CSCP and CPIM candidates.",
  content: `
    <h3>🏆 Top Resources</h3>
    <ol>
      <li>APICS Learning System (official modules)</li>
      <li><em>LogiQuiz</em> app for daily practice</li>
      <li>Study groups & discussion forums</li>
      <li>Instructor-led classes</li>
    </ol>
    <p>Combine official materials with practice tools like LogiQuiz for the strongest results.</p>
  `,
  tags: ["CSCP","CPIM","Resources","LogiQuiz"]
},
{
  slug: "8-week-study-plan",
  title: "How to Build a Study Plan for APICS Certification in 8 Weeks",
  date: "2025-05-01",
  summary: "A fast-track 8-week plan to pass CSCP or CPIM with confidence.",
  content: `
    <p>This intensive plan covers all modules in 8 weeks:</p>
    <ul>
      <li>Weeks 1–2: Core concepts & Module 1</li>
      <li>Weeks 3–5: Module 2 deep dive + quizzes</li>
      <li>Weeks 6–7: Module 3 + practice exams</li>
      <li>Week 8: Review weak areas with LogiQuiz</li>
    </ul>
    <p>Discipline + LogiQuiz’s daily quizzes = success.</p>
  `,
  tags: ["CSCP","CPIM","Study Plan","LogiQuiz"]
},
{
  slug: "why-apics-certification",
  title: "Why APICS Certification Is a Game-Changer for Your Supply Chain Career",
  date: "2025-05-15",
  summary: "Discover why APICS CPIM and CSCP certifications open doors and accelerate careers.",
  content: `
    <p>APICS certifications are recognized globally and increase salaries, credibility, and career mobility.</p>
    <p>Employers value candidates who combine theory with proven practice. <em>LogiQuiz</em> bridges that gap.</p>
  `,
  tags: ["CSCP","CPIM","Career","Benefits"]
},
{
  slug: "career-stories-cscp",
  title: "5 Real Career Stories: How CSCP Helped Me Get Promoted",
  date: "2025-06-13",
  summary: "Five professionals share how CSCP certification boosted their careers.",
  content: `
    <p>From analyst to manager, from planner to director—CSCP validated skills and opened doors.</p>
    <p>Alongside official study, each story credits <em>LogiQuiz</em> practice with building confidence.</p>
  `,
  tags: ["CSCP","Career","Success Stories","LogiQuiz"]
},
{
  slug: "cscp-vs-pmp-lean",
  title: "CSCP vs PMP vs Lean Six Sigma: Which Certification Brings the Best ROI?",
  date: "2025-07-24",
  summary: "Compare CSCP, PMP, and Lean Six Sigma for ROI and career impact.",
  content: `
    <h3>🔍 Key Insights</h3>
    <ul>
      <li><strong>CSCP:</strong> Supply chain breadth</li>
      <li><strong>PMP:</strong> Project management excellence</li>
      <li><strong>Lean Six Sigma:</strong> Process improvement mastery</li>
    </ul>
    <p>Each has value. Choose based on your career path—but for supply chain, CSCP reigns. Practice with LogiQuiz to prepare.</p>
  `,
  tags: ["CSCP","PMP","Lean Six Sigma","ROI"]
},
{
  slug: "top-supply-chain-jobs",
  title: "Top 10 Supply Chain Jobs You Can Get with APICS Certification",
  date: "2025-08-15",
  summary: "The best supply chain career paths unlocked by CSCP and CPIM certifications.",
  content: `
    <ol>
      <li>Supply Chain Analyst</li>
      <li>Planning Manager</li>
      <li>Logistics Coordinator</li>
      <li>Procurement Manager</li>
      <li>Inventory Control Manager</li>
      <li>Operations Manager</li>
      <li>Demand Planner</li>
      <li>Global Supply Chain Lead</li>
      <li>Director of Supply Chain</li>
      <li>VP of Operations</li>
    </ol>
    <p>APICS certifications demonstrate expertise. Use <em>LogiQuiz</em> to prepare and take the first step.</p>
  `,
  tags: ["CSCP","CPIM","Jobs","Career"]
},
];

function BlogIndex() {
  const [selected, setSelected] = useState<string[]>([]);

  const allTags = Array.from(new Set(posts.flatMap(p => p.tags))).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  const toggle = (tag: string) =>
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const clear = () => setSelected([]);

  const filtered = selected.length === 0
    ? posts
    : posts.filter((p) => p.tags.some((t) => selected.includes(t)));

  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Hyperion Dev Studio Blog</h1>
        <p className="muted-p">News, notes, and deep dives from the team.</p>

        {/* Tag filter */}
        <div className="tagbar">
          <div className="tags">
            {allTags.map((tag) => {
              const active = selected.includes(tag);
              return (
                <button
                  key={tag}
                  className={`tag ${active ? "tag-active" : ""}`}
                  onClick={() => toggle(tag)}
                  aria-pressed={active}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <div className="tag-actions">
            <button
              className="tag-clear"
              onClick={clear}
              disabled={selected.length === 0}
              title="Clear selected tags"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="blog-list">
          {filtered.map((p) => (
            <a key={p.slug} className="blog-card" href={`#/blog/${encodeURIComponent(p.slug)}`}>
              <h3 className="blog-title">{p.title}</h3>
              <div className="blog-meta">
                {new Date(p.date).toLocaleDateString()} • {p.tags.join(", ")}
              </div>
              <p className="blog-summary">{p.summary}</p>
            </a>
          ))}
          {filtered.length === 0 && (
            <p className="muted-p" style={{ marginTop: 12 }}>
              No posts match the selected tags.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function BlogPost({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <p className="muted-p">Post not found.</p>
          <a href="#/blog" className="btn btn-secondary" style={{ marginTop: 12 }}>← Back to blog</a>
        </div>
      </section>
    );
  }
  return (
    <section className="section">
      <div className="container blog-article">
        <a href="#/blog" className="btn btn-secondary" style={{ marginBottom: 16 }}>← Back to blog</a>
        <h1 className="h2" style={{ marginTop: 8 }}>{post.title}</h1>
        <div className="blog-meta">{new Date(post.date).toLocaleDateString()}</div>
        <article className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </section>
  );
}

/* -------------------- Phone Mock -------------------- */
function PhoneMock() {
  return (
    <div className="phone-wrap">
      <div className="phone-body">
        <div className="phone-notch" />
        <div className="appbar">
          <div className="title" title="CertQuiz – CPIM & CSCP Practice">
            CertQuiz – CPIM & CSCP Prac…
          </div>
          <button className="icon-btn" aria-label="settings">
            <Settings size={18} />
          </button>
        </div>
        <div className="hearts" aria-label="lives">
          <span className="heart full">♥</span>
          <span className="heart full">♥</span>
          <span className="heart full">♥</span>
          <span className="heart full">♥</span>
          <span className="heart empty">♡</span>
        </div>
        <div className="pill-list">
          {["CPIM Training", "CSCP Training", "CSCT Training", "CLTD Training"].map((label) => (
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

/* -------------------- PAGE -------------------- */
export function App() {
  const route = useHashRoute();
  const [showBeta, setShowBeta] = useState(false);

  const Navbar = (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <img src={logo} alt="Hyperion Dev Studio" className="brand-logo" />
          <span className="brand-text">Hyperion <span className="muted">Dev Studio</span></span>
        </a>
        <nav className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#apps" className="nav-link">Our Apps</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#/blog" className="nav-link">Blog</a>
        </nav>
        <div className="nav-cta"><a href="#contact" className="btn">Get in touch</a></div>
      </div>
    </header>
  );

  const Footer = (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <img src={logo} alt="" className="brand-logo" />
          <span className="brand-text">Hyperion Dev Studio</span>
        </div>
        <div className="footer-links">
          <a href="#/blog">Blog</a>
          <a href="#apps">Our Apps</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );

  if (route.name === "blogIndex") {
    return (
      <div className="site" id="blog">
        <StyleTag />
        {Navbar}
        <BlogIndex />
        {Footer}
      </div>
    );
  }
  if (route.name === "blogPost" && route.slug) {
    return (
      <div className="site" id="blogpost">
        <StyleTag />
        {Navbar}
        <BlogPost slug={route.slug} />
        {Footer}
      </div>
    );
  }

  return (
    <div className="site" id="home">
      <StyleTag />
      {Navbar}

      {/* HERO */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge>Building premium mobile experiences</Badge>
            <h1 className="h1">Modern apps. <span className="grad-text">Elegant experiences.</span></h1>
            <p className="lead">
              Hyperion Dev Studio crafts polished, performant mobile applications for teams who care about detail.
            </p>
            <div className="btn-row">
              <Button href="#contact" size="lg" className="rounded-xl">
                <span className="icon-gap">Start a project <ArrowRight size={16} /></span>
              </Button>
              <Button href="#apps" variant="secondary" size="lg" className="rounded-xl">See our apps</Button>
            </div>
            <div className="chip-row">
              {["React Native","Swift","Kotlin","TypeScript","GraphQL","Firebase","Supabase","AWS","Vercel"].map((s) => (
                <div key={s} className="chip">{s}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR APPS (Logiquiz) */}
      <section id="apps" className="section">
        <div className="container grid-2 v-center gap-lg">
          <div>
            <Badge>Flagship App</Badge>
            <h2 className="h2 mt">Logiquiz — logic that plays beautifully</h2>
            <p className="muted-p">
              LogiQuiz helps you prepare for your APICS CPIM and CSCP certifications with stimulating, exam-style quizzes.
              Designed for supply chain professionals and students, LogiQuiz streamlines your learning through thematic
              exercises and instant feedback.
            </p>
            <ul className="checklist">
              {[
                "Thematic exercises: CPIM Parts 1 & 2, CSCP Modules 1–3",
                "Instant feedback and detailed explanations",
                "Track your scores and quiz history",
                "Works offline — no internet connection required",
                "Distraction-free interface",
              ].map((li, i) => (<li key={i}>• {li}</li>))}
            </ul>
            <p className="muted-p">
              Whether you’re preparing for your first certification or refreshing your knowledge, LogiQuiz makes supply chain
              exam prep simple and effective.
            </p>
            <p className="muted-p">
              Download it now and master APICS exam content — anytime, anywhere.
            </p>
            <div className="btn-row">
              <Button className="rounded-xl" onClick={() => setShowBeta(true)}>Join the Beta</Button>
              <Button variant="secondary" href="#contact" className="rounded-xl">Partner with us</Button>
              <Badge variant="secondary">Android • Tablet</Badge>
            </div>
          </div>
          <div className="center">
            <PhoneMock />
          </div>
        </div>
      </section>

      {/* Second App */}
      <section className="section">
        <div className="container grid-2 v-center gap-lg">
          <div>
            <Badge>Under development</Badge>
            <h2 className="h2 mt">Citoyenneté France — Quiz & Test</h2>
            <p className="muted-p">Préparez l'épreuve de citoyenneté française avec des quiz modernes, des explications claires et des séries thématiques.</p>
            <ul className="checklist">
              {[
                "Entraînements chronométrés et mode révision",
                "Statistiques de progression et séries ciblées",
                "Interface claire et accessible",
              ].map((li, i) => (<li key={i}>• {li}</li>))}
            </ul>
            <div className="btn-row">
              <Badge variant="secondary">Android • Tablet</Badge>
            </div>
          </div>
          <div className="center">
            <div className="placeholder-shot">Preview coming soon</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container grid-2 gap-lg">
          <div>
            <h2 className="h2">Let’s build something exceptional</h2>
            <p className="muted-p">
              Tell us about your product, timeline, and budget. We’ll get back within one business day.
            </p>
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
      </section>

      {Footer}

      {/* Beta Modal */}
      {showBeta && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setShowBeta(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Join the Beta</h3>
            <p className="modal-sub">Choose where you want to join:</p>
            <div className="modal-actions">
              <a className="btn btn-lg" href="https://groups.google.com/g/hyperion-logiquiz-beta" target="_blank" rel="noreferrer">Google Groups</a>
              <a className="btn btn-secondary btn-lg" href="https://play.google.com/store/apps/details?id=com.hyperion.logiquiz" target="_blank" rel="noreferrer">Google Play</a>
            </div>
            <button className="modal-close" onClick={() => setShowBeta(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------- STYLES -------------------- */
function StyleTag() {
  const css = `
:root{
  --main:#3080E5; --main-2:#1e5fb4; --text:#0f172a; --muted:#475569;
  --bg-edge:#E7EEF9; --glass: rgba(255,255,255,0.6); --border-soft: rgba(0,0,0,.06);
  --shadow: 0 10px 30px rgba(0,0,0,0.12); --radius: 16px; --gutter: clamp(16px, 5vw, 56px);
  --sectionY: clamp(72px, 12vh, 128px);
}
*{ box-sizing:border-box }
html, body, #root, .site{ width:100% }
html, body, .site{ overflow-x: clip }
body{
  margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial;
  background-color: var(--bg-edge); color: var(--text);
}
.site{
  min-height:100%; background-color: var(--bg-edge);
  background-image:
    radial-gradient(60% 60% at 70% 10%, rgba(48,128,229,0.16) 0%, var(--bg-edge) 75%),
    radial-gradient(40% 40% at 0% 90%,  rgba(48,128,229,0.12) 0%, var(--bg-edge) 80%);
  background-repeat:no-repeat; background-size: cover;
  border-right: 0.01px solid transparent;
}
.container, .nav-inner, .footer-inner{
  width:100%; max-width:1400px; padding-inline: var(--gutter); margin-inline:auto;
}
.section{ padding-block: var(--sectionY); position:relative }
.section + .section{ border-top: 1px solid rgba(0,0,0,.04) }
.nav{
  position:sticky; top:0; z-index:50; background: rgba(255,255,255,0.3); backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,0,0,.08);
}
.nav-inner{ height:64px; display:flex; align-items:center; justify-content:space-between }
.brand{ display:flex; align-items:center; gap:.5rem; text-decoration:none; color:inherit }
.brand-logo{ width:36px; height:36px; border-radius:14px; object-fit:cover; box-shadow: var(--shadow); background:#fff }
.brand-text{ font-weight:700; letter-spacing:.2px }
.muted{ color:#64748b }
.nav-links{ display:none; gap:1.25rem }
.nav-link{ font-size:.9rem; color: rgba(15,23,42,.8); text-decoration:none }
.nav-link:hover{ color:#0f172a }
.nav-cta{ display:flex; gap:.6rem }
@media (min-width:768px){ .nav-links{ display:flex } }
.btn{
  border:none; border-radius:12px; padding:.6rem 1rem; font-weight:600; cursor:pointer; text-decoration:none;
  display:inline-flex; align-items:center; justify-content:center;
  background:linear-gradient(135deg,var(--main),var(--main-2)); color:#fff; box-shadow: var(--shadow);
}
.btn-secondary{ background:#fff; color:#111; border:1px solid var(--border-soft) }
.btn-sm{ padding:.4rem .7rem; font-size:.85rem }
.btn-lg{ padding:.8rem 1.2rem; font-size:1rem }
.icon-gap{ display:inline-flex; align-items:center; gap:.5rem }
.badge{
  display:inline-flex; align-items:center; padding:.35rem .7rem; border-radius:999px; font-size:.8rem; font-weight:700;
  background: linear-gradient(90deg, var(--main), var(--main-2)); color:#fff;
}
.badge-secondary{ background:rgba(255,255,255,.85); color:#111; border:1px solid var(--border-soft) }
.h1{ font-size: clamp(2.2rem, 4vw, 3.5rem); line-height:1.1; margin:.3rem 0 0 }
.h2{ font-size: clamp(1.6rem, 2.5vw, 2.2rem); margin:0 }
.lead{ margin-top:1rem; max-width:46ch; color:#334155 }
.muted-p{ margin-top:.5rem; max-width:60ch; color: var(--muted) }
.grad-text{ background:linear-gradient(90deg,var(--main),var(--main-2)); -webkit-background-clip:text; background-clip:text; color:transparent }
.chip-row{ display:flex; flex-wrap:wrap; gap:.5rem; margin-top:1.2rem }
.chip{ border:1px solid var(--border-soft); background:#fff; padding:.35rem .8rem; border-radius:999px; font-size:.8rem }
.grid-2{ display:grid; gap:2rem }
@media (min-width:1024px){ .grid-2{ grid-template-columns: 1fr 1fr } }
.v-center{ align-items:center }
.gap-lg{ gap:2.5rem }
.center{ display:grid; place-items:center }
.placeholder-shot{
  width:100%; max-width:320px; height:560px; border-radius:24px; border:1px dashed rgba(0,0,0,.2);
  display:grid; place-items:center; color:#64748b; background:rgba(255,255,255,.6)
}
.card{ border:1px solid rgba(255,255,255,.3); background: var(--glass); backdrop-filter: blur(6px);
  border-radius: var(--radius); box-shadow: var(--shadow) }
.card-header{ padding:1.1rem 1.1rem 1rem }
.card-title{ font-weight:700 }
.card-description{ color: var(--muted); margin-top:.35rem }
.card-content{ padding: 0 1.1rem 1.1rem }
.form-col{ display:grid; gap:.6rem }
.input,.textarea{ width:100%; border:1px solid var(--border-soft); background:#fff; border-radius:12px; padding:.7rem .9rem; font-size:.95rem }
.textarea{ min-height:120px; resize:vertical }
.phone-wrap{
  max-width:320px; width:100%; aspect-ratio:9/19.5; border-radius:36px; border:1px solid rgba(255,255,255,0.2);
  padding:12px; background: linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.1));
  box-shadow: 0 10px 30px rgba(0,0,0,.2); backdrop-filter: blur(8px)
}
.phone-body{
  position:relative; height:100%; border-radius:28px; overflow:hidden;
  background: linear-gradient(180deg, rgba(55,90,110,.85), rgba(55,90,110,.65)); box-shadow: inset 0 0 0 1px rgba(255,255,255,.06)
}
.phone-notch{ width:96px; height:24px; border-radius:999px; background: rgba(255,255,255,.08); margin:12px auto 8px }
.appbar{ height:44px; display:flex; align-items:center; justify-content:space-between; padding: 0 14px; color:#e8eef2 }
.title{ font-size:16px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:80% }
.icon-btn{ background:transparent; border:0; color:inherit; display:inline-flex; align-items:center; justify-content:center }
.hearts{ display:flex; justify-content:center; gap:8px; margin:28px 0 16px }
.heart{ font-size:28px; line-height:1 }
.heart.full{ color:#ff4d4d } .heart.empty{ color:#ff4d4d; opacity:.6 }
.pill-list{ display:grid; gap:16px; padding:0 16px }
.pill-btn{ width:100%; padding:16px 22px; border-radius:999px; border:0; background:#0b0b0b; color:#8fb4c3; box-shadow: 0 8px 22px rgba(0,0,0,.35); font-size:16px; font-weight:600; text-align:center }
.pill-btn:active{ transform: translateY(1px) }
.ad-banner{ position:absolute; left:16px; right:16px; bottom:72px; background:#fff; color:#222; border-radius:10px; box-shadow: 0 8px 22px rgba(0,0,0,.35);
  padding:10px 14px; display:flex; align-items:center; gap:10px }
.ad-label{ position:absolute; top:-14px; left:50%; transform:translateX(-50%); background:#333; color:#fff; border-radius:6px; padding:2px 8px; font-size:12px }
.ad-body{ flex:1; font-size:14px }
.ad-dot{ width:16px; height:16px; border-radius:50%; background: linear-gradient(135deg, var(--main), var(--main-2)) }
.tabbar{ position:absolute; left:0; right:0; bottom:0; height:64px; background: rgba(0,0,0,.55); backdrop-filter: blur(6px);
  display:flex; align-items:center; justify-content:space-around; padding:6px 18px; color:#9fb7c4; border-top-left-radius:24px; border-top-right-radius:24px }
.tab-item{ display:flex; flex-direction:column; align-items:center; gap:6px; font-size:12px; text-decoration:none; color:inherit; opacity:.7 }
.tab-item.active{ opacity:1 }
.modal-overlay{ position:fixed; inset:0; background:rgba(0,0,0,.45); display:grid; place-items:center; z-index:100 }
.modal{ background:#fff; border-radius:16px; box-shadow: var(--shadow); padding:24px; max-width:520px; width:min(92vw,520px) }
.modal-title{ margin:0 0 6px; font-size:1.25rem; font-weight:700 }
.modal-sub{ margin:0 0 16px; color:#475569 }
.modal-actions{ display:flex; gap:.6rem; flex-wrap:wrap }
.modal-close{ margin-top:14px; background:transparent; border:0; color:#0f172a; opacity:.7; cursor:pointer }
.footer{ border-top:1px solid rgba(0,0,0,.08); padding:2rem 0 }
.footer-inner{ display:flex; flex-direction:column; align-items:center; gap:1rem }
.footer-links{ display:flex; gap:1rem }
.footer a{ text-decoration:none; color:inherit }
.footer a:hover{ text-decoration:underline }
@media (min-width:768px){ .footer-inner{ flex-direction:row; justify-content:space-between } }
.blog-list{ display:grid; grid-template-columns:1fr; gap:16px; margin-top:16px }
@media (min-width:860px){ .blog-list{ grid-template-columns:1fr 1fr } }
.blog-card{ border:1px solid rgba(0,0,0,.06); background:#fff; border-radius:14px; padding:16px; text-decoration:none; color:inherit; box-shadow: 0 6px 16px rgba(0,0,0,.06) }
.blog-card:hover{ transform: translateY(-1px); transition: transform .12s ease }
.blog-title{ margin:0 0 6px; font-weight:700; font-size:1.05rem }
.blog-meta{ font-size:.8rem; color:#64748b; margin-bottom:8px }
.blog-summary{ margin:0; color:#334155 }
.blog-article{ max-width: 860px }
.blog-content p{ line-height:1.65; color:#334155 }
.blog-content p + p{ margin-top: .8rem }
.tagbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin:18px 0 10px;
  flex-wrap:wrap;
}
.tags{ display:flex; flex-wrap:wrap; gap:8px }
.tag{
  border:1px solid rgba(0,0,0,.08);
  background:#fff;
  border-radius:999px;
  padding:.35rem .8rem;
  font-size:.85rem;
  cursor:pointer;
}
.tag:hover{ border-color: rgba(0,0,0,.16) }
.tag-active{
  border-color: transparent;
  color:#fff;
  background: linear-gradient(135deg, var(--main), var(--main-2));
  box-shadow: 0 6px 14px rgba(0,0,0,.12);
}
.tag-actions{ display:flex; align-items:center; gap:8px }
.tag-clear{
  border:none;
  background:transparent;
  color:#334155;
  opacity:.8;
  cursor:pointer;
}
.tag-clear:disabled{ opacity:.4; cursor:default }
`;
  return <style>{css}</style>;
}

export default App;
