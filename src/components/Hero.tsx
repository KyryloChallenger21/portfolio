import { useLayoutEffect, useRef } from 'react'
import heroArt from '../assets/hero-art.png'
import logo from '../assets/logo.svg'
import statusDot from '../assets/status-dot.svg'
import './Hero.css'

const DESIGN_WIDTH = 1440 // ширина фрейму у Figma

const NAV = [
  { label: 'кейси', href: '#cases', cls: 'hero__link--cases' },
  { label: 'підхід', href: '#approach', cls: 'hero__link--approach' },
  { label: 'про мене', href: '#about', cls: 'hero__link--about' },
  { label: 'контакти', href: '#contact', cls: 'hero__link--contact' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  // Масштаб макета 1440×960 під ширину вікна, щоб на будь-якому екрані
  // розташування збігалося з Figma.
  useLayoutEffect(() => {
    const update = () => {
      ref.current?.style.setProperty('--s', String(window.innerWidth / DESIGN_WIDTH))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <section className="hero" ref={ref}>
      <div className="hero__stage">
        <div className="hero__art" aria-hidden="true">
          <img src={heroArt} alt="" />
        </div>

        <header className="hero__header">
          <a className="hero__brand" href="#top">
            <img className="hero__logo" src={logo} alt="" width={80} height={80} />
            <span className="hero__name">Kir Klovan</span>
          </a>
          <p className="hero__status">
            <img src={statusDot} alt="" width={13} height={13} />
            Available for projects
          </p>

          <nav className="hero__nav" aria-label="Головна навігація">
            {NAV.map((item) => (
              <a key={item.href} className={item.cls} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="hero__write" href="mailto:drums21@ukr.net">
              написати
            </a>
          </nav>
        </header>

        <div className="hero__content">
          <h1 className="hero__title">
            З використанням АІ створюю та оновлюю дизайн сайтів, застосунків та
            інтерфейси продуктів, знаходячи й усуваючи те, що заважає людям
            зрозуміти продукт і зручно ним користуватися
          </h1>
          <div className="hero__actions">
            <a className="btn btn--filled" href="mailto:drums21@ukr.net">
              Розказати про задачу
            </a>
            <a className="btn btn--outline" href="#cases">
              Дивитись кейси
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
