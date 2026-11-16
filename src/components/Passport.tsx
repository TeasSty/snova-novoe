import type { PassportFields } from '../data/content'

type Props = {
  fields: PassportFields
  reveal?: boolean
  className?: string
  compact?: boolean
}

export function Passport({ fields, reveal = false, className = '', compact = false }: Props) {
  return (
    <aside
      className={`passport ${reveal ? 'passport--reveal' : ''} ${compact ? 'passport--compact' : ''} ${className}`.trim()}
    >
      <div className="passport__head">
        <p className="passport__label">Паспорт предмета</p>
        {!compact ? <p className="passport__proto">Протокол мастерской</p> : null}
      </div>
      <dl className="passport__fields">
        <div className="passport__row">
          <dt className="passport__key">Порода</dt>
          <dd className="passport__val">{fields.wood}</dd>
        </div>
        <div className="passport__row">
          <dt className="passport__key">Эпоха</dt>
          <dd className="passport__val">{fields.era}</dd>
        </div>
        <div className="passport__row">
          <dt className="passport__key">Находка</dt>
          <dd className="passport__val">{fields.find}</dd>
        </div>
        <div className="passport__row">
          <dt className="passport__key">Работы</dt>
          <dd className="passport__val">{fields.work}</dd>
        </div>
      </dl>
    </aside>
  )
}

/** Red workshop stamp — passport gesture without the full card. */
export function PassportStamp({ label = 'Паспорт' }: { label?: string }) {
  return (
    <p className="passport-stamp" aria-hidden="false">
      <span className="passport-stamp__mark">{label}</span>
    </p>
  )
}

/** Short field line printed on/near a photo. */
export function PassportCaption({ fields }: { fields: PassportFields }) {
  return (
    <p className="passport-caption">
      <span>{fields.wood}</span>
      <span aria-hidden="true"> · </span>
      <span>{fields.era}</span>
      <span aria-hidden="true"> · </span>
      <span>{fields.work}</span>
    </p>
  )
}
