import { Fragment } from 'react'
import { useController, Path, Control, FieldValues } from 'react-hook-form'
import { Listbox, Transition } from '@headlessui/react'

import { CaretDown, Check } from 'phosphor-react'
import clsx from 'clsx'

type DataValue = {
  id: string
  name: string
}

interface SelectInputControlledProps<T extends FieldValues = FieldValues> {
  name: Path<T>
  control: Control<T>
  dataValue: DataValue[]
}

export function SelectInputControlled<T extends FieldValues = FieldValues>({
  control,
  name,
  dataValue,
}: SelectInputControlledProps<T>) {
  const {
    field: { value, onChange, ref },
    fieldState: { error },
  } = useController({ name, control })

  console.log(value)
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative mt-1">
        <Listbox.Button
          ref={ref}
          className={clsx(
            'relative w-full cursor-pointer rinline-flex justify-between bg-gray-700 py-3 px-4 rounded text-sm',
            {
              'ring-1 ring-red-500': error,
            },
          )}
        >
          {value ? (
            <span className="block truncate">{value.name}</span>
          ) : (
            <span className="block truncate text-zinc-500 text-left">
              Selecione o game que deseja jogar
            </span>
          )}
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <CaretDown className="h-5 w-5 text-gray-200" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 px-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {dataValue.map((item) => (
              <Listbox.Option
                key={item.id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 text-gray-100 transition-colors  ${
                    active && 'bg-green-500 rounded-md'
                    // : 'text-white hover:bg-green-500 '
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item.name}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-100">
                        <Check className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
