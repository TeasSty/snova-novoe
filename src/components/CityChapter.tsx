import { cityFacts } from '../data/content'

export function CityChapter() {
  return (
    <section className="city" id="city" aria-labelledby="city-title">
      <div className="section city__head">
        <p className="section__eyebrow">Глава</p>
        <h2 className="section__title" id="city-title">
          Город
        </h2>
        <p className="section__lead city__lead">
          Мастерская сохраняет фрагменты деревянной Перми: то, что иначе ушло бы вместе со сносом домов.
        </p>
      </div>

      <figure className="city__bleed">
        <img
          src="./images/city-frames.jpg"
          alt="Отреставрированный резной наличник в мастерской"
          width={1600}
          height={900}
          loading="lazy"
        />
        <figcaption>Наличник · альбом «Работы» VK</figcaption>
      </figure>

      <div className="section city__body">
        <div className="city__split">
          <figure className="city__inset">
            <img
              src="./images/city-tabletop.jpg"
              alt="Стол из массива со слэб-столешницей"
              width={900}
              height={600}
              loading="lazy"
            />
          </figure>
          <div className="city__facts">
            {cityFacts.map((fact) => (
              <article className="city__fact" key={fact.title}>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
