import { shopFloor } from '../data/content'

/** Transition from city chapter into works — process, not decoration. */
export function ShopFloor() {
  return (
    <section className="shop-floor" aria-label="Процесс в мастерской">
      <div className="grain-bleed" aria-hidden="true">
        <img src="./images/grain-bleed.jpg" alt="" width={1600} height={400} loading="lazy" />
      </div>

      <div className="section shop-floor__inner">
        <p className="section__eyebrow">Мастерская</p>
        <h2 className="shop-floor__title">Где предмет разбирают и собирают заново</h2>
        <div className="shop-floor__grid">
          {shopFloor.map((shot) => (
            <figure className="shop-floor__shot" key={shot.src}>
              <img src={shot.src} alt={shot.alt} width={800} height={600} loading="lazy" />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
