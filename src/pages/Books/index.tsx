import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import { BooksTable } from './components/BooksTable'
import { NewBookForm } from './components/NewBookForm'

import { Plus, MagnifyingGlass } from 'phosphor-react'

export function Books() {
  const [open, setOpen] = useState(false)
  const [searchBook, setSearchBook] = useSearchParams()
  const { register, watch } = useForm()

  function closeModal() {
    return setOpen(!open)
  }

  const searchBookValue = watch('searchBook')

  useEffect(() => {
    setSearchBook(() => {
      if (!searchBookValue) {
        return ''
      } else {
        return { name: searchBookValue.toLowerCase() }
      }
    })
  }, [searchBookValue, setSearchBook])

  return (
    <main className="flex flex-col">
      <header className="bg-gray-700 py-4 px-6 flex justify-between items-center w-full">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button.Root>
              <Button.Icon>
                <Plus weight="bold" />
              </Button.Icon>
              <Button.Title>Adicionar Livro</Button.Title>
            </Button.Root>
          </Dialog.Trigger>

          <NewBookForm closeModal={closeModal} />
        </Dialog.Root>

        <div className="w-80">
          <TextInput.Root className="border border-gray-400">
            <TextInput.Input
              placeholder="Procure pelo nome do livro"
              {...register('searchBook')}
            >
              <TextInput.Icon>
                <MagnifyingGlass />
              </TextInput.Icon>
            </TextInput.Input>
          </TextInput.Root>
        </div>
      </header>

      <section className="px-6 mt-6 flex flex-col justify-center items-center">
        <div className="bg-gray-700 p-6 rounded-md w-full max-w-[1920px]">
          <h1 className="text-2xl font-bold">Gerenciar livros</h1>

          <BooksTable />
        </div>
      </section>
    </main>
  )
}
