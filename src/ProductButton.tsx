import type { ButtonHTMLAttributes } from 'react'
import { cx } from './utils'

export type ProductButtonVariant = 'ghost' | 'primary' | 'secondary'
export type ProductButtonSize = 'lg' | 'md' | 'sm'

export type ProductButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ProductButtonSize
  variant?: ProductButtonVariant
}

export function ProductButton({
  className,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ProductButtonProps) {
  return (
    <button
      className={cx('product-ui-button', className)}
      data-size={size}
      data-variant={variant}
      type={type}
      {...props}
    />
  )
}
