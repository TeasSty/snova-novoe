import { services } from '../data/content'

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <p className="section__eyebrow">Что делаем</p>
      <h2 className="section__title" id="services-title">
        Услуги
      </h2>
      <ul className="services__list">
        {services.map((item) => (
          <li className="services__item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
