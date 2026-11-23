import heroArt from '../assets/hero-art.png'
import logo from '../assets/logo.svg'
import statusDot from '../assets/status-dot.svg'
import './Hero.css'

const NAV = [
  { label: 'кейси', href: '#cases' },
  { label: 'підхід', href: '#approach' },
  { label: 'про мене', href: '#about' },
  { label: 'контакти', href: '#contact' },
]

export function Hero() {
  return (
    <section className="hero">
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
            <a key={item.href} href={item.href}>
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
    </section>
  )
}
