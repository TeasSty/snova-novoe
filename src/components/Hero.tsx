import { contact, heroPassport } from '../data/content'
import { Passport } from './Passport'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero__intro">
        <h1 className="hero__brand" id="hero-brand">
          Снова новое
        </h1>
        <p className="hero__support">
          Реставрация мебели и изготовление из массива. Предмету возвращаем жизнь — и его историю.
        </p>
      </div>

      <div className="hero__compose">
        <div className="hero__photo-wrap">
          <img
            className="hero__photo"
            src="./images/hero-sideboard.jpg"
            alt="Стол из массива со слэб-столешницей — работа мастерской"
            width={1200}
            height={900}
            fetchPriority="high"
          />
          <p className="hero__photo-caption">Объект · стол из массива</p>
        </div>

        <div className="hero__passport-slot">
          <Passport fields={heroPassport} reveal className="hero__passport" compact />
        </div>
      </div>

      <div className="hero__actions">
        <a className="btn btn--lamp" href="#contact">
          Прислать фото предмета
        </a>
        <a className="btn btn--ghost" href={contact.vk} target="_blank" rel="noopener noreferrer">
          Смотреть VK
        </a>
      </div>
    </section>
  )
}
