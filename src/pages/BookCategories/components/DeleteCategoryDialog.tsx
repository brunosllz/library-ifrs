import { useState } from 'react'
import { useDeleteCategory } from '../../../hooks/useBooksData'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../../components/Button'

interface DeleteCategoryDialogProps {
  categoryName: string
  categoryId: string
}

export function DeleteCategoryDialog({
  categoryName,
  categoryId,
}: DeleteCategoryDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const { mutate: deleteCategory } = useDeleteCategory()

  function handleDeleteBook(categoryId: string) {
    deleteCategory(categoryId)
    setIsDeleting(true)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="flex flex-col gap-4 fixed bg-gray-600 py-8 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-2xl font-bold">
          Deletar livro
        </Dialog.Title>

        <div>
          Tem certeza que deseja deletar a categoria{' '}
          <span className="font-bold">{categoryName}</span>
        </div>

        <div className="flex gap-2 mt-4 justify-end">
          <Button.Root
            onClick={() => handleDeleteBook(categoryId)}
            disabled={isDeleting}
            variant="danger"
          >
            <Button.Title>Deletar</Button.Title>
          </Button.Root>

          <Dialog.Close asChild>
            <Button.Root disabled={isDeleting}>
              <Button.Title>Cancelar</Button.Title>
            </Button.Root>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
