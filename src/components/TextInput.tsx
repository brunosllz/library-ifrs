import { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
  className?: string
}

function TextInputRoot({ children, className }: TextInputRootProps) {
  return (
    <div className={clsx('flex flex-col justify-start gap-2', className)}>
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends ComponentPropsWithoutRef<'input'> {
  children?: ReactNode
  error?: boolean
  className?: string
}

const TextInputInput = forwardRef<HTMLInputElement, TextInputInputProps>(
  ({ children, error, className, ...props }: TextInputInputProps, ref) => {
    return (
      <div
        className={clsx(
          'flex items-center gap-3 w-full py-4 px-3 h-12 bg-gray-700 rounded hover:ring-2 focus-within:ring-2 hover:ring-green-500 focus-within:ring-green-500',
          {
            'ring-1 ring-red-500 focus-within:ring-red-500 hover:ring-red-500':
              error,
          },
          className,
        )}
      >
        <input
          ref={ref}
          className="flex-1 text-sm text-gray-100 placeholder:text-gray-300 outline-none bg-transparent"
          {...props}
        />
        {children}
      </div>
    )
  },
)

TextInputInput.displayName = 'TextInput.Input'

interface TextinputErrorMessageProps {
  errorMessage: string | undefined
}

function TextinputErrorMessage({ errorMessage }: TextinputErrorMessageProps) {
  return <span className="text-xs text-red-500">{errorMessage}</span>
}

TextinputErrorMessage.displayName = 'TextInput.ErrorMessage'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  ErrorMessage: TextinputErrorMessage,
}
