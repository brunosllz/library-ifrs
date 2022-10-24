import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../components/Button'
import { CategoriesTable } from './components/CategoriesTable'
import { NewCategoryForm } from './components/NewCategoryForm'

import { Plus } from 'phosphor-react'

export function BookCategories() {
  return (
    <main>
      <header className="bg-gray-700 py-4 px-6 flex justify-between items-center w-full">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button.Root>
              <Button.Icon>
                <Plus weight="bold" />
              </Button.Icon>
              <Button.Title>Adicionar categoria</Button.Title>
            </Button.Root>
          </Dialog.Trigger>

          <NewCategoryForm />
        </Dialog.Root>

        <div className="w-80"></div>
      </header>

      <section className="px-6 mt-6 flex flex-col justify-center items-center">
        <div className="bg-gray-700 p-6 rounded-md w-full max-w-[1920px]">
          <h1 className="text-2xl font-bold">Gerenciar categorias</h1>

          <CategoriesTable />
        </div>
      </section>
    </main>
  )
}
