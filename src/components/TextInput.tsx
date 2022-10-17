import { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react';
import clsx from "clsx"
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode
  className?: string
}

function TextInputRoot({ children, className }: TextInputRootProps) {
  return (
    <div className={clsx("flex items-center gap-3 w-full py-4 px-3 h-12 bg-gray-700 rounded hover:ring-1 focus-within:ring-1 hover:ring-cyan-500 focus-within:ring-cyan-500", className)}>
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root';

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-5 h-5 text-gray-400'>
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends ComponentPropsWithoutRef<'input'> { }

const TextInputInput = forwardRef<HTMLInputElement, TextInputInputProps>(({ children, color = 'cyan', ...props }: TextInputInputProps, ref) => {
  return (
    <input
      ref={ref}
      className="flex-1 text-gray-100 placeholder:text-gray-400 text-sm outline-none bg-transparent"
      {...props}
    />
  )
})

TextInputInput.displayName = 'TextInput.Input';

interface TextinputErrorMessageProps {
  errorMessage: string | undefined
}

function TextinputErrorMessage({ errorMessage }: TextinputErrorMessageProps) {
  return (
    <span className='text-xs text-red-500'>
      {errorMessage}
    </span>
  )
}

TextinputErrorMessage.displayName = 'TextInput.ErrorMessage'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  ErrorMessage: TextinputErrorMessage
}
