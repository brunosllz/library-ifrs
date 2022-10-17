import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import { BooksTable } from './components/BooksTable'
import { NewBookForm } from './components/NewBookForm'

import { Plus, MagnifyingGlass } from 'phosphor-react'

export function Books() {
  return (
    <main className="flex flex-col">
      <header className="bg-gray-700 py-4 px-6 flex justify-between items-center w-full">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button.Root>
              <Button.Icon>
                <Plus weight="bold" />
              </Button.Icon>
              <Button.Title>Adicionar Livro</Button.Title>
            </Button.Root>
          </Dialog.Trigger>

          <NewBookForm />
        </Dialog.Root>

        <div className="w-80">
          <TextInput.Root className="border border-gray-400">
            <TextInput.Input placeholder="Procure pelo nome do livro" />
            <TextInput.Icon>
              <MagnifyingGlass />
            </TextInput.Icon>
          </TextInput.Root>
        </div>
      </header>

      <section className="px-6 mt-6">
        <div className="bg-gray-700 p-6 rounded-md">
          <h1 className="text-2xl font-bold">Gerenciar Livros</h1>

          <BooksTable />
        </div>
      </section>
    </main>
  )
}
