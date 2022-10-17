import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

interface ButtonIconProps {
  children: ReactNode
  className?: string
}

function ButtonIcon({ children, className }: ButtonIconProps) {
  return <Slot className={clsx('h-5 w-5', className)}>{children}</Slot>
}

ButtonIcon.displayName = 'Button.Icon'

interface ButtonTitleProps {
  children: ReactNode
  classNames?: string
}

function ButtonTitle({ children, classNames }: ButtonTitleProps) {
  return <span className={clsx('block', classNames)}>{children}</span>
}

ButtonTitle.displayName = 'Button.Title'

interface ButtonRootProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
  className?: string
  asChild?: boolean
}

const ButtonRoot = forwardRef<HTMLButtonElement, ButtonRootProps>(
  ({ children, className, asChild, ...props }: ButtonRootProps, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={clsx(
          'flex gap-2 items-center justify-center py-3 bg-violet-900 px-4 rounded-md',
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

ButtonRoot.displayName = 'Button.Root'

export const Button = {
  Root: ButtonRoot,
  Title: ButtonTitle,
  Icon: ButtonIcon,
}
