import { useEffect, useId, useState } from 'react'
import { contact } from '../data/content'

const links = [
  { href: '#city', label: 'Город' },
  { href: '#works', label: 'Работы' },
  { href: '#services', label: 'Услуги' },
  { href: '#workshops', label: 'Мастер-классы' },
  { href: '#contact', label: 'Контакт' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className={`site-header ${open ? 'site-header--open' : ''}`}>
      <div className="site-header__inner">
        <a className="brand-mark" href="#top" aria-label="СНОВА НОВОЕ — наверх" onClick={closeMenu}>
          <img
            className="brand-mark__icon"
            src="./images/brand-mark.png"
            width={44}
            height={44}
            alt="СНОВА НОВОЕ"
            decoding="async"
          />
          <span className="brand-mark__text">
            <span className="brand-mark__name">Снова новое</span>
            <span className="brand-mark__place">Пермь · Дружбы 34К</span>
          </span>
        </a>

        <nav className="nav nav--desktop" aria-label="Разделы">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-cta" href={contact.phoneHref}>
            Позвонить
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle__bars" aria-hidden="true" />
            <span className="visually-hidden">{open ? 'Закрыть меню' : 'Открыть меню'}</span>
          </button>
        </div>
      </div>

      <nav
        id={menuId}
        className={`nav-drawer ${open ? 'nav-drawer--open' : ''}`}
        aria-label="Мобильные разделы"
        hidden={!open}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
