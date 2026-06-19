import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from './utils'

export type ProductPanelTone = 'default' | 'muted' | 'outlined'
export type ProductPanelElevation = 'none' | 'raised'

export type ProductPanelProps = HTMLAttributes<HTMLElement> & {
  elevation?: ProductPanelElevation
  tone?: ProductPanelTone
}

export function ProductPanel({
  children,
  className,
  elevation = 'none',
  tone = 'default',
  ...props
}: ProductPanelProps) {
  return (
    <section
      className={cx('product-ui-panel', className)}
      data-elevation={elevation}
      data-tone={tone}
      {...props}
    >
      {children}
    </section>
  )
}

export function ProductPanelHeader({
  children,
  className,
  description,
  eyebrow,
  title,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  description?: ReactNode
  eyebrow?: ReactNode
  title: ReactNode
}) {
  return (
    <div className={cx('product-ui-panel__header', className)} {...props}>
      {eyebrow ? <span className="product-ui-panel__eyebrow">{eyebrow}</span> : null}
      <strong className="product-ui-panel__title">{title}</strong>
      {description ? <p className="product-ui-panel__description">{description}</p> : null}
      {children}
    </div>
  )
}
