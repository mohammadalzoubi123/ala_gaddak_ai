import { useEffect, useRef } from 'react'
import { ArrowUpLeft, Heart, Menu, X } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Brand } from './Brand'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
      target?.focus({ preventScroll: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, key])

  return (
    <>
      <a className="skip-link" href="#main">انتقل إلى المحتوى</a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            <Link className={pathname === '/' && !hash ? 'nav-link active' : 'nav-link'} to="/" aria-current={pathname === '/' && !hash ? 'page' : undefined}>الرئيسية</Link>
            <Link className={hash === '#how-it-works' ? 'nav-link active' : 'nav-link'} to="/#how-it-works">كيف بتشتغل؟</Link>
            <Link className={hash === '#about' ? 'nav-link active' : 'nav-link'} to="/#about">مين هبّود؟</Link>
          </nav>
          <div className="header-status"><span className="status-dot" />هبّود صاحي ومستنيك<span className="status-face">ツ</span></div>
          <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="التنقل للجوال" onKeyDown={(event) => { if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus() } }}>
          <Link to="/" onClick={() => setMenuOpen(false)}>الرئيسية</Link>
          <Link to="/#how-it-works" onClick={() => setMenuOpen(false)}>كيف بتشتغل؟</Link>
          <Link to="/#about" onClick={() => setMenuOpen(false)}>مين هبّود؟</Link>
        </nav>}
      </header>
      <main id="main" tabIndex={-1}><Outlet /></main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div><Brand /><p>ذكاء اصطناعي، بروح مش اصطناعية.</p></div>
          <p className="footer-note">صُنع بقليل من الذكاء وكثير من <Heart size={13} /> الهبد.</p>
          <Link className="footer-link" to="/#categories">خلّينا نبدأ <ArrowUpLeft size={16} /></Link>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} على قدّك AI</span><span>للتسلية والإلهام. قراراتك الكبيرة بتضل إلك.</span><span className="english" lang="en" dir="ltr">LESS SERIOUS. MORE YOU.</span></div>
      </footer>
    </>
  )
}
