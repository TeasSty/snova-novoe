import { useState } from 'react'
import type { FormEvent } from 'react'
import { contact } from '../data/content'

const MESSAGE_MAX = 900

export function Contact() {
  const [sentHint, setSentHint] = useState('')
  const [error, setError] = useState('')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (message.length > MESSAGE_MAX) {
      setError(`Сообщение слишком длинное — сократите до ${MESSAGE_MAX} символов.`)
      return
    }

    const body = [
      name && `Имя: ${name}`,
      phone && `Телефон: ${phone}`,
      message && `Сообщение:\n${message}`,
    ]
      .filter(Boolean)
      .join('\n')

    const mailto = `${contact.emailHref}?subject=${encodeURIComponent('Заявка с сайта СНОВА НОВОЕ')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSentHint('Откроется почтовый клиент с черновиком письма.')
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <p className="section__eyebrow">Связь</p>
      <h2 className="section__title" id="contact-title">
        Контакт
      </h2>
      <p className="section__lead">
        Пришлите фото предмета — ответим по телефону, почте или в мессенджере.
      </p>

      <div className="contact__grid">
        <div className="contact__block">
          <h3>Мастерская</h3>
          <p>
            <a href={contact.mapHref} target="_blank" rel="noopener noreferrer">
              {contact.address}
            </a>
          </p>
          <p>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
          <p>
            <a href={contact.emailHref}>{contact.email}</a>
          </p>
          <p style={{ marginTop: '0.85rem' }}>{contact.people.join(' · ')}</p>

          <div className="contact__links">
            <a href={contact.vk} target="_blank" rel="noopener noreferrer">
              VK
            </a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={contact.telegram} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={onSubmit}>
          <label>
            Имя
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label>
            Телефон
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            О предмете / фото опишите словами
            <textarea
              name="message"
              required
              maxLength={MESSAGE_MAX}
              placeholder="Что за вещь, что нужно сделать, можно приложить фото в письме"
            />
          </label>
          <button className="btn btn--lamp" type="submit">
            Отправить заявку
          </button>
          <p className="contact__note" role="status" aria-live="polite">
            {error || sentHint}
          </p>
          <p className="contact__note">
            Или напишите напрямую:{' '}
            <a href={contact.telegram} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            {' · '}
            <a href={contact.vk} target="_blank" rel="noopener noreferrer">
              VK
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}
