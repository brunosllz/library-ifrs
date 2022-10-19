import { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return <div className="flex flex-col justify-start gap-2">{children}</div>
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
  color?: 'cyan' | 'yellow'
  error?: boolean
}

const TextInputInput = forwardRef<HTMLInputElement, TextInputInputProps>(
  ({ children, color = 'cyan', error, ...props }: TextInputInputProps, ref) => {
    return (
      <div
        className={clsx(
          'flex items-center gap-3 w-full  py-4 px-3 h-12 bg-gray-700 rounded hover:ring-1 focus-within:ring-1',
          {
            'hover:ring-cyan-500 focus-within:ring-cyan-500': color === 'cyan',
            'hover:ring-yellow-500 focus-within:ring-yellow-500':
              color === 'yellow',
            'ring-1 ring-red-500 focus-within:ring-red-500 hover:ring-red-500':
              error,
          },
        )}
      >
        {children}
        <input
          ref={ref}
          className="flex-1 text-xs text-gray-100 placeholder:text-gray-400 outline-none bg-transparent"
          {...props}
        />
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
