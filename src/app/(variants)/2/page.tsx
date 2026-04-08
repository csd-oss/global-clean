// /2 — "Warm Terra"
// Aesthetic: Mediterranean artisan warmth. Parchment + terracotta, Playfair Display + Lora (full serif).
// Wavy SVG dividers, split hero with CSS art, staggered card borders.

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');`;

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#f7edd8;color:#5c3d2e;font-family:'Lora',Georgia,serif;font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:'Playfair Display',Georgia,serif;line-height:1.1}
a{text-decoration:none;color:inherit}

/* Layout */
.wrap{max-width:1120px;margin:0 auto;padding:0 48px}
@media(max-width:768px){.wrap{padding:0 24px}}

/* Nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(251,246,237,.96);border-bottom:1px solid rgba(196,98,58,.15);backdrop-filter:blur(10px)}
.nav-row{display:flex;align-items:center;justify-content:space-between;height:68px}
.logo{font-family:'Playfair Display',serif;font-size:22px;font-style:italic;color:#5c3d2e}
.nav-btn{display:inline-flex;align-items:center;padding:10px 22px;background:#c4623a;color:#fbf6ed;font-family:'Lora',serif;font-size:14px;border-radius:2px;transition:background .2s;white-space:nowrap}
.nav-btn:hover{background:#a84f2c}

/* Hero */
.hero{min-height:100vh;display:grid;grid-template-columns:55fr 45fr;padding-top:68px}
.hero-text{display:flex;flex-direction:column;justify-content:center;padding:72px 56px 72px 0;background:#f7edd8}
.hero-over{font-family:'Lora',serif;font-size:12px;font-style:italic;letter-spacing:0.16em;text-transform:uppercase;color:#c4623a;opacity:.75;margin-bottom:20px}
.hero-h1{font-size:clamp(2.8rem,6vw,5.5rem);font-weight:400;color:#5c3d2e;margin-bottom:24px;line-height:1.05}
.hero-h1 em{font-weight:700;color:#c4623a}
.hero-sub{font-size:17px;color:#7a6558;line-height:1.75;max-width:420px;margin-bottom:36px}
.hero-cta{display:inline-flex;align-items:center;gap:10px;padding:15px 32px;background:#c4623a;color:#fbf6ed;font-family:'Lora',serif;font-size:15px;border-radius:2px;transition:background .2s;white-space:nowrap}
.hero-cta:hover{background:#a84f2c}
.hero-cta-arrow{font-size:18px}
.hero-badges{display:flex;flex-wrap:wrap;gap:10px;margin-top:36px}
.badge{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border:1px solid rgba(196,98,58,.25);font-size:12px;font-style:italic;color:#7a6558;border-radius:1px}
.badge::before{content:'◆';font-size:8px;color:#c4623a;font-style:normal}

/* Art side */
.hero-art{background:#ebe0c8;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.art-wrap{position:relative;width:300px;height:300px}
.art-c{position:absolute;border-radius:50%;border:2px solid rgba(196,98,58,.3)}
.art-c1{inset:0;background:rgba(196,98,58,.08)}
.art-c2{inset:30px;border:3px solid rgba(196,98,58,.5)}
.art-c3{inset:70px;background:rgba(196,98,58,.15)}
.art-c4{inset:110px;border:2px solid rgba(92,61,46,.3)}
.art-c5{inset:140px;background:#c4623a}
.art-leaf{position:absolute;top:10%;right:10%;width:60px;height:90px;border-radius:50% 0 50% 0;background:rgba(122,140,118,.4);transform:rotate(25deg)}
.art-leaf2{position:absolute;bottom:12%;left:8%;width:45px;height:70px;border-radius:0 50% 0 50%;background:rgba(122,140,118,.3);transform:rotate(-20deg)}

/* Wave divider */
.wave-wrap{position:relative;line-height:0;background:#f7edd8}
.wave-wrap svg{display:block;width:100%}

/* Sections */
.section{padding:88px 0;position:relative}
.sec-head{text-align:center;margin-bottom:56px}
.sec-over{font-family:'Lora',serif;font-size:12px;font-style:italic;letter-spacing:.16em;text-transform:uppercase;color:#c4623a;opacity:.7;margin-bottom:12px}
.sec-title{font-size:clamp(2rem,3.5vw,2.8rem);font-weight:400;color:#5c3d2e}
.sec-rule{width:40px;height:2px;background:linear-gradient(90deg,#c4623a,rgba(196,98,58,0));margin:16px auto 0}

/* Service cards — staggered */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;align-items:start}
.card{background:#fbf6ed;padding:36px 28px;border-left:3px solid #c4623a;transition:transform .25s,box-shadow .25s}
.card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(92,61,46,.1)}
.card:nth-child(2){margin-top:32px}
.card:nth-child(3){margin-top:16px}
.card-icon{width:40px;height:40px;border-radius:50%;background:rgba(196,98,58,.12);display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:20px}
.card-title{font-size:21px;color:#5c3d2e;margin-bottom:10px}
.card-desc{font-size:14px;color:#7a6558;line-height:1.7;margin-bottom:18px}
.card-list{list-style:none}
.card-list li{font-size:13px;color:#5c3d2e;padding:7px 0;border-top:1px solid rgba(196,98,58,.12);display:flex;align-items:center;gap:8px;font-style:italic}
.card-list li::before{content:'—';color:#c4623a;flex-shrink:0}

/* Steps — horizontal timeline */
.steps-row{display:grid;grid-template-columns:repeat(3,1fr);gap:0;position:relative}
.steps-row::before{content:'';position:absolute;top:30px;left:calc(100%/6);right:calc(100%/6);height:1px;background:repeating-linear-gradient(90deg,#c4623a 0,#c4623a 8px,transparent 8px,transparent 18px);opacity:.35}
.step{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 24px}
.step-num{width:60px;height:60px;border-radius:50%;background:#c4623a;color:#fbf6ed;font-family:'Playfair Display',serif;font-size:22px;font-style:italic;display:flex;align-items:center;justify-content:center;margin-bottom:20px;flex-shrink:0;position:relative;z-index:1}
.step-title{font-size:20px;color:#5c3d2e;margin-bottom:10px}
.step-desc{font-size:14px;color:#7a6558;line-height:1.65}

/* CTA */
.cta-sec{background:#c4623a;padding:80px 0;text-align:center}
.cta-title{font-size:clamp(2rem,4vw,3.2rem);color:#fbf6ed;margin-bottom:14px}
.cta-sub{color:rgba(251,246,237,.7);font-size:17px;font-style:italic;margin-bottom:36px}
.cta-contact-row{display:flex;justify-content:center;gap:32px;flex-wrap:wrap;margin-top:28px}
.cta-contact-item{color:rgba(251,246,237,.65);font-size:14px;font-style:italic}
.btn-cream{display:inline-flex;align-items:center;padding:16px 36px;background:#fbf6ed;color:#c4623a;font-family:'Playfair Display',serif;font-size:16px;font-style:italic;border-radius:2px;transition:background .2s;white-space:nowrap}
.btn-cream:hover{background:#f0e6d0}

/* Footer */
footer{background:#5c3d2e;padding:40px 0}
.foot-row{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.foot-brand{font-family:'Playfair Display',serif;font-size:20px;font-style:italic;color:#fbf6ed}
.foot-links{display:flex;gap:24px;flex-wrap:wrap}
.foot-links a,.foot-links span{font-size:13px;color:rgba(251,246,237,.5);font-style:italic;transition:color .15s}
.foot-links a:hover{color:rgba(251,246,237,.8)}
.foot-copy{text-align:center;font-size:12px;color:rgba(251,246,237,.3);padding-top:20px;margin-top:20px;border-top:1px solid rgba(251,246,237,.08);font-style:italic}

/* Animations */
@keyframes riseWarm{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
[data-a]{opacity:0}
[data-a].vis{animation:riseWarm .75s cubic-bezier(.16,1,.3,1) both}
[data-a][data-d="1"].vis{animation-delay:.1s}
[data-a][data-d="2"].vis{animation-delay:.22s}
[data-a][data-d="3"].vis{animation-delay:.34s}

/* Responsive */
@media(max-width:900px){
  .hero{grid-template-columns:1fr}
  .hero-text{padding:48px 0}
  .hero-art{height:280px;padding-top:0}
  .cards{grid-template-columns:1fr}
  .card:nth-child(2),.card:nth-child(3){margin-top:0}
  .steps-row{grid-template-columns:1fr;gap:32px}
  .steps-row::before{display:none}
}
`;

const WAVE_SVG = `<svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,0 C240,60 480,60 720,30 C960,0 1200,0 1440,40 L1440,60 L0,60 Z" fill="#ebe0c8"/></svg>`;
const WAVE_SVG_2 = `<svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,40 C360,0 720,60 1080,20 C1260,0 1380,30 1440,50 L1440,60 L0,60 Z" fill="#f7edd8"/></svg>`;

const SCROLL_JS = `(function(){if(typeof IntersectionObserver==='undefined')return;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});document.querySelectorAll('[data-a]').forEach(function(el){io.observe(el)})})();`;

export default function Page2() {
  return (
    <>
      <style>{FONTS}</style>
      <style>{CSS}</style>

      <nav className="nav">
        <div className="wrap">
          <div className="nav-row">
            <a href="/2" className="logo">Global Clean</a>
            <a href="#contact" className="nav-btn">Book Now</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-text wrap" style={{maxWidth:'none',paddingLeft:'max(48px, calc((100vw - 1120px)/2 + 48px))'}}>
            <p className="hero-over">Bratislava &mdash; Professional Cleaning</p>
            <h1 className="hero-h1">The art of a<br /><em>truly clean</em><br />home.</h1>
            <p className="hero-sub">Reliable, thorough, and fairly priced. We take care of your home so you can focus on what matters most.</p>
            <a href="#contact" className="hero-cta">Book a Cleaning <span className="hero-cta-arrow">→</span></a>
            <div className="hero-badges">
              <span className="badge">Free delivery in Bratislava</span>
              <span className="badge">VAT-free prices</span>
              <span className="badge">Satisfaction guarantee</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-wrap">
              <div className="art-c art-c1" />
              <div className="art-c art-c2" />
              <div className="art-c art-c3" />
              <div className="art-c art-c4" />
              <div className="art-c art-c5" />
              <div className="art-leaf" />
              <div className="art-leaf2" />
            </div>
          </div>
        </section>

        {/* Wave divider */}
        <div className="wave-wrap" dangerouslySetInnerHTML={{ __html: WAVE_SVG }} />

        {/* Services */}
        <section className="section" id="services" style={{background:'#ebe0c8'}}>
          <div className="wrap">
            <div className="sec-head" data-a>
              <p className="sec-over">What we offer</p>
              <h2 className="sec-title">Our Services</h2>
              <div className="sec-rule" />
            </div>
            <div className="cards">
              {[
                {icon:'🏠',title:'Apartment Cleaning',desc:'Regular or one-time cleaning for 1–6+ room apartments. All rooms, kitchen, and bathroom.',items:['Bedrooms & living room','Kitchen & appliances','Bathroom & WC','Vacuuming & floor wash']},
                {icon:'🪟',title:'Window Cleaning',desc:'Professional cleaning of all window types — from standard to panoramic and shopfronts.',items:['All window types','Inside & outside','Shopfronts & balconies','Radiator panels']},
                {icon:'✨',title:'Additional Services',desc:'Special cleaning beyond standard — ovens, fridges, ironing, and much more.',items:['Appliance cleaning','Dishwashing','Ironing service','Pet bedding']},
              ].map((s,i) => (
                <article key={i} className="card" data-a data-d={String(i+1)}>
                  <div className="card-icon">{s.icon}</div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-desc">{s.desc}</p>
                  <ul className="card-list">{s.items.map(it => <li key={it}>{it}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Wave divider 2 */}
        <div className="wave-wrap" style={{background:'#ebe0c8'}} dangerouslySetInnerHTML={{ __html: WAVE_SVG_2 }} />

        {/* How it works */}
        <section className="section" id="how-it-works" style={{background:'#f7edd8'}}>
          <div className="wrap">
            <div className="sec-head" data-a>
              <p className="sec-over">Simple process</p>
              <h2 className="sec-title">How It Works</h2>
              <div className="sec-rule" />
            </div>
            <div className="steps-row">
              {[
                {n:'1',title:'Choose a Service',desc:'Use our price calculator to select services and get an instant estimate.'},
                {n:'2',title:'Send a Request',desc:'Fill in your preferred date and address. We respond within 24 hours.'},
                {n:'3',title:'We Clean',desc:'Our team arrives on time and takes thorough care of your home.'},
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
            <h2 className="cta-title">Ready for a spotless home?</h2>
            <p className="cta-sub">"We respond to every request within 24 hours."</p>
            <a href="mailto:info@globalclean.sk" className="btn-cream">Book Your Cleaning</a>
            <div className="cta-contact-row">
              <span className="cta-contact-item">+421 XXX XXX XXX</span>
              <span className="cta-contact-item">info@globalclean.sk</span>
              <span className="cta-contact-item">Mon–Fri: 8:00–18:00</span>
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
