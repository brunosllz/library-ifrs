import { useFetchCategoriesData } from '../../../hooks/useBooksData'
import { format } from 'date-fns'

import { Button } from '../../../components/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { DeleteCategoryDialog } from './DeleteCategoryDialog'

import { CircleNotch, PencilSimpleLine, Trash } from 'phosphor-react'

export function CategoriesTable() {
  const { categories, isLoading, isError, error } = useFetchCategoriesData({})

  return (
    <div className="overflow-auto">
      <table className="min-w-full border-collapse mt-6 text-sm">
        <thead>
          <tr className="text-left">
            <th className="p-4 pl-8 bg-gray-500 rounded-tl-md w-1/2">Nome</th>
            <th className="p-4 bg-gray-500 text-center">Data de criação</th>
            <th className="p-4 text-center bg-gray-500 rounded-tr-md">Ações</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            return (
              <tr key={category.id}>
                <td className="truncate p-3 pl-8 border-t-4 border-gray-700 bg-gray-400 w-1/2">
                  {category.name}
                </td>
                <td className="p-3 border-t-4 border-gray-700 bg-gray-400 text-center">
                  {format(new Date(category.createdAt), 'dd/MM/yyyy')}
                </td>
                <td className="p-3 border-t-4 border-gray-700 bg-gray-400 ">
                  <div className="flex items-center justify-center gap-2">
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <Button.Root title="Editar" className="py-2 px-3">
                          <Button.Icon>
                            <PencilSimpleLine />
                          </Button.Icon>
                        </Button.Root>
                      </Dialog.Trigger>
                    </Dialog.Root>

                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <Button.Root
                          title="Deletar"
                          variant="danger"
                          className="py-2 px-3"
                        >
                          <Button.Icon>
                            <Trash />
                          </Button.Icon>
                        </Button.Root>
                      </Dialog.Trigger>

                      <DeleteCategoryDialog
                        categoryName={category.name}
                        categoryId={category.id}
                      />
                    </Dialog.Root>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* {dontHasBooks && (
        <div className="w-full h-56 flex flex-col gap-2 items-center justify-center">
          <WarningCircle size={32} weight="bold" />
          <span>Não foi possível encontrar um livro</span>
        </div>
      )} */}

      {isLoading && (
        <div className="w-full h-56 flex flex-col gap-2 items-center justify-center">
          <CircleNotch className="animate-spin-slow" size={32} />
          <span>Os dados estão sendo carregados</span>
        </div>
      )}

      {isError && (
        <div className="w-full h-56 flex flex-col gap-2 items-center justify-center">
          <span className="text-2xl font-bold">Ops! Error</span>
          <span>{error.message}</span>
        </div>
      )}
    </div>
  )
}
