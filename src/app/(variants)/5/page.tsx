// /5 — "Terminal"
// Aesthetic: Cyberpunk/tech. Near-black, cyan, neon green.
// Rajdhani (headings) + IBM Plex Mono (body). Grid overlay. Scanlines. Terminal prompt hero.

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&display=swap');`;

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#0a0b0f;color:#c8d4e0;font-family:'IBM Plex Mono',monospace;font-size:14px;line-height:1.7;-webkit-font-smoothing:antialiased;position:relative;overflow-x:hidden}

/* Grid overlay */
body::before{content:'';position:fixed;inset:0;background-image:linear-gradient(rgba(0,212,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,.045) 1px,transparent 1px);background-size:40px 40px;pointer-events:none;z-index:0;animation:gridDrift 20s linear infinite}

/* Scanlines */
body::after{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.18) 2px,rgba(0,0,0,.18) 4px);pointer-events:none;z-index:1}

h1,h2,h3,.display{font-family:'Rajdhani',sans-serif;letter-spacing:0.04em;line-height:1.1;font-weight:700}
a{text-decoration:none;color:inherit}
button{cursor:pointer;font-family:inherit}

/* Layout */
.wrap{max-width:1200px;margin:0 auto;padding:0 48px;position:relative;z-index:2}
@media(max-width:768px){.wrap{padding:0 20px}}

/* Nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(10,11,15,.88);border-bottom:1px solid rgba(0,212,255,.15);backdrop-filter:blur(12px)}
.nav-row{display:flex;align-items:center;justify-content:space-between;height:56px}
.logo{font-family:'Rajdhani',sans-serif;font-size:20px;font-weight:700;letter-spacing:.12em;color:#00d4ff;display:flex;align-items:center;gap:8px}
.logo-bracket{color:rgba(0,212,255,.4)}
.logo-prompt{color:#39ff14;margin-right:2px}
.nav-status{display:flex;align-items:center;gap:6px;font-size:11px;color:#5a6a7a;letter-spacing:.08em}
.nav-status-dot{width:6px;height:6px;border-radius:50%;background:#39ff14;box-shadow:0 0 6px #39ff14;animation:terminalBlink 1.4s step-end infinite}
.nav-btn{display:inline-flex;align-items:center;padding:7px 18px;background:transparent;color:#00d4ff;font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:500;letter-spacing:.1em;border:1px solid rgba(0,212,255,.35);clip-path:polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px);transition:background .15s,border-color .15s}
.nav-btn:hover{background:rgba(0,212,255,.08);border-color:rgba(0,212,255,.6)}

/* Hero */
.hero{min-height:100vh;display:flex;align-items:center;padding-top:56px;position:relative;overflow:hidden}
.hero-glow{position:absolute;top:20%;left:-10%;width:600px;height:600px;background:radial-gradient(circle,rgba(0,212,255,.06) 0%,transparent 70%);pointer-events:none}
.hero-glow2{position:absolute;bottom:10%;right:-5%;width:400px;height:400px;background:radial-gradient(circle,rgba(57,255,20,.04) 0%,transparent 70%);pointer-events:none}
.hero-body{padding:80px 0;position:relative;z-index:2}
.hero-path{font-size:11px;color:#5a6a7a;letter-spacing:.12em;margin-bottom:24px;display:flex;align-items:center;gap:6px}
.hero-path-sep{color:rgba(0,212,255,.3)}
.hero-prompt{display:flex;align-items:flex-start;gap:12px;margin-bottom:8px}
.hero-prompt-sym{font-family:'Rajdhani',sans-serif;font-size:clamp(56px,10vw,110px);color:#39ff14;line-height:1;text-shadow:0 0 24px rgba(57,255,20,.5),0 0 48px rgba(57,255,20,.2);font-weight:700;flex-shrink:0;margin-top:4px}
.hero-h1{font-size:clamp(56px,10vw,110px);color:#fff;line-height:1;letter-spacing:.02em}
.hero-h1-cyan{color:#00d4ff;text-shadow:0 0 20px rgba(0,212,255,.4),0 0 40px rgba(0,212,255,.15)}
.hero-cursor{display:inline-block;width:3px;height:clamp(40px,7vw,80px);background:#39ff14;margin-left:6px;animation:terminalBlink 1s step-end infinite;vertical-align:middle;box-shadow:0 0 8px #39ff14}
.hero-cmd{margin:20px 0 8px;font-size:12px;color:#5a6a7a;letter-spacing:.08em}
.hero-cmd span{color:#39ff14}
.hero-typewriter{font-size:15px;color:#8a9ab0;max-width:520px;overflow:hidden;white-space:nowrap;border-right:2px solid transparent;animation:typewriter 2.8s steps(56) 0.6s both}
.hero-meta{margin-top:36px;display:flex;align-items:center;gap:32px;flex-wrap:wrap}
.hero-stat{display:flex;flex-direction:column;gap:2px}
.hero-stat-val{font-family:'Rajdhani',sans-serif;font-size:28px;font-weight:700;color:#00d4ff;letter-spacing:.04em}
.hero-stat-key{font-size:10px;color:#5a6a7a;letter-spacing:.15em}
.hero-sep{width:1px;height:40px;background:rgba(0,212,255,.15)}
.hero-cta-row{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:36px}
.btn-primary{display:inline-flex;align-items:center;padding:13px 28px;background:rgba(0,212,255,.1);color:#00d4ff;font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:500;letter-spacing:.1em;border:1px solid rgba(0,212,255,.4);clip-path:polygon(10px 0%,100% 0%,100% calc(100% - 10px),calc(100% - 10px) 100%,0% 100%,0% 10px);transition:background .15s,box-shadow .15s;white-space:nowrap}
.btn-primary:hover{background:rgba(0,212,255,.18);box-shadow:0 0 20px rgba(0,212,255,.2),inset 0 0 20px rgba(0,212,255,.04)}
.btn-ghost{display:inline-flex;align-items:center;padding:13px 24px;background:transparent;color:#5a6a7a;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.1em;border:1px solid rgba(255,255,255,.08);transition:color .15s,border-color .15s;white-space:nowrap}
.btn-ghost:hover{color:#c8d4e0;border-color:rgba(255,255,255,.2)}

/* Section */
.section{padding:80px 0;position:relative;z-index:2}
.sec-head{margin-bottom:48px}
.sec-prompt{font-size:11px;color:#39ff14;letter-spacing:.2em;margin-bottom:8px;display:flex;align-items:center;gap:6px}
.sec-prompt::before{content:'//';color:rgba(57,255,20,.4)}
.sec-title{font-size:clamp(36px,5vw,60px);color:#fff;margin-bottom:8px}
.sec-title span{color:#00d4ff;text-shadow:0 0 16px rgba(0,212,255,.35)}
.sec-sub{font-size:12px;color:#5a6a7a;letter-spacing:.08em}
.sec-divider{height:1px;background:linear-gradient(90deg,rgba(0,212,255,.3),rgba(0,212,255,.05) 60%,transparent);margin:0 0 64px}

/* Service cards */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(0,212,255,.08)}
.card{background:#0f1219;padding:32px 28px;position:relative;overflow:hidden;transition:background .2s}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#00d4ff,transparent);opacity:0;transition:opacity .2s}
.card:hover{background:#121620}
.card:hover::before{opacity:1}
.card-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.card-num{font-family:'Rajdhani',sans-serif;font-size:11px;color:rgba(0,212,255,.4);letter-spacing:.2em}
.card-badge{font-size:10px;color:#5a6a7a;border:1px solid rgba(255,255,255,.08);padding:2px 8px;letter-spacing:.08em}
.card-title{font-family:'Rajdhani',sans-serif;font-size:24px;color:#fff;margin-bottom:10px;font-weight:600}
.card-desc{font-size:12px;color:#5a6a7a;line-height:1.7;margin-bottom:20px;font-style:italic}
.card-list{list-style:none}
.card-list li{font-size:12px;color:#8a9ab0;padding:6px 0;border-top:1px solid rgba(255,255,255,.05);display:flex;align-items:center;gap:8px}
.card-list li::before{content:'>';color:#00d4ff;font-weight:700;flex-shrink:0}
.card-scan{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(0,212,255,.6),transparent);opacity:0;transition:opacity .1s}
.card:hover .card-scan{opacity:1;animation:scanDown .8s linear forwards}

/* Terminal steps */
.terminal{background:#0d1017;border:1px solid rgba(0,212,255,.12);position:relative;overflow:hidden}
.terminal-bar{background:#161b24;padding:10px 16px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(0,212,255,.1)}
.terminal-dot{width:10px;height:10px;border-radius:50%}
.terminal-dot-r{background:#ff5f57}
.terminal-dot-y{background:#ffbd2e}
.terminal-dot-g{background:#28ca41}
.terminal-title{font-size:11px;color:#5a6a7a;margin-left:auto;margin-right:auto;letter-spacing:.1em}
.terminal-body{padding:32px}
.t-line{display:flex;align-items:flex-start;gap:0;padding:20px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.t-line:last-child{border-bottom:none}
.t-prompt{color:#39ff14;flex-shrink:0;font-size:13px;margin-right:8px}
.t-cmd{color:#00d4ff;font-size:13px;flex-shrink:0;margin-right:16px;white-space:nowrap}
.t-content{flex:1}
.t-fn{color:#fff;font-family:'Rajdhani',sans-serif;font-size:20px;font-weight:600;margin-bottom:4px}
.t-out{font-size:12px;color:#5a6a7a;line-height:1.6}
.t-out em{color:#8a9ab0;font-style:normal}

/* CTA */
.cta-sec{background:#0d1017;border-top:1px solid rgba(0,212,255,.12);border-bottom:1px solid rgba(0,212,255,.12);padding:80px 0;position:relative;z-index:2;overflow:hidden}
.cta-glow{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:600px;height:300px;background:radial-gradient(ellipse,rgba(0,212,255,.05) 0%,transparent 70%);pointer-events:none}
.cta-inner{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center}
.cta-left{}
.cta-label{font-size:11px;color:#39ff14;letter-spacing:.2em;margin-bottom:12px}
.cta-h2{font-size:clamp(40px,6vw,72px);color:#fff;line-height:.95;margin-bottom:16px}
.cta-h2 span{color:#00d4ff;text-shadow:0 0 20px rgba(0,212,255,.35)}
.cta-sub{font-size:12px;color:#5a6a7a;max-width:380px;line-height:1.7}
.cta-right{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
.cta-contacts{display:flex;flex-direction:column;gap:6px}
.cta-contact-line{font-size:12px;color:#5a6a7a;display:flex;align-items:center;gap:8px;letter-spacing:.06em}
.cta-contact-line::before{content:'$';color:#39ff14;font-size:11px}

/* Footer */
footer{background:#0a0b0f;padding:24px 0;border-top:1px solid rgba(255,255,255,.05);position:relative;z-index:2}
.foot-row{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.foot-brand{font-family:'Rajdhani',sans-serif;font-size:18px;font-weight:700;color:#00d4ff;letter-spacing:.12em}
.foot-info{display:flex;gap:24px;flex-wrap:wrap}
.foot-info a,.foot-info span{font-size:11px;color:#3a4a5a;letter-spacing:.08em;transition:color .15s}
.foot-info a:hover{color:#00d4ff}
.foot-copy{font-size:10px;color:#2a3540;letter-spacing:.1em;margin-top:12px;border-top:1px solid rgba(255,255,255,.04);padding-top:12px}

/* Keyframes */
@keyframes terminalBlink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes typewriter{from{width:0}to{width:100%}}
@keyframes gridDrift{from{background-position:0 0,0 0}to{background-position:40px 40px,40px 40px}}
@keyframes scanDown{from{top:0}to{top:100%}}
@keyframes neonPulse{from{text-shadow:0 0 12px rgba(0,212,255,.3),0 0 24px rgba(0,212,255,.1)}to{text-shadow:0 0 20px rgba(0,212,255,.6),0 0 40px rgba(0,212,255,.25),0 0 60px rgba(0,212,255,.1)}}
@keyframes fadeIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
[data-a]{opacity:0}
[data-a].vis{animation:fadeIn .5s cubic-bezier(.16,1,.3,1) both}
[data-a][data-d="1"].vis{animation-delay:.08s}
[data-a][data-d="2"].vis{animation-delay:.16s}
[data-a][data-d="3"].vis{animation-delay:.24s}

/* Responsive */
@media(max-width:900px){
  .cards{grid-template-columns:1fr}
  .cta-inner{grid-template-columns:1fr}
}
@media(max-width:640px){
  .hero-typewriter{white-space:normal;overflow:visible;animation:none;border-right:none;color:#8a9ab0}
}
`;

const SCROLL_JS = `(function(){if(typeof IntersectionObserver==='undefined')return;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -30px 0px'});document.querySelectorAll('[data-a]').forEach(function(el){io.observe(el)})})();`;

export default function Page5() {
  return (
    <>
      <style>{FONTS}</style>
      <style>{CSS}</style>

      <nav className="nav">
        <div className="wrap">
          <div className="nav-row">
            <a href="/5" className="logo">
              <span className="logo-bracket">[</span>
              <span className="logo-prompt">&gt;</span>
              GLOBAL_CLEAN
              <span className="logo-bracket">]</span>
            </a>
            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
              <div className="nav-status">
                <div className="nav-status-dot" />
                ONLINE // BRATISLAVA
              </div>
              <a href="#contact" className="nav-btn">INIT_BOOKING</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-glow2" aria-hidden="true" />
          <div className="wrap">
            <div className="hero-body">
              <div className="hero-path">
                <span>ROOT</span>
                <span className="hero-path-sep">/</span>
                <span>SK</span>
                <span className="hero-path-sep">/</span>
                <span>BRATISLAVA</span>
                <span className="hero-path-sep">/</span>
                <span style={{color:'#00d4ff'}}>CLEANING_SERVICE</span>
              </div>
              <div className="hero-prompt">
                <span className="hero-prompt-sym">&gt;_</span>
                <div>
                  <div className="hero-h1">
                    PROFES<span className="hero-h1-cyan">SIONAL</span>
                    <span className="hero-cursor" aria-hidden="true" />
                  </div>
                  <div className="hero-h1">CLEANING</div>
                </div>
              </div>
              <p className="hero-cmd"><span>$ </span>exec --location=bratislava --mode=residential --guarantee=true</p>
              <p className="hero-typewriter">Reliable, thorough, and fairly priced. We take care of your home.</p>
              <div className="hero-meta">
                <div className="hero-stat">
                  <span className="hero-stat-val">24H</span>
                  <span className="hero-stat-key">RESPONSE_TIME</span>
                </div>
                <div className="hero-sep" aria-hidden="true" />
                <div className="hero-stat">
                  <span className="hero-stat-val">100%</span>
                  <span className="hero-stat-key">SATISFACTION_RATE</span>
                </div>
                <div className="hero-sep" aria-hidden="true" />
                <div className="hero-stat">
                  <span className="hero-stat-val">FREE</span>
                  <span className="hero-stat-key">DELIVERY_LOCAL</span>
                </div>
              </div>
              <div className="hero-cta-row">
                <a href="#contact" className="btn-primary">./GET_QUOTE.sh</a>
                <a href="#services" className="btn-ghost">VIEW_SERVICES --list</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="sec-head">
              <p className="sec-prompt">MODULE_01 // SERVICES</p>
              <h2 className="sec-title">Our <span>Services</span></h2>
              <p className="sec-sub">// Three core modules. One execution standard.</p>
            </div>
            <div className="sec-divider" aria-hidden="true" />
            <div className="cards" data-a>
              {[
                {num:'0x01',tag:'RESIDENTIAL',title:'Apartment Cleaning',desc:'Full-scope residential cleaning for 1–6+ room apartments.',items:['Bedrooms & living room','Kitchen & appliances','Bathroom & WC','Vacuuming & mopping']},
                {num:'0x02',tag:'GLASS_SURFACES',title:'Window Cleaning',desc:'Professional-grade cleaning from standard windows to panoramic shopfronts.',items:['All window types','Inside & outside','Shopfronts & balconies','Radiator panels']},
                {num:'0x03',tag:'EXTENSIONS',title:'Additional Services',desc:'Modular add-ons: ovens, fridges, ironing, specialist tasks.',items:['Appliance deep clean','Dishwashing','Ironing service','Pet bedding']},
              ].map((s,i) => (
                <article key={i} className="card">
                  <div className="card-scan" aria-hidden="true" />
                  <div className="card-header">
                    <span className="card-num">{s.num}</span>
                    <span className="card-badge">{s.tag}</span>
                  </div>
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
              <p className="sec-prompt">MODULE_02 // PROCESS</p>
              <h2 className="sec-title">How It <span>Works</span></h2>
              <p className="sec-sub">// Execute three commands. Get a clean home.</p>
            </div>
            <div className="sec-divider" aria-hidden="true" />
            <div className="terminal" data-a>
              <div className="terminal-bar">
                <div className="terminal-dot terminal-dot-r" />
                <div className="terminal-dot terminal-dot-y" />
                <div className="terminal-dot terminal-dot-g" />
                <span className="terminal-title">global_clean_process.sh — bash</span>
              </div>
              <div className="terminal-body">
                {[
                  {cmd:'step_01_select()',fn:'Choose a Service',out:'Use our price calculator to select services and get an instant estimate. Output: quote_id, total_price, schedule_options[]'},
                  {cmd:'step_02_request()',fn:'Send a Request',out:'Fill in the contact form with your preferred date and address. We respond within 24 hours. Returns: confirmation_token'},
                  {cmd:'step_03_clean()',fn:'We Clean',out:'Our team arrives on time. Thorough care for every surface. Exit code: 0 (success). Your home is spotless.'},
                ].map((s,i) => (
                  <div key={i} className="t-line" data-a data-d={String(i+1)}>
                    <span className="t-prompt">$&nbsp;</span>
                    <span className="t-cmd">{s.cmd}</span>
                    <div className="t-content">
                      <div className="t-fn">{s.fn}</div>
                      <div className="t-out"><em>// {s.out}</em></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-sec" id="contact">
          <div className="cta-glow" aria-hidden="true" />
          <div className="wrap">
            <div className="cta-inner">
              <div className="cta-left">
                <p className="cta-label">// INIT CONTACT SEQUENCE</p>
                <h2 className="cta-h2">BOOK YOUR<br /><span>CLEAN.</span></h2>
                <p className="cta-sub">We respond to every request within 24 hours. Free delivery within Bratislava.</p>
              </div>
              <div className="cta-right">
                <a href="mailto:info@globalclean.sk" className="btn-primary" style={{fontSize:'13px',padding:'15px 32px'}}>./SEND_REQUEST.sh</a>
                <div className="cta-contacts">
                  <span className="cta-contact-line">+421 XXX XXX XXX</span>
                  <span className="cta-contact-line">info@globalclean.sk</span>
                  <span className="cta-contact-line">Mon–Fri 08:00–18:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-row">
            <span className="foot-brand">GLOBAL_CLEAN</span>
            <div className="foot-info">
              <a href="tel:+421000000000">+421 XXX XXX XXX</a>
              <a href="mailto:info@globalclean.sk">info@globalclean.sk</a>
              <span>BRATISLAVA, SK</span>
            </div>
          </div>
          <p className="foot-copy">© 2026 GLOBAL CLEAN // PROCESS TERMINATED SUCCESSFULLY // EXIT 0</p>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: SCROLL_JS }} />
    </>
  );
}
