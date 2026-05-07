'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const APP_URL = 'https://app.depitalia.com'
const WHOP_BASIC_URL = 'https://whop.com/checkout/plan_DzCTowmABGQTI'
const WHOP_PREMIUM_URL = 'https://whop.com/checkout/plan_jbh5coZeelTmS'

export default function Home() {

  return (
    <>
      <Header />
      <main id="top">

        {/* ─── HERO ─── */}
        <section className="hero">
          <div className="hero-decor-1"></div>
          <div className="hero-decor-2"></div>
          <div className="container hero-inner">
            <div className="hero-badge">
              ✨ La prima piattaforma italiana di eredità digitale
            </div>
            <h1 className="hero-title">
              Mettere ordine alla tua<br/>
              <strong>vita digitale.</strong>
            </h1>
            <p className="hero-sub">
              Per te oggi. Per chi ti vuole bene domani.<br/>
              Organizza, proteggi e lascia istruzioni chiare per i tuoi 150+ account digitali.
            </p>

            <div className="hero-leve">
              <div className="leva">
                <div className="leva-icon">🧠</div>
                <div className="leva-title">Per te oggi</div>
                <div className="leva-text">
                  Smetti di pagare abbonamenti dimenticati, ritrova i tuoi account, fai chiarezza nella tua vita digitale.
                </div>
              </div>
              <div className="leva">
                <div className="leva-icon">🛡️</div>
                <div className="leva-title">Per i tuoi cari domani</div>
                <div className="leva-text">
                  Lascia istruzioni chiare. Permetti agli eredi di accedere, chiudere o proteggere ciò che lasci.
                </div>
              </div>
            </div>

            <div className="hero-ctas">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                Inizia gratis →
              </a>
              <a href="#piani" className="btn btn-outline btn-lg">Scopri i piani</a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">🔒 GDPR compliant</div>
              <div className="trust-item">💾 Dati nel tuo browser</div>
              <div className="trust-item">🇮🇹 100% italiano</div>
            </div>
          </div>
        </section>

        {/* ─── PROBLEMA ─── */}
        <section className="problema">
          <div className="container">
            <div className="problema-inner">
              <div className="section-label">Il problema</div>
              <h2 className="section-title">
                Hai più di <strong>150 account</strong><br/>
                e non lo sai.
              </h2>
              <p className="section-sub">
                Email, social, banche, abbonamenti, password manager, dispositivi, account dimenticati.
                Una vita digitale enorme, sparpagliata, senza ordine. Per te è un caos. Per chi resterà, sarà impossibile.
              </p>

              <div className="problema-stats">
                <div className="stat">
                  <div className="stat-num">150+</div>
                  <div className="stat-label">Account medi per persona</div>
                </div>
                <div className="stat">
                  <div className="stat-num">€480</div>
                  <div className="stat-label">Spreco annuo per abbonamenti dimenticati</div>
                </div>
                <div className="stat">
                  <div className="stat-num">87%</div>
                  <div className="stat-label">Famiglie senza istruzioni digitali</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COS'È ─── */}
        <section id="cose" className="cose">
          <div className="container">
            <div style={{textAlign: 'center', marginBottom: 48}}>
              <div className="section-label">Cos&apos;è DEP Italia</div>
              <h2 className="section-title" style={{margin: '0 auto 16px'}}>
                La tua eredità digitale,<br/>
                <strong>finalmente in ordine.</strong>
              </h2>
              <p className="section-sub" style={{margin: '0 auto'}}>
                DEP Italia è una piattaforma 100% self-service per pianificare la tua eredità digitale.
                Niente chiamate, niente consulenze. Compili in autonomia, scarichi i PDF, dormi tranquillo.
              </p>
            </div>

            <div className="features">
              <div className="feature">
                <div className="feature-icon">📋</div>
                <h3 className="feature-title">Inventario completo</h3>
                <p className="feature-text">
                  Mappa tutti i tuoi account: email, social, conti, dispositivi, password manager, abbonamenti, asset crypto. Un PDF unico, ordinato, professionale.
                </p>
              </div>

              <div className="feature">
                <div className="feature-icon">🔒</div>
                <h3 className="feature-title">Privacy totale</h3>
                <p className="feature-text">
                  I tuoi dati restano sul tuo dispositivo. Mai sui nostri server. Mai condivisi. Mai usati per marketing. GDPR-compliant by design.
                </p>
              </div>

              <div className="feature">
                <div className="feature-icon">📝</div>
                <h3 className="feature-title">Istruzioni per gli eredi</h3>
                <p className="feature-text">
                  Lettere personali, disposizioni specifiche, piano di crisi 24/48h, fiduciario digitale: tutto pronto, tutto chiaro.
                </p>
              </div>

              <div className="feature">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Self-service</h3>
                <p className="feature-text">
                  Niente attese, niente chiamate. Paghi, compili, scarichi. 15-20 minuti per una copertura completa.
                </p>
              </div>

              <div className="feature">
                <div className="feature-icon">📚</div>
                <h3 className="feature-title">Dispense esclusive</h3>
                <p className="feature-text">
                  Guide, modelli e workbook su crypto, lettere ai cari, fiduciario, piano di crisi. Una nuova dispensa Premium ogni mese.
                </p>
              </div>

              <div className="feature">
                <div className="feature-icon">🇮🇹</div>
                <h3 className="feature-title">100% italiano</h3>
                <p className="feature-text">
                  Pensato per la realtà italiana, conforme al diritto italiano e al GDPR europeo. Lingua, contesto, esempi locali.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COME FUNZIONA ─── */}
        <section id="come" className="come">
          <div className="container">
            <div style={{textAlign: 'center', marginBottom: 48}}>
              <div className="section-label">Come funziona</div>
              <h2 className="section-title" style={{margin: '0 auto 16px'}}>
                Tre passi, <strong>quindici minuti.</strong>
              </h2>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <h3 className="step-title">Registrati gratis</h3>
                <p className="step-text">
                  Crea il tuo account in 30 secondi. Nessuna carta di credito richiesta. Accedi al piano Free per esplorare.
                </p>
              </div>

              <div className="step-connector"></div>

              <div className="step">
                <div className="step-num">2</div>
                <h3 className="step-title">Compila in autonomia</h3>
                <p className="step-text">
                  Segui i nostri form guidati. Ogni sezione ha esempi pratici. I tuoi dati restano nel browser, mai inviati.
                </p>
              </div>

              <div className="step-connector"></div>

              <div className="step">
                <div className="step-num">3</div>
                <h3 className="step-title">Scarica i PDF</h3>
                <p className="step-text">
                  Documenti pronti per il notaio o la cassaforte. Eleganti, professionali, sempre con te.
                </p>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: 48}}>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-navy btn-lg">
                Inizia ora gratis →
              </a>
            </div>
          </div>
        </section>

        {/* ─── PIANI ─── */}
        <section id="piani" className="piani">
          <div className="container">
            <div style={{textAlign: 'center', marginBottom: 48}}>
              <div className="section-label">Piani</div>
              <h2 className="section-title" style={{margin: '0 auto 16px'}}>
                Pagamento <strong>una tantum.</strong><br/>
                Niente abbonamenti.
              </h2>
              <p className="section-sub" style={{margin: '0 auto'}}>
                Scegli una volta, accedi a vita ai contenuti del piano. Trasparenza totale.
              </p>
              <div className="whop-trust">
                🔒 Pagamenti gestiti da <strong>Whop</strong> · Provider certificato · Pagamento sicuro SSL
              </div>
            </div>

            <div className="piani-grid">
              {/* FREE */}
              <div className="piano-card">
                <div className="piano-name">Free</div>
                <div className="piano-desc">Per esplorare DEP Italia</div>
                <div className="piano-price">
                  <span className="price-value">0€</span>
                </div>
                <ul className="piano-features">
                  <li>✓ Dashboard personale</li>
                  <li>✓ 2 dispense gratuite</li>
                  <li>✓ Privacy GDPR completa</li>
                  <li className="muted">— Nessun PDF</li>
                  <li className="muted">— Nessun inventario</li>
                </ul>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{width: '100%'}}>
                  Inizia gratis
                </a>
              </div>

              {/* BASIC */}
              <div className="piano-card">
                <div className="piano-name">Basic</div>
                <div className="piano-desc">Per organizzare il tuo inventario</div>
                <div className="piano-price">
                  <span className="price-value">9,99€</span>
                  <span className="price-sub">una tantum</span>
                </div>
                <ul className="piano-features">
                  <li>✓ Tutto del piano Free</li>
                  <li>✓ Inventario Digitale completo</li>
                  <li>✓ PDF Inventario professionale</li>
                  <li>✓ Guida con esempi</li>
                  <li className="muted">— Senza Digital Legacy</li>
                </ul>
                <a href={WHOP_BASIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-navy" style={{width: '100%'}}>
                  Sblocca Basic
                </a>
              </div>

              {/* PREMIUM */}
              <div className="piano-card piano-card-featured">
                <div className="piano-ribbon">⭐ Consigliato</div>
                <div className="piano-name piano-name-light">Premium</div>
                <div className="piano-desc piano-desc-light">Per proteggere davvero i tuoi cari</div>
                <div className="piano-price">
                  <span className="price-value price-value-light">24,99€</span>
                  <span className="price-sub price-sub-light">una tantum</span>
                </div>
                <ul className="piano-features piano-features-light">
                  <li>✓ Tutto del piano Basic</li>
                  <li>✓ Digital Legacy completo</li>
                  <li>✓ Lettere personali ai cari</li>
                  <li>✓ Piano di crisi 24/48h</li>
                  <li>✓ <strong>4 dispense Premium</strong></li>
                  <li>✓ <strong>1 nuova dispensa al mese</strong></li>
                </ul>
                <a href={WHOP_PREMIUM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{width: '100%'}}>
                  Sblocca Premium
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRIVACY ─── */}
        <section className="privacy">
          <div className="container container-narrow" style={{textAlign: 'center'}}>
            <div className="section-label">Privacy & sicurezza</div>
            <h2 className="section-title" style={{margin: '0 auto 16px'}}>
              I tuoi dati <strong>restano tuoi.</strong>
            </h2>
            <p className="section-sub" style={{margin: '0 auto 40px'}}>
              DEP Italia è progettata pensando alla privacy. I dati che inserisci nell&apos;inventario non passano mai dai nostri server.
            </p>

            <div className="privacy-points">
              <div className="privacy-point">
                <div className="privacy-icon">🔒</div>
                <div className="privacy-text"><strong>Dati nel tuo browser.</strong> Tutto quello che scrivi resta in localStorage del tuo dispositivo. Non lo vediamo mai.</div>
              </div>
              <div className="privacy-point">
                <div className="privacy-icon">🚫</div>
                <div className="privacy-text"><strong>Nessuna condivisione.</strong> Mai venduti, mai dati a terzi, mai usati per profilazione marketing.</div>
              </div>
              <div className="privacy-point">
                <div className="privacy-icon">🇪🇺</div>
                <div className="privacy-text"><strong>Conforme GDPR.</strong> Trattamento conforme al Regolamento UE 2016/679 e Codice Privacy italiano.</div>
              </div>
              <div className="privacy-point">
                <div className="privacy-icon">🔑</div>
                <div className="privacy-text"><strong>Mai password.</strong> L&apos;app non ti chiede mai di scrivere le tue password — solo dove sono conservate.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="faq">
          <div className="container container-narrow">
            <div style={{textAlign: 'center', marginBottom: 40}}>
              <div className="section-label">Domande frequenti</div>
              <h2 className="section-title" style={{margin: '0 auto'}}>
                Le risposte che <strong>cerchi.</strong>
              </h2>
            </div>

            <div className="faq-list">
              <FaqItem
                q="DEP Italia ha valore legale di testamento?"
                a="No. I documenti che genera DEP Italia hanno valore informativo e organizzativo. NON hanno valore legale di testamento. Per disposizioni successorie devi rivolgerti a un notaio o avvocato. DEP Italia è uno strumento per affiancare e semplificare il lavoro di chi resta — non per sostituire il diritto successorio."
              />
              <FaqItem
                q="Dove vengono salvati i miei dati?"
                a="I dati che inserisci nell'inventario digitale restano sul tuo dispositivo, nello storage locale del browser. Non vengono mai inviati ai server di DEP Italia. Sui nostri server abbiamo solo: la tua email di accesso, il piano che hai acquistato, e il consenso newsletter (se l'hai dato). Nient'altro."
              />
              <FaqItem
                q="Cosa succede se cambio computer o browser?"
                a="Per questo è fondamentale scaricare regolarmente il PDF dei tuoi documenti. I dati nel browser sono solo lì: se cancelli la cronologia o cambi dispositivo, perdi le compilazioni. Il PDF scaricato invece è tuo per sempre."
              />
              <FaqItem
                q="I pagamenti sono sicuri?"
                a="Sì. Useremo provider di pagamento certificati (Stripe / Whop) per gestire le transazioni. DEP Italia non vede mai i dati della tua carta. Pagamento una tantum, niente abbonamenti, niente rinnovi automatici."
              />
              <FaqItem
                q="Posso passare da un piano all'altro?"
                a="Sì, in qualsiasi momento. Pagherai solo la differenza tra i due piani. Esempio: hai Basic (9,99€) e vuoi Premium (24,99€)? Paghi 15€."
              />
              <FaqItem
                q="Devo essere esperto di tecnologia per usare DEP Italia?"
                a="No. L'app è pensata per chiunque sappia usare un browser. Form guidati, esempi pratici, suggerimenti contestuali. Se sai compilare un modulo, sai usare DEP Italia."
              />
              <FaqItem
                q="Cosa si intende per 'fiduciario digitale'?"
                a="È la persona di fiducia che hai scelto per gestire i tuoi account digitali nel momento in cui non potrai farlo tu. Non è una figura legale (non ha valore di esecutore testamentario), ma è la persona a cui i tuoi cari si rivolgeranno per accedere alle istruzioni digitali."
              />
            </div>
          </div>
        </section>

        {/* ─── CTA FINALE ─── */}
        <section className="cta-final">
          <div className="container container-narrow" style={{textAlign: 'center'}}>
            <h2 className="cta-title">
              Pronto a mettere<br/>
              <strong>la tua vita digitale in ordine?</strong>
            </h2>
            <p className="cta-sub">
              Crea il tuo account gratuito. 30 secondi, nessuna carta richiesta.<br/>
              Ricevi anche la dispensa gratuita &quot;Le 5 cose nascoste nella tua vita digitale&quot;.
            </p>
            <div className="cta-buttons">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                Inizia gratis ora →
              </a>
              <a href={`${APP_URL}/dispense`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
                📥 Scarica le dispense gratuite
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        /* ─── HERO ─── */
        .hero {
          position: relative;
          padding: 140px 0 90px;
          background: linear-gradient(135deg, var(--cream) 0%, var(--cream-light) 100%);
          overflow: hidden;
        }
        .hero-decor-1 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(201, 168, 76, 0.12);
          top: -180px;
          right: -150px;
          pointer-events: none;
        }
        .hero-decor-2 {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 1px solid rgba(201, 168, 76, 0.1);
          bottom: -60px;
          left: -80px;
          pointer-events: none;
        }
        .hero-inner {
          position: relative;
          text-align: center;
          z-index: 1;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(201, 168, 76, 0.3);
          color: var(--gold-dark);
          font-size: 12px;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 20px;
          margin-bottom: 24px;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 300;
          color: var(--navy);
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .hero-title strong { font-weight: 600; }
        .hero-sub {
          font-size: 18px;
          color: var(--muted);
          line-height: 1.7;
          max-width: 580px;
          margin: 0 auto 40px;
        }
        .hero-leve {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          max-width: 720px;
          margin: 0 auto 40px;
        }
        .leva {
          background: rgba(255,255,255,0.8);
          border: 1px solid var(--border);
          border-radius: var(--r);
          padding: 22px 24px;
          text-align: left;
          backdrop-filter: blur(8px);
        }
        .leva-icon { font-size: 32px; margin-bottom: 10px; }
        .leva-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 6px;
        }
        .leva-text {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
        }
        .hero-ctas {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }
        .hero-trust {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
          font-size: 12px;
          color: var(--muted);
        }

        @media (max-width: 768px) {
          .hero { padding: 120px 0 60px; }
          .hero-title { font-size: 42px; }
          .hero-sub { font-size: 15px; }
          .hero-leve { grid-template-columns: 1fr; }
        }

        /* ─── PROBLEMA ─── */
        .problema {
          background: var(--white);
        }
        .problema-inner {
          text-align: center;
          max-width: 720px;
          margin: 0 auto;
        }
        .problema-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 50px;
        }
        .stat {
          padding: 30px 20px;
          background: var(--cream);
          border-radius: var(--r);
          border: 1px solid var(--border);
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 600;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .problema-stats {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        /* ─── COSE ─── */
        .cose { background: var(--cream); }
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .feature {
          background: var(--white);
          padding: 30px 26px;
          border-radius: var(--r);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          transition: transform 0.2s;
        }
        .feature:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        .feature-icon { font-size: 32px; margin-bottom: 14px; }
        .feature-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .feature-text {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .features { grid-template-columns: 1fr; }
        }

        /* ─── COME FUNZIONA ─── */
        .come { background: var(--white); }
        .steps {
          display: grid;
          grid-template-columns: 1fr 40px 1fr 40px 1fr;
          align-items: start;
          gap: 0;
          max-width: 1000px;
          margin: 0 auto;
        }
        .step {
          text-align: center;
          padding: 0 20px;
        }
        .step-num {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--gold);
          color: var(--navy);
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          box-shadow: 0 6px 20px rgba(201, 168, 76, 0.25);
        }
        .step-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .step-text {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.7;
        }
        .step-connector {
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold) 50%, transparent);
          margin-top: 30px;
        }

        @media (max-width: 768px) {
          .steps {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .step-connector { display: none; }
        }

        /* ─── PIANI ─── */
        .piani { background: var(--cream); }
        .whop-trust {
          display: inline-block;
          margin-top: 22px;
          font-size: 12px;
          color: var(--muted);
          background: rgba(255,255,255,0.7);
          border: 1px solid var(--border);
          padding: 8px 18px;
          border-radius: 20px;
        }
        .whop-trust strong { color: var(--navy); }
        .piani-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .piano-card {
          background: var(--white);
          border-radius: var(--r);
          padding: 32px 28px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .piano-card-featured {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);
          border: 2px solid var(--gold);
          transform: scale(1.04);
          box-shadow: 0 16px 40px rgba(15, 30, 46, 0.18);
        }
        .piano-ribbon {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--gold);
          color: var(--navy);
          font-size: 10px;
          font-weight: 700;
          padding: 5px 16px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 0 var(--r) 0 var(--r-sm);
        }
        .piano-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .piano-name-light { color: var(--gold-light); }
        .piano-desc {
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 24px;
        }
        .piano-desc-light { color: rgba(255,255,255,0.55); }
        .piano-price {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 24px;
        }
        .price-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 700;
          color: var(--navy);
        }
        .price-value-light { color: #fff; }
        .price-sub {
          font-size: 12px;
          color: var(--muted);
        }
        .price-sub-light { color: rgba(255,255,255,0.5); }
        .piano-features {
          list-style: none;
          flex: 1;
          margin-bottom: 24px;
        }
        .piano-features li {
          font-size: 13px;
          color: var(--text);
          padding: 7px 0;
          line-height: 1.5;
          border-bottom: 1px solid var(--border);
        }
        .piano-features li.muted {
          color: #b0b0b0;
        }
        .piano-features-light li {
          color: rgba(255,255,255,0.85);
          border-bottom-color: rgba(255,255,255,0.08);
        }

        @media (max-width: 768px) {
          .piani-grid {
            grid-template-columns: 1fr;
          }
          .piano-card-featured { transform: none; }
        }

        /* ─── PRIVACY ─── */
        .privacy { background: var(--white); }
        .privacy-points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          text-align: left;
        }
        .privacy-point {
          display: flex;
          gap: 16px;
          padding: 22px;
          background: var(--cream);
          border-radius: var(--r);
          border-left: 3px solid var(--gold);
        }
        .privacy-icon { font-size: 24px; flex-shrink: 0; }
        .privacy-text {
          font-size: 14px;
          color: var(--text);
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .privacy-points { grid-template-columns: 1fr; }
        }

        /* ─── FAQ ─── */
        .faq { background: var(--cream); }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ─── CTA FINALE ─── */
        .cta-final {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        .cta-final::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(201, 168, 76, 0.08);
          top: -150px;
          right: -150px;
          pointer-events: none;
        }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 300;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 18px;
        }
        .cta-title strong { font-weight: 600; }
        .cta-sub {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .cta-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .cta-title { font-size: 32px; }
          .cta-final { padding: 70px 0; }
        }
      `}</style>
    </>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item">
      <summary className="faq-q">
        <span>{q}</span>
        <span className="faq-arrow">+</span>
      </summary>
      <div className="faq-a">{a}</div>

      <style jsx>{`
        .faq-item {
          background: var(--white);
          border-radius: var(--r-sm);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: box-shadow 0.2s;
        }
        .faq-item[open] {
          box-shadow: var(--shadow-lg);
        }
        .faq-q {
          padding: 18px 22px;
          font-size: 15px;
          font-weight: 600;
          color: var(--navy);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          list-style: none;
        }
        .faq-q::-webkit-details-marker { display: none; }
        .faq-arrow {
          color: var(--gold);
          font-size: 22px;
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .faq-item[open] .faq-arrow {
          transform: rotate(45deg);
        }
        .faq-a {
          padding: 0 22px 20px;
          font-size: 14px;
          color: var(--muted);
          line-height: 1.75;
        }
      `}</style>
    </details>
  )
}
