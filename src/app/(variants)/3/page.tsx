// /3 — "Brutalist Power"
// Aesthetic: Raw, graphic, uncompromising. Off-white, jet black, electric yellow.
// Bebas Neue (display) + Space Mono (body). border-radius:0 everywhere. Typography IS the design.

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');`;

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#f0ede6;color:#0a0a0a;font-family:'Space Mono',monospace;font-size:15px;line-height:1.6;-webkit-font-smoothing:antialiased;text-transform:uppercase;letter-spacing:0.02em}
h1,h2,h3,.display{font-family:'Bebas Neue',sans-serif;letter-spacing:0.04em;line-height:0.92;text-transform:uppercase}
a{text-decoration:none;color:inherit}
button{cursor:pointer;font-family:inherit}

/* Layout */
.wrap{max-width:1280px;margin:0 auto;padding:0 48px}
@media(max-width:768px){.wrap{padding:0 20px}}

/* Nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;background:#0a0a0a;border-bottom:4px solid #f5df00}
.nav-row{display:flex;align-items:center;justify-content:space-between;height:60px}
.logo{font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:.08em;color:#f5df00}
.logo span{color:#f0ede6}
.nav-btn{display:inline-flex;align-items:center;padding:8px 20px;background:#f5df00;color:#0a0a0a;font-family:'Space Mono',monospace;font-size:12px;font-weight:700;letter-spacing:.08em;border:none;transition:background .1s}
.nav-btn:hover{background:#fff}

/* Hero */
.hero{min-height:100vh;display:flex;align-items:center;background:#f0ede6;padding-top:60px;overflow:hidden;position:relative}
.hero-rule-top{position:absolute;top:60px;left:0;right:0;height:8px;background:#f5df00}
.hero::after{content:'CLEAN';position:absolute;right:-40px;top:50%;transform:translateY(-50%) rotate(90deg);font-family:'Bebas Neue',sans-serif;font-size:220px;color:rgba(10,10,10,.04);line-height:1;pointer-events:none;user-select:none;white-space:nowrap}
.hero-body{padding:80px 0;position:relative;z-index:1}
.hero-over{font-size:11px;font-weight:700;letter-spacing:.28em;color:#888;margin-bottom:20px}
.hero-h1{font-size:clamp(80px,14vw,160px);color:#0a0a0a;margin-bottom:0;animation:slideIn .3s cubic-bezier(.16,1,.3,1) both}
.hero-h1-outline{-webkit-text-stroke:3px #0a0a0a;color:transparent}
.hero-h1-yellow{background:#f5df00;padding:0 12px;display:inline-block;mix-blend-mode:multiply}
.hero-divider{width:100%;height:6px;background:#0a0a0a;margin:24px 0}
.hero-sub{font-size:13px;color:#555;max-width:520px;line-height:1.7;margin-bottom:32px}
.hero-cta-row{display:flex;align-items:center;gap:20px;flex-wrap:wrap}
.btn-black{display:inline-flex;align-items:center;padding:16px 36px;background:#0a0a0a;color:#f5df00;font-family:'Space Mono',monospace;font-size:13px;font-weight:700;letter-spacing:.1em;border:none;white-space:nowrap;transition:background .1s}
.btn-black:hover{background:#222}
.hero-note{font-size:11px;color:#888;letter-spacing:.08em}
.blink{display:inline-block;color:#f5df00;animation:blink 1s step-end infinite}

/* Section */
.section{padding:80px 0;border-top:3px solid #0a0a0a}
.sec-head{margin-bottom:48px}
.sec-num{font-family:'Bebas Neue',sans-serif;font-size:120px;color:#e0ddd6;line-height:1;user-select:none}
.sec-title{font-size:clamp(48px,6vw,80px);margin-top:-20px;position:relative;z-index:1}
.sec-sub{font-size:12px;color:#888;margin-top:16px;letter-spacing:.15em}

/* Services grid */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:3px solid #0a0a0a}
.card{padding:36px 28px;border-right:3px solid #0a0a0a;position:relative;overflow:hidden}
.card:last-child{border-right:none}
.card-num{font-family:'Bebas Neue',sans-serif;font-size:88px;color:rgba(10,10,10,.06);position:absolute;top:8px;right:12px;line-height:1;user-select:none}
.card-bar{width:100%;height:4px;background:#f5df00;margin-bottom:24px}
.card-title{font-size:clamp(28px,3vw,40px);margin-bottom:12px;position:relative;z-index:1}
.card-desc{font-size:12px;color:#555;line-height:1.7;margin-bottom:20px;font-style:italic;text-transform:none}
.card-list{list-style:none}
.card-list li{font-size:11px;color:#333;padding:7px 0;border-top:1px solid #d8d5ce;display:flex;align-items:center;gap:8px}
.card-list li::before{content:'//';color:#f5df00;font-weight:700;flex-shrink:0}

/* Steps */
.steps-wrap{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:3px solid #0a0a0a}
.step{padding:40px 28px;border-right:3px solid #0a0a0a;position:relative}
.step:last-child{border-right:none}
.step-num-big{font-family:'Bebas Neue',sans-serif;font-size:120px;color:rgba(10,10,10,.07);position:absolute;right:16px;bottom:-8px;line-height:1;user-select:none}
.step-label{font-size:11px;letter-spacing:.2em;color:#f5df00;background:#0a0a0a;display:inline-block;padding:4px 10px;margin-bottom:16px}
.step-title{font-size:clamp(28px,3vw,44px);margin-bottom:12px;position:relative;z-index:1}
.step-desc{font-size:12px;color:#555;line-height:1.7;text-transform:none;font-style:italic}

/* CTA */
.cta-sec{background:#f5df00;border-top:6px solid #0a0a0a;padding:80px 0}
.cta-inner{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;flex-wrap:wrap}
.cta-h2{font-size:clamp(56px,9vw,120px);color:#0a0a0a;line-height:.9}
.cta-right{display:flex;flex-direction:column;align-items:flex-start;gap:16px}
.cta-sub{font-size:12px;color:#555;letter-spacing:.12em;max-width:300px;font-style:italic;text-transform:none}
.btn-inv{display:inline-flex;align-items:center;padding:16px 36px;background:#0a0a0a;color:#f5df00;font-family:'Space Mono',monospace;font-size:13px;font-weight:700;letter-spacing:.1em;border:none;white-space:nowrap;transition:background .1s}
.btn-inv:hover{background:#333}
.cta-contacts{font-size:11px;color:#555;display:flex;flex-direction:column;gap:4px;letter-spacing:.08em}

/* Footer */
footer{background:#0a0a0a;padding:28px 0;border-top:4px solid #f5df00}
.foot-row{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.foot-brand{font-family:'Bebas Neue',sans-serif;font-size:22px;color:#f5df00;letter-spacing:.1em}
.foot-info{display:flex;gap:24px;flex-wrap:wrap}
.foot-info a,.foot-info span{font-size:11px;color:#555;letter-spacing:.08em;transition:color .15s}
.foot-info a:hover{color:#f5df00}
.foot-copy{font-size:10px;color:#333;letter-spacing:.1em;margin-top:16px;border-top:1px solid #1a1a1a;padding-top:12px}

/* Keyframes */
@keyframes slideIn{from{opacity:0;transform:translateX(-32px)}to{opacity:1;transform:translateX(0)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
[data-a]{opacity:0}
[data-a].vis{animation:fadeUp .4s cubic-bezier(.16,1,.3,1) both}
[data-a][data-d="1"].vis{animation-delay:.08s}
[data-a][data-d="2"].vis{animation-delay:.16s}
[data-a][data-d="3"].vis{animation-delay:.24s}

/* Responsive */
@media(max-width:900px){
  .cards,.steps-wrap{grid-template-columns:1fr}
  .card{border-right:none;border-bottom:3px solid #0a0a0a}
  .card:last-child{border-bottom:none}
  .step{border-right:none;border-bottom:3px solid #0a0a0a}
  .step:last-child{border-bottom:none}
  .cta-inner{flex-direction:column;align-items:flex-start}
}
`;

const SCROLL_JS = `(function(){if(typeof IntersectionObserver==='undefined')return;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -30px 0px'});document.querySelectorAll('[data-a]').forEach(function(el){io.observe(el)})})();`;

export default function Page3() {
  return (
    <>
      <style>{FONTS}</style>
      <style>{CSS}</style>

      <nav className="nav">
        <div className="wrap">
          <div className="nav-row">
            <a href="/3" className="logo">GLOBAL <span>CLEAN</span></a>
            <a href="#contact" className="nav-btn">BOOK NOW</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-rule-top" aria-hidden="true" />
          <div className="wrap">
            <div className="hero-body">
              <p className="hero-over">Bratislava // Professional Cleaning Service</p>
              <div className="hero-h1">
                <div className="display hero-h1" style={{fontSize:'clamp(80px,14vw,160px)'}}>
                  PRO<span className="hero-h1-outline">FES</span>
                </div>
                <div className="display hero-h1" style={{fontSize:'clamp(80px,14vw,160px)'}}>
                  <span className="hero-h1-yellow">SIONAL</span>
                </div>
                <div className="display hero-h1" style={{fontSize:'clamp(80px,14vw,160px)',color:'#0a0a0a'}}>
                  CLEANING
                </div>
              </div>
              <div className="hero-divider" />
              <div style={{display:'flex',alignItems:'center',gap:'40px',flexWrap:'wrap'}}>
                <p className="hero-sub" style={{textTransform:'none'}}>Reliable, thorough, and fairly priced. We take care of your home so you can focus on what matters most.</p>
                <div style={{display:'flex',flexDirection:'column',gap:'12px',flexShrink:0}}>
                  <a href="#contact" className="btn-black">GET A QUOTE</a>
                  <p className="hero-note">FREE DELIVERY IN BRATISLAVA</p>
                </div>
              </div>
              <div style={{marginTop:'36px',display:'flex',alignItems:'center',gap:'8px'}}>
                <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'28px',color:'#f5df00'}}>BRATISLAVA</span>
                <span className="blink">_</span>
                <span style={{fontSize:'11px',color:'#888',marginLeft:'8px'}}>ONLINE &amp; AVAILABLE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-num" aria-hidden="true">01</div>
              <h2 className="sec-title">Our Services</h2>
              <p className="sec-sub">— Three core offerings, one standard: excellence</p>
            </div>
            <div className="cards" data-a>
              {[
                {n:'01',title:'Apartment Cleaning',desc:'For 1–6+ room apartments. All rooms, kitchen, bathroom.',items:['Bedrooms & living room','Kitchen & appliances','Bathroom & WC','Vacuuming & mopping']},
                {n:'02',title:'Window Cleaning',desc:'From standard windows to panoramic and shopfronts.',items:['All window types','Inside & outside','Shopfronts','Radiator panels']},
                {n:'03',title:'Additional Services',desc:'Ovens, fridges, ironing, and specialist cleaning.',items:['Appliance deep clean','Dishwashing','Ironing','Pet bedding']},
              ].map((s,i) => (
                <article key={i} className="card">
                  <div className="card-num" aria-hidden="true">{s.n}</div>
                  <div className="card-bar" />
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-desc">{s.desc}</p>
                  <ul className="card-list">{s.items.map(it => <li key={it}>{it}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section" id="how-it-works">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-num" aria-hidden="true">02</div>
              <h2 className="sec-title">How It Works</h2>
              <p className="sec-sub">— Three steps to a clean home</p>
            </div>
            <div className="steps-wrap" data-a>
              {[
                {n:'STEP_01',title:'Choose Service',desc:'Use our price calculator to select services and get an instant estimate.'},
                {n:'STEP_02',title:'Send Request',desc:'Fill in your preferred date and address. We respond within 24 hours.'},
                {n:'STEP_03',title:'We Clean',desc:'Our team arrives on time and takes thorough care of your home.'},
              ].map((s,i) => (
                <div key={i} className="step">
                  <div className="step-num-big" aria-hidden="true">{`0${i+1}`}</div>
                  <div className="step-label">{s.n}</div>
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
            <div className="cta-inner">
              <h2 className="cta-h2">BOOK<br />NOW.</h2>
              <div className="cta-right">
                <p className="cta-sub">We respond within 24 hours. Free delivery within Bratislava.</p>
                <a href="mailto:info@globalclean.sk" className="btn-inv">SEND REQUEST</a>
                <div className="cta-contacts">
                  <span>+421 XXX XXX XXX</span>
                  <span>INFO@GLOBALCLEAN.SK</span>
                  <span>MON–FRI: 08:00–18:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-row">
            <span className="foot-brand">GLOBAL CLEAN</span>
            <div className="foot-info">
              <a href="tel:+421000000000">+421 XXX XXX XXX</a>
              <a href="mailto:info@globalclean.sk">INFO@GLOBALCLEAN.SK</a>
              <span>BRATISLAVA, SK</span>
            </div>
          </div>
          <p className="foot-copy">© 2026 GLOBAL CLEAN // ALL RIGHTS RESERVED</p>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: SCROLL_JS }} />
    </>
  );
}
