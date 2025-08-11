import { motion } from "framer-motion";
import { Sparkles, Settings, GraduationCap, BarChart2, Trophy } from "lucide-react";

// Phone Mockup — reproduces provided screenshot closely
function PhoneMock() {
  return (
    <div className="phone-wrap">
      <div className="phone-body">
        {/* status notch */}
        <div className="phone-notch" />

        {/* App bar */}
        <div className="appbar">
          <div className="title" title="CertQuiz – CPIM & CSCP Practice">CertQuiz – CPIM & CSCP Prac…</div>
          <button className="icon-btn" aria-label="settings"><Settings size={18} /></button>
        </div>

        {/* Hearts */}
        <div className="hearts" aria-label="lives">
          <span className="heart full">♥</span>
          <span className="heart full">♥</span>
          <span className="heart full">♥</span>
          <span className="heart full">♥</span>
          <span className="heart empty">♡</span>
        </div>

        {/* Menu pills */}
        <div className="pill-list">
          {['CPIM Training','CSCP Training','CSCT Training','CLTD Training'].map((label) => (
            <button key={label} className="pill-btn">{label}</button>
          ))}
        </div>

        {/* Ad banner */}
        <div className="ad-banner">
          <div className="ad-label">Test Ad</div>
          <div className="ad-body">This is a 468x60 test ad.</div>
          <div className="ad-dot" aria-hidden />
        </div>

        {/* Bottom nav */}
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

export default function HyperionDevStudio() {
  return (
    <div className="site">
      <StyleTag />
      <header className="nav">
        <div className="nav-inner">
          <span className="brand-icon"><Sparkles size={18} /></span>
          <span className="brand-text">Hyperion Dev Studio</span>
        </div>
      </header>
      <section className="section center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <PhoneMock />
        </motion.div>
      </section>
    </div>
  );
}

function StyleTag() {
  return (
    <style>{`
:root{ --main:#3080E5; --main-2:#1e5fb4; }
.site { background: linear-gradient(180deg,#5b7483,#475f6c); min-height: 100vh; color: white; }
.nav { padding: 1rem; background: rgba(255,255,255,0.08); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(255,255,255,.15); }
.nav-inner { display: flex; align-items: center; gap: .5rem; }
.brand-icon { background: linear-gradient(135deg,var(--main),var(--main-2)); border-radius: 12px; padding: .3rem; color: white; display: inline-flex; }
.brand-text { font-weight: 700; letter-spacing: .2px; }
.section.center { display: grid; place-items: center; padding: 2rem 1rem; }

.phone-wrap { max-width: 320px; width: 100%; aspect-ratio: 9/19.5; border-radius: 36px; border: 1px solid rgba(255,255,255,0.2); padding: 12px; background: linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.1)); box-shadow: 0 10px 30px rgba(0,0,0,.2); backdrop-filter: blur(8px); }
.phone-body { position: relative; height: 100%; border-radius: 28px; overflow: hidden; background: linear-gradient(180deg, rgba(55,90,110,.85), rgba(55,90,110,.65)); box-shadow: inset 0 0 0 1px rgba(255,255,255,.06); }
.phone-notch { width: 96px; height: 24px; border-radius: 999px; background: rgba(255,255,255,.08); margin: 12px auto 8px; }
.appbar { height: 44px; display:flex; align-items:center; justify-content: space-between; padding: 0 14px; color: #e8eef2; }
.title { font-size: 16px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%; }
.icon-btn { background: transparent; border: 0; color: inherit; display: inline-flex; align-items: center; justify-content: center; }
.hearts { display:flex; justify-content: center; gap: 8px; margin: 28px 0 16px; }
.heart { font-size: 28px; line-height: 1; }
.heart.full { color: #ff4d4d; }
.heart.empty { color: #ff4d4d; opacity: .6; }
.pill-list { display: grid; gap: 16px; padding: 0 16px; }
.pill-btn { width: 100%; padding: 16px 22px; border-radius: 999px; border: 0; background: #0b0b0b; color: #8fb4c3; box-shadow: 0 8px 22px rgba(0,0,0,.35); font-size: 16px; font-weight: 600; text-align: center; }
.pill-btn:active { transform: translateY(1px); }
.ad-banner { position: absolute; left: 16px; right: 16px; bottom: 72px; background: #fff; color: #222; border-radius: 10px; box-shadow: 0 8px 22px rgba(0,0,0,.35); padding: 10px 14px; display: flex; align-items: center; gap: 10px; }
.ad-label { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #333; color: #fff; border-radius: 6px; padding: 2px 8px; font-size: 12px; }
.ad-body { flex: 1; font-size: 14px; }
.ad-dot { width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(135deg,var(--main),var(--main-2)); }
.tabbar { position: absolute; left: 0; right: 0; bottom: 0; height: 64px; background: rgba(0,0,0,.55); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: space-around; padding: 6px 18px; color: #9fb7c4; border-top-left-radius: 24px; border-top-right-radius: 24px; }
.tab-item { display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: 12px; text-decoration: none; color: inherit; opacity: .7; }
.tab-item.active { opacity: 1; }
    `}</style>
  );
}