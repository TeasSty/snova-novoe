import { works } from '../data/content'
import { BeforeAfter } from './BeforeAfter'
import { Passport, PassportCaption, PassportStamp } from './Passport'

export function Works() {
  return (
    <section className="section works" id="works" aria-labelledby="works-title">
      <p className="section__eyebrow">Архив</p>
      <h2 className="section__title" id="works-title">
        Работы
      </h2>
      <p className="section__lead">
        Предметы из практики мастерской — с разной подачей паспорта, без одинаковых карточек подряд.
      </p>

      <div className="works__stream">
        {works.map((item) => (
          <article className={`work work--${item.layout}`} key={item.id}>
            <div className="work__media">
              <img src={item.image} alt={item.title} width={900} height={700} loading="lazy" />
              {item.mode === 'caption' ? (
                <div className="work__on-photo">
                  <h3 className="work__title work__title--on">{item.title}</h3>
                  <PassportCaption fields={item.passport} />
                </div>
              ) : null}
              {item.mode === 'stamp' ? (
                <div className="work__stamp-slot">
                  <PassportStamp />
                </div>
              ) : null}
              {item.mode === 'full' ? (
                <div className="work__passport-float">
                  <Passport fields={item.passport} compact />
                </div>
              ) : null}
            </div>

            <div className="work__copy">
              {item.mode !== 'caption' ? <h3 className="work__title">{item.title}</h3> : null}
              <p className="work__note">{item.note}</p>
              {item.mode === 'stamp' ? <PassportCaption fields={item.passport} /> : null}
              {item.mode === 'none' ? (
                <p className="work__tagline">
                  {item.passport.wood} · {item.passport.work}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <BeforeAfter />
    </section>
  )
}
