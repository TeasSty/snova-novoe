import { useCallback, useId, useRef, useState } from 'react'
import type { KeyboardEvent, PointerEvent } from 'react'

export function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(52)
  const labelId = useId()
  const hintId = useId()

  const clampPos = useCallback((value: number) => Math.min(92, Math.max(8, value)), [])

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const el = frameRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const next = ((clientX - rect.left) / rect.width) * 100
      setPos(clampPos(next))
    },
    [clampPos],
  )

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return
    updateFromClientX(e.clientX)
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const step = e.shiftKey ? 10 : 4
    if (e.key === 'ArrowLeft' || e.key === 'Home') {
      e.preventDefault()
      setPos((p) => clampPos(e.key === 'Home' ? 8 : p - step))
    }
    if (e.key === 'ArrowRight' || e.key === 'End') {
      e.preventDefault()
      setPos((p) => clampPos(e.key === 'End' ? 92 : p + step))
    }
  }

  return (
    <div className="compare">
      <p className="compare__hint" id={hintId}>
        Потяните разделитель или используйте стрелки — стулья до работ и пример готового стула
      </p>
      <div
        className="compare__frame"
        ref={frameRef}
        style={{ ['--pos' as string]: `${pos}%` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={onKeyDown}
        role="slider"
        tabIndex={0}
        aria-valuemin={8}
        aria-valuemax={92}
        aria-valuenow={Math.round(pos)}
        aria-labelledby={labelId}
        aria-describedby={hintId}
        aria-orientation="horizontal"
      >
        <p className="visually-hidden" id={labelId}>
          Сравнение: стулья до реставрации и пример готового стула
        </p>
        <img
          className="compare__img"
          src="./images/chair-before.jpg"
          alt=""
          width={1200}
          height={750}
          draggable={false}
        />
        <img
          className="compare__img compare__after"
          src="./images/work-chair.jpg"
          alt=""
          width={1200}
          height={750}
          draggable={false}
        />
        <p className="compare__tag compare__tag--before">До</p>
        <p className="compare__tag compare__tag--after">После</p>
        <div className="compare__handle" aria-hidden="true" />
      </div>
    </div>
  )
}
