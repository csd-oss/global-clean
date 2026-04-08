// /1 — "Nordic Clarity"
// Aesthetic: Swiss editorial grid. White, forest green, Fraunces italic + Plus Jakarta Sans.
// Giant muted section numbers, left-aligned, whitespace IS the design.

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300;1,9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');`;

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#fff;color:#1a1a1a;font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:'Fraunces',Georgia,serif;letter-spacing:-0.03em;line-height:1.08}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}

/* Layout */
.wrap{max-width:1140px;margin:0 auto;padding:0 48px}
@media(max-width:768px){.wrap{padding:0 24px}}

/* Nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(255,255,255,0.95);border-bottom:1px solid #e2e4df;backdrop-filter:blur(10px)}
.nav-row{display:flex;align-items:center;justify-content:space-between;height:64px}
.logo{display:flex;align-items:center;gap:10px;font-family:'Fraunces',serif;font-size:21px;font-style:italic;font-weight:300;color:#1a1a1a}
.logo-dot{width:8px;height:8px;border-radius:50%;background:#2d5a27;flex-shrink:0}
.btn-outline{display:inline-flex;align-items:center;padding:9px 20px;border:1.5px solid #2d5a27;color:#2d5a27;font-size:13px;font-weight:600;letter-spacing:0.02em;transition:background .18s,color .18s;white-space:nowrap}
.btn-outline:hover{background:#2d5a27;color:#fff}

/* Hero */
.hero{min-height:100vh;display:flex;align-items:center;padding-top:64px;background:#fff}
.hero-body{padding:88px 0 80px}
.hero-over{font-size:11px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:#2d5a27;margin-bottom:20px}
.hero-rule{width:40px;height:2px;background:#2d5a27;margin-bottom:24px}
.hero-h1{font-size:clamp(3rem,7.5vw,6.8rem);font-weight:300;font-style:italic;line-height:1.0;margin-bottom:28px}
.hero-h1 em{font-style:normal;font-weight:600;color:#2d5a27}
.hero-sub{font-size:18px;color:#6b7069;max-width:460px;line-height:1.7;margin-bottom:36px}
.hero-cta-row{display:flex;align-items:center;gap:20px;flex-wrap:wrap}
.hero-badges{display:flex;flex-wrap:wrap;gap:10px;margin-top:48px}
.badge{display:inline-flex;align-items:center;gap:7px;padding:8px 14px;border:1px solid #e2e4df;font-size:13px;color:#6b7069}
.badge-dot{width:5px;height:5px;border-radius:50%;background:#2d5a27;flex-shrink:0}

/* Sections */
.section{padding:96px 0}
.section-alt{background:#f6f7f5}
.sec-grid{display:grid;grid-template-columns:120px 1fr;gap:0 56px;align-items:start}
.sec-num{font-family:'Fraunces',serif;font-size:96px;color:#e8eae5;line-height:0.9;font-weight:600;user-select:none;position:sticky;top:80px}
.sec-label{font-size:11px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:#2d5a27;margin-bottom:10px}
.sec-title{font-size:clamp(2rem,3.5vw,3rem);font-weight:300;font-style:italic;margin-bottom:44px}

/* Services grid */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.card{padding:32px;border:1px solid #e2e4df;border-top:2px solid #2d5a27;background:#fff}
.card-tag{font-size:10px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#c0c4bc;margin-bottom:20px}
.card-title{font-family:'Fraunces',serif;font-size:21px;font-style:italic;font-weight:300;margin-bottom:10px;letter-spacing:-0.02em}
.card-desc{font-size:14px;color:#6b7069;line-height:1.65;margin-bottom:18px}
.card-list{list-style:none}
.card-list li{font-size:13px;color:#3d3d3d;padding:7px 0;border-top:1px solid #f0f0ee;display:flex;align-items:center;gap:8px}
.card-list li::before{content:'';width:4px;height:4px;border-radius:50%;background:#2d5a27;flex-shrink:0}

/* Steps */
.steps{display:flex;flex-direction:column;gap:0}
.step{display:grid;grid-template-columns:52px 1fr;gap:0 28px;padding-bottom:48px;position:relative}
.step:last-child{padding-bottom:0}
.step-circle{width:52px;height:52px;border:1.5px solid #2d5a27;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-size:20px;font-style:italic;color:#2d5a27;background:#fff;position:relative;z-index:1;flex-shrink:0}
.step-line{position:absolute;top:52px;left:26px;bottom:0;width:1px;background:repeating-linear-gradient(to bottom,#2d5a27 0,#2d5a27 5px,transparent 5px,transparent 12px);opacity:.25}
.step:last-child .step-line{display:none}
.step-body{padding-top:12px}
.step-title{font-family:'Fraunces',serif;font-size:22px;font-style:italic;font-weight:300;margin-bottom:8px;letter-spacing:-0.02em}
.step-desc{font-size:14px;color:#6b7069;line-height:1.7}

/* CTA */
.cta-sec{background:#2d5a27;padding:80px 0}
.cta-row{display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap}
.cta-left{}
.cta-h2{font-family:'Fraunces',serif;font-size:clamp(2rem,4vw,3.2rem);font-style:italic;font-weight:300;color:#fff;margin-bottom:10px;letter-spacing:-0.03em}
.cta-sub{color:rgba(255,255,255,.65);font-size:16px}
.cta-contacts{margin-top:16px;display:flex;flex-direction:column;gap:4px}
.cta-contact-item{color:rgba(255,255,255,.5);font-size:13px}
.btn-white{display:inline-flex;align-items:center;padding:16px 32px;background:#fff;color:#2d5a27;font-size:15px;font-weight:600;white-space:nowrap;transition:background .18s}
.btn-white:hover{background:#f0ede6}

/* Footer */
footer{background:#1a1a1a;padding:36px 0}
.foot-row{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.foot-brand{font-family:'Fraunces',serif;font-size:19px;font-style:italic;font-weight:300;color:#fff}
.foot-info{display:flex;gap:24px;flex-wrap:wrap}
.foot-info a,.foot-info span{font-size:13px;color:#6b7069;transition:color .15s}
.foot-info a:hover{color:#9aaa98}
.foot-copy{font-size:12px;color:#3d3d3d;margin-top:16px;text-align:center;border-top:1px solid #2a2a2a;padding-top:16px}

/* Animations */
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
[data-a]{opacity:0}
[data-a].vis{animation:fadeUp .7s cubic-bezier(.16,1,.3,1) both}
[data-a][data-d="1"].vis{animation-delay:.1s}
[data-a][data-d="2"].vis{animation-delay:.2s}
[data-a][data-d="3"].vis{animation-delay:.32s}

/* Responsive */
@media(max-width:900px){
  .sec-grid{grid-template-columns:1fr}
  .sec-num{font-size:56px;position:static;margin-bottom:8px}
  .cards{grid-template-columns:1fr}
  .cta-row{flex-direction:column;align-items:flex-start}
}
`;

const SCROLL_JS = `(function(){if(typeof IntersectionObserver==='undefined')return;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});document.querySelectorAll('[data-a]').forEach(function(el){io.observe(el)})})();`;

export default function Page1() {
  return (
    <>
      <style>{FONTS}</style>
      <style>{CSS}</style>

      {/* Nav */}
      <nav className="nav">
        <div className="wrap">
          <div className="nav-row">
            <a href="/1" className="logo"><span className="logo-dot" />Global Clean</a>
            <a href="#contact" className="btn-outline">Book Now</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-body">
              <p className="hero-over">Bratislava &mdash; Professional Cleaning</p>
              <div className="hero-rule" />
              <h1 className="hero-h1">Professional<br /><em>Cleaning</em><br />in Bratislava</h1>
              <p className="hero-sub">Reliable, thorough, and fairly priced. We care for your home so you can focus on what matters most.</p>
              <div className="hero-cta-row">
                <a href="#contact" className="btn-outline" style={{padding:'14px 28px',fontSize:'15px'}}>Get a Free Quote</a>
              </div>
              <div className="hero-badges">
                <span className="badge"><span className="badge-dot" />Free delivery in Bratislava</span>
                <span className="badge"><span className="badge-dot" />VAT-free prices</span>
                <span className="badge"><span className="badge-dot" />Satisfaction guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="sec-grid">
              <div className="sec-num" aria-hidden="true">01</div>
              <div>
                <p className="sec-label">What we offer</p>
                <h2 className="sec-title">Our Services</h2>
                <div className="cards">
                  {[
                    {tag:'01 / Apartment',title:'Regular Cleaning',desc:'For 1–6+ room apartments. Includes all rooms, kitchen, and bathroom.',items:['Bedrooms & living room','Kitchen & appliances','Bathroom & WC','Vacuuming & floor wash']},
                    {tag:'02 / Windows',title:'Window Cleaning',desc:'Professional cleaning of all window types — standard to panoramic.',items:['All window types','Inside & outside','Shopfronts & balconies','Radiator panels']},
                    {tag:'03 / Extras',title:'Additional Services',desc:'Special care beyond the standard — ovens, fridges, ironing, and more.',items:['Appliance cleaning','Dishwashing','Ironing service','Pet bedding']},
                  ].map((s,i) => (
                    <article key={i} className="card" data-a data-d={String(i+1)}>
                      <p className="card-tag">{s.tag}</p>
                      <h3 className="card-title">{s.title}</h3>
                      <p className="card-desc">{s.desc}</p>
                      <ul className="card-list">{s.items.map(it => <li key={it}>{it}</li>)}</ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section section-alt" id="how-it-works">
          <div className="wrap">
            <div className="sec-grid">
              <div className="sec-num" aria-hidden="true">02</div>
              <div>
                <p className="sec-label">The process</p>
                <h2 className="sec-title">How It Works</h2>
                <div className="steps">
                  {[
                    {n:'1',title:'Choose a Service',desc:'Use our price calculator to select services and get an instant estimate.'},
                    {n:'2',title:'Send a Request',desc:'Fill in the contact form with your preferred date and address. We respond within 24 hours.'},
                    {n:'3',title:'We Clean',desc:'Our team arrives on time and takes thorough care of your home.'},
                  ].map(s => (
                    <div key={s.n} className="step" data-a>
                      <div>
                        <div className="step-circle">{s.n}</div>
                        <div className="step-line" aria-hidden="true" />
                      </div>
                      <div className="step-body">
                        <h3 className="step-title">{s.title}</h3>
                        <p className="step-desc">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section className="cta-sec" id="contact">
          <div className="wrap">
            <div className="cta-row">
              <div className="cta-left">
                <h2 className="cta-h2">Ready for a<br />spotless home?</h2>
                <p className="cta-sub">We respond to every request within 24 hours.</p>
                <div className="cta-contacts">
                  <span className="cta-contact-item">+421 XXX XXX XXX</span>
                  <span className="cta-contact-item">info@globalclean.sk</span>
                  <span className="cta-contact-item">Mon–Fri: 8:00–18:00</span>
                </div>
              </div>
              <a href="mailto:info@globalclean.sk" className="btn-white">Book Your Cleaning</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-row">
            <span className="foot-brand">Global Clean</span>
            <div className="foot-info">
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
