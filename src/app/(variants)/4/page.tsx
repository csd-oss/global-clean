// /4 — "Cloud Luxe"
// Aesthetic: Dreamy premium softness. Ivory, dusty rose, sage green.
// Gilda Display (elegant serif) + Nunito (rounded sans). CSS mesh gradient, glassmorphism cards, floating pills.

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Gilda+Display&family=Nunito:wght@300;400;600&display=swap');`;

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#fdfaf5;color:#3d3530;font-family:'Nunito',system-ui,sans-serif;font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3{font-family:'Gilda Display',Georgia,serif;line-height:1.15}
a{text-decoration:none;color:inherit}

/* Mesh background */
body::before{content:'';position:fixed;inset:0;z-index:-1;
  background:
    radial-gradient(ellipse at 15% 8%,rgba(232,180,184,.35) 0%,transparent 55%),
    radial-gradient(ellipse at 85% 15%,rgba(184,201,181,.28) 0%,transparent 50%),
    radial-gradient(ellipse at 50% 80%,rgba(245,232,210,.4) 0%,transparent 55%),
    radial-gradient(ellipse at 90% 70%,rgba(232,180,184,.2) 0%,transparent 45%),
    #fdfaf5;
  animation:meshDrift 22s ease-in-out infinite alternate}
@keyframes meshDrift{0%{background-position:0% 0%}100%{background-position:3% 5%}}

/* Layout */
.wrap{max-width:1120px;margin:0 auto;padding:0 48px}
@media(max-width:768px){.wrap{padding:0 24px}}

/* Nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(253,250,245,.85);border-bottom:1px solid rgba(232,180,184,.25);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
.nav-row{display:flex;align-items:center;justify-content:space-between;height:64px}
.logo{font-family:'Gilda Display',serif;font-size:22px;color:#3d3530;display:flex;align-items:center;gap:10px}
.logo-pip{width:6px;height:6px;border-radius:50%;background:linear-gradient(135deg,#e8b4b8,#b8c9b5)}
.nav-btn{display:inline-flex;align-items:center;padding:10px 24px;background:linear-gradient(135deg,#e8b4b8,#c47b84);color:#fff;font-family:'Nunito',sans-serif;font-size:14px;font-weight:600;border-radius:100px;box-shadow:0 4px 16px rgba(196,123,132,.25);transition:box-shadow .2s,transform .2s;white-space:nowrap}
.nav-btn:hover{box-shadow:0 6px 24px rgba(196,123,132,.40);transform:translateY(-1px)}

/* Hero */
.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:64px;text-align:center}
.hero-body{padding:72px 0;max-width:680px;margin:0 auto}
.hero-over{font-family:'Nunito',sans-serif;font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#c47b84;margin-bottom:20px;opacity:.8}
.hero-h1{font-size:clamp(3rem,7vw,6rem);color:#3d3530;margin-bottom:20px;font-weight:400}
.hero-h1 em{font-style:italic;background:linear-gradient(135deg,#c47b84 0%,#e8b4b8 50%,#8a9e87 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:18px;color:#7a6e68;line-height:1.75;max-width:480px;margin:0 auto 36px;font-weight:300}
.hero-cta{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;background:linear-gradient(135deg,#e8b4b8,#c47b84);color:#fff;font-family:'Nunito',sans-serif;font-size:16px;font-weight:600;border-radius:100px;box-shadow:0 6px 28px rgba(196,123,132,.30);transition:box-shadow .2s,transform .2s;white-space:nowrap}
.hero-cta:hover{box-shadow:0 10px 40px rgba(196,123,132,.45);transform:translateY(-2px)}
.hero-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:44px}
.badge{display:inline-flex;align-items:center;gap:6px;padding:8px 18px;background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.95);border-radius:100px;font-size:13px;color:#7a6e68;font-weight:400;box-shadow:0 4px 16px rgba(196,123,132,.08);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.badge-icon{font-size:13px}

/* Float animations for badges */
.badge:nth-child(1){animation:floatA 8s ease-in-out infinite}
.badge:nth-child(2){animation:floatB 9s ease-in-out infinite .8s}
.badge:nth-child(3){animation:floatA 7s ease-in-out infinite 1.6s}
@keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes floatB{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}

/* Sections */
.section{padding:88px 0}
.sec-head{text-align:center;margin-bottom:56px}
.sec-label{font-family:'Nunito',sans-serif;font-size:11px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#c47b84;margin-bottom:12px;opacity:.75}
.sec-title{font-size:clamp(2rem,4vw,3rem);color:#3d3530;margin-bottom:10px}
.sec-rule{width:48px;height:2px;background:linear-gradient(90deg,#e8b4b8,rgba(232,180,184,0));margin:14px auto 0}

/* Service cards — glassmorphism */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.card{background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.95);border-radius:24px;padding:36px 28px;box-shadow:0 8px 32px rgba(196,123,132,.09),0 2px 8px rgba(61,53,48,.05);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);transition:transform .3s,box-shadow .3s;animation:softEntrance .7s ease-out both}
.card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(196,123,132,.16),0 4px 16px rgba(61,53,48,.06)}
.card:nth-child(2){animation-delay:.12s}
.card:nth-child(3){animation-delay:.24s}
@keyframes softEntrance{from{opacity:0;transform:scale(.97) translateY(14px)}to{opacity:1;transform:scale(1) translateY(0)}}
.card-icon-wrap{width:52px;height:52px;border-radius:16px;background:linear-gradient(135deg,rgba(232,180,184,.3),rgba(184,201,181,.25));display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px}
.card-title{font-size:22px;color:#3d3530;margin-bottom:10px}
.card-desc{font-size:14px;color:#7a6e68;line-height:1.7;margin-bottom:18px;font-weight:300}
.card-divider{width:32px;height:1.5px;background:linear-gradient(90deg,#e8b4b8,rgba(232,180,184,0));margin-bottom:18px}
.card-list{list-style:none}
.card-list li{font-size:13px;color:#5a4f4b;padding:6px 0;display:flex;align-items:center;gap:8px}
.card-list li::before{content:'';width:5px;height:5px;border-radius:50%;background:linear-gradient(135deg,#e8b4b8,#b8c9b5);flex-shrink:0}

/* Steps */
.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;position:relative}
.steps-grid::before{content:'';position:absolute;top:36px;left:calc(100%/6);right:calc(100%/6);height:1px;background:linear-gradient(90deg,rgba(232,180,184,0),rgba(232,180,184,.5),rgba(184,201,181,.5),rgba(184,201,181,0))}
.step{display:flex;flex-direction:column;align-items:center;text-align:center}
.step-num{width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,.72);border:1.5px solid rgba(232,180,184,.5);display:flex;align-items:center;justify-content:center;font-family:'Gilda Display',serif;font-size:26px;color:#c47b84;margin-bottom:20px;box-shadow:0 4px 20px rgba(196,123,132,.12);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);position:relative;z-index:1}
.step-title{font-size:22px;color:#3d3530;margin-bottom:10px}
.step-desc{font-size:14px;color:#7a6e68;line-height:1.65;font-weight:300}

/* CTA */
.cta-sec{padding:80px 0;text-align:center}
.cta-card{background:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.95);border-radius:32px;padding:64px 48px;max-width:720px;margin:0 auto;box-shadow:0 16px 64px rgba(196,123,132,.12);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
.cta-h2{font-size:clamp(2rem,4vw,3.2rem);color:#3d3530;margin-bottom:14px}
.cta-sub{font-size:17px;color:#7a6e68;margin-bottom:32px;font-weight:300}
.cta-contacts{display:flex;justify-content:center;flex-wrap:wrap;gap:20px;margin-top:28px}
.cta-contact{display:flex;align-items:center;gap:6px;font-size:14px;color:#9a8e88}
.cta-pip{width:4px;height:4px;border-radius:50%;background:#e8b4b8;flex-shrink:0}

/* Footer */
footer{padding:40px 0;background:rgba(255,255,255,.5);border-top:1px solid rgba(232,180,184,.25);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.foot-row{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.foot-brand{font-family:'Gilda Display',serif;font-size:20px;color:#3d3530}
.foot-links{display:flex;gap:24px;flex-wrap:wrap}
.foot-links a,.foot-links span{font-size:13px;color:#9a8e88;transition:color .15s;font-weight:300}
.foot-links a:hover{color:#c47b84}
.foot-copy{text-align:center;font-size:12px;color:#c5bbb7;margin-top:20px;border-top:1px solid rgba(232,180,184,.12);padding-top:16px;font-weight:300}

/* Scroll animations */
@keyframes softUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
[data-a]{opacity:0}
[data-a].vis{animation:softUp .75s ease-out both}
[data-a][data-d="1"].vis{animation-delay:.1s}
[data-a][data-d="2"].vis{animation-delay:.22s}
[data-a][data-d="3"].vis{animation-delay:.34s}

/* Responsive */
@media(max-width:900px){
  .cards{grid-template-columns:1fr}
  .steps-grid{grid-template-columns:1fr;gap:24px}
  .steps-grid::before{display:none}
  .cta-card{padding:40px 24px}
}
`;

const SCROLL_JS = `(function(){if(typeof IntersectionObserver==='undefined')return;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});document.querySelectorAll('[data-a]').forEach(function(el){io.observe(el)})})();`;

export default function Page4() {
  return (
    <>
      <style>{FONTS}</style>
      <style>{CSS}</style>

      <nav className="nav">
        <div className="wrap">
          <div className="nav-row">
            <a href="/4" className="logo"><span className="logo-pip" />Global Clean</a>
            <a href="#contact" className="nav-btn">Book Now</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-body">
            <p className="hero-over">Bratislava — Professional Cleaning</p>
            <h1 className="hero-h1">Your home,<br /><em>beautifully</em> clean</h1>
            <p className="hero-sub">Reliable, thorough, and fairly priced. We care for your home so you can focus on what matters most.</p>
            <a href="#contact" className="hero-cta">✦ Book a Cleaning</a>
            <div className="hero-badges">
              <span className="badge"><span className="badge-icon">🚗</span>Free delivery in Bratislava</span>
              <span className="badge"><span className="badge-icon">✓</span>VAT-free prices</span>
              <span className="badge"><span className="badge-icon">★</span>Satisfaction guarantee</span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="sec-head" data-a>
              <p className="sec-label">What we offer</p>
              <h2 className="sec-title">Our Services</h2>
              <div className="sec-rule" />
            </div>
            <div className="cards">
              {[
                {icon:'🏠',title:'Apartment Cleaning',desc:'Regular or one-time cleaning for 1–6+ room apartments. All rooms, kitchen, and bathroom.',items:['Bedrooms & living room','Kitchen & appliances','Bathroom & WC','Vacuuming & mopping']},
                {icon:'🪟',title:'Window Cleaning',desc:'Professional cleaning of all window types — from standard to panoramic and shopfronts.',items:['All window types','Inside & outside','Shopfronts & balconies','Radiator panels']},
                {icon:'✨',title:'Additional Services',desc:'Special cleaning beyond standard — ovens, fridges, ironing, and more.',items:['Appliance cleaning','Dishwashing','Ironing service','Pet bedding']},
              ].map((s,i) => (
                <article key={i} className="card" data-a data-d={String(i+1)}>
                  <div className="card-icon-wrap">{s.icon}</div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-desc">{s.desc}</p>
                  <div className="card-divider" />
                  <ul className="card-list">{s.items.map(it => <li key={it}>{it}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section" id="how-it-works">
          <div className="wrap">
            <div className="sec-head" data-a>
              <p className="sec-label">Simple process</p>
              <h2 className="sec-title">How It Works</h2>
              <div className="sec-rule" />
            </div>
            <div className="steps-grid">
              {[
                {n:'1',title:'Choose a Service',desc:'Use our price calculator to select your services and get an instant estimate.'},
                {n:'2',title:'Send a Request',desc:'Fill in your preferred date and address. We respond within 24 hours.'},
                {n:'3',title:'We Clean',desc:'Our team arrives on time and takes thorough, loving care of your home.'},
              ].map((s,i) => (
                <div key={s.n} className="step" data-a data-d={String(i+1)}>
                  <div className="step-num">{s.n}</div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-sec" id="contact">
          <div className="wrap">
            <div className="cta-card" data-a>
              <h2 className="cta-h2">Ready for your perfect clean?</h2>
              <p className="cta-sub">We respond to every request within 24 hours.</p>
              <a href="mailto:info@globalclean.sk" className="nav-btn" style={{display:'inline-flex',fontSize:'16px',padding:'14px 36px'}}>Book Your Cleaning</a>
              <div className="cta-contacts">
                <span className="cta-contact"><span className="cta-pip" />+421 XXX XXX XXX</span>
                <span className="cta-contact"><span className="cta-pip" />info@globalclean.sk</span>
                <span className="cta-contact"><span className="cta-pip" />Mon–Fri: 8:00–18:00</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-row">
            <span className="foot-brand">Global Clean</span>
            <div className="foot-links">
              <a href="tel:+421000000000">+421 XXX XXX XXX</a>
              <a href="mailto:info@globalclean.sk">info@globalclean.sk</a>
              <span>Bratislava, Slovakia</span>
            </div>
          </div>
          <p className="foot-copy">© 2026 Global Clean. All rights reserved.</p>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: SCROLL_JS }} />
    </>
  );
}
