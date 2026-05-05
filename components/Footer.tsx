'use client'

const APP_URL = 'https://dep-italia.vercel.app' // ← Cambia con l'URL reale

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              DEP <span className="footer-logo-gold">Italia</span>
            </div>
            <p className="footer-tagline">
              La prima piattaforma italiana di pianificazione dell&apos;eredità digitale.
              Per te oggi, per chi ti vuole bene domani.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Navigazione</div>
              <a href="#cose" className="footer-link">Cos&apos;è</a>
              <a href="#come" className="footer-link">Come funziona</a>
              <a href="#piani" className="footer-link">Piani</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Risorse</div>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="footer-link">Accedi all&apos;app</a>
              <a href={`${APP_URL}/dispense`} target="_blank" rel="noopener noreferrer" className="footer-link">Dispense gratuite</a>
              <a href="#privacy-disclaimer" className="footer-link">Privacy</a>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Seguici</div>
              <a href="https://www.linkedin.com/company/dep-italia" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://www.instagram.com/dep.italia" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-disclaimers" id="privacy-disclaimer">
          <div className="disclaimer-block">
            <strong>🔒 Privacy GDPR</strong>
            <p>I dati che inserisci nell&apos;app DEP Italia restano sul tuo dispositivo (browser locale). Non vengono mai inviati ai nostri server, mai condivisi con terzi, mai usati per marketing senza consenso. Trattamento conforme al Regolamento UE 2016/679 e Codice Privacy italiano.</p>
          </div>
          <div className="disclaimer-block">
            <strong>⚖️ No valenza legale</strong>
            <p>I prodotti DEP Italia sono strumenti informativi e organizzativi. <strong>NON hanno valore legale di testamento</strong>. Per disposizioni successorie il cliente deve rivolgersi a un notaio o avvocato.</p>
          </div>
          <div className="disclaimer-block">
            <strong>🔑 Mai password</strong>
            <p>L&apos;utente non deve mai scrivere password nei documenti — solo dove sono conservate fisicamente.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {year} DEP Italia. Tutti i diritti riservati.</div>
          <div className="footer-meta">
            Made with ❤️ in Italy
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: var(--navy);
          color: rgba(255, 255, 255, 0.7);
          padding: 70px 0 30px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 2fr;
          gap: 60px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footer-brand {
          max-width: 360px;
        }
        .footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 14px;
        }
        .footer-logo-gold {
          color: var(--gold);
        }
        .footer-tagline {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.55);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .footer-link {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
          transition: color 0.15s;
        }
        .footer-link:hover {
          color: var(--gold-light);
        }

        .footer-disclaimers {
          padding: 32px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .disclaimer-block strong {
          display: block;
          font-size: 12px;
          color: var(--gold-light);
          margin-bottom: 6px;
          font-weight: 600;
        }
        .disclaimer-block p {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
        }

        .footer-bottom {
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
        }
        .footer-meta {
          font-style: italic;
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-disclaimers {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
