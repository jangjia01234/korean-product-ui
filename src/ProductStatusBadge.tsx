import type { HTMLAttributes } from 'react'
import { cx } from './utils'

export type ProductStatusBadgeTone = 'accent' | 'danger' | 'neutral' | 'warning'

export type ProductStatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: ProductStatusBadgeTone
}

export function ProductStatusBadge({
  className,
  tone = 'neutral',
  ...props
}: ProductStatusBadgeProps) {
  return (
    <span
      className={cx('product-ui-status-badge', className)}
      data-tone={tone}
      {...props}
    />
  )
}
