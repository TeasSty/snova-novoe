import { contact } from '../data/content'

export function Workshops() {
  return (
    <section className="workshops" id="workshops" aria-labelledby="workshops-title">
      <div className="section">
        <div className="workshops__row">
          <div className="workshops__text">
            <p className="section__eyebrow">Практика</p>
            <h2 className="section__title" id="workshops-title">
              Мастер-классы
            </h2>
            <p>
              Можно дать вторую жизнь своему стулу или взять предмет мастерской. Инструмент и материалы
              предоставляет мастерская. Участие платное, по предварительной записи.
            </p>
          </div>
          <div>
            <a className="btn btn--stamp" href={contact.phoneHref}>
              Записаться по телефону
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
