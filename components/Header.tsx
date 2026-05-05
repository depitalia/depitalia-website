'use client'

import { useState, useEffect } from 'react'

const APP_URL = 'https://dep-italia.vercel.app' // ← Cambia con l'URL reale della tua app

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 30) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id: string) {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo">
          <span className="logo-text">DEP</span>
          <span className="logo-gold">Italia</span>
        </a>

        <nav className="nav-desktop">
          <button onClick={() => scrollTo('cose')} className="nav-link">Cos&apos;è</button>
          <button onClick={() => scrollTo('come')} className="nav-link">Come funziona</button>
          <button onClick={() => scrollTo('piani')} className="nav-link">Piani</button>
          <button onClick={() => scrollTo('faq')} className="nav-link">FAQ</button>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-header">
            Accedi all&apos;app →
          </a>
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="burger" aria-label="Menu">
          <span className={mobileOpen ? 'burger-line open-1' : 'burger-line'}></span>
          <span className={mobileOpen ? 'burger-line open-2' : 'burger-line'}></span>
          <span className={mobileOpen ? 'burger-line open-3' : 'burger-line'}></span>
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollTo('cose')} className="mobile-link">Cos&apos;è</button>
          <button onClick={() => scrollTo('come')} className="mobile-link">Come funziona</button>
          <button onClick={() => scrollTo('piani')} className="mobile-link">Piani</button>
          <button onClick={() => scrollTo('faq')} className="mobile-link">FAQ</button>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold mobile-cta">
            Accedi all&apos;app →
          </a>
        </div>
      )}

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s;
          border-bottom: 1px solid transparent;
        }
        .site-header.scrolled {
          background: rgba(255, 255, 255, 0.97);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 600;
        }
        .logo-text { color: var(--navy); }
        .logo-gold { color: var(--gold); }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          background: none;
          border: none;
          color: var(--navy);
          font-size: 14px;
          font-family: inherit;
          cursor: pointer;
          font-weight: 500;
          padding: 6px 2px;
          transition: color 0.15s;
        }
        .nav-link:hover { color: var(--gold); }

        .btn-header {
          padding: 10px 20px;
          font-size: 13px;
        }

        .burger {
          display: none;
          background: none;
          border: none;
          width: 28px;
          height: 22px;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
        }
        .burger-line {
          height: 2px;
          background: var(--navy);
          width: 100%;
          transition: all 0.25s;
          transform-origin: left;
        }
        .burger-line.open-1 { transform: rotate(45deg) translate(2px, -2px); }
        .burger-line.open-2 { opacity: 0; }
        .burger-line.open-3 { transform: rotate(-45deg) translate(2px, 2px); }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px 24px 24px;
          background: #fff;
          border-top: 1px solid var(--border);
        }
        .mobile-link {
          background: none;
          border: none;
          color: var(--navy);
          font-size: 16px;
          font-family: inherit;
          cursor: pointer;
          padding: 12px 0;
          text-align: left;
          font-weight: 500;
          border-bottom: 1px solid var(--border);
        }
        .mobile-cta {
          margin-top: 12px;
          padding: 14px 24px;
        }

        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .burger { display: flex; }
        }
      `}</style>
    </header>
  )
}
