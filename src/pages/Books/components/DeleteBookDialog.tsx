import { useState } from 'react'
import { useDeleteBook } from '../../../hooks/useBooksData'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../../components/Button'

interface DeleteBookDialogProps {
  bookName: string
  bookId: string
}

export function DeleteBookDialog({ bookName, bookId }: DeleteBookDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const { mutate: deleteBook } = useDeleteBook()

  function handleDeleteBook(bookId: string) {
    deleteBook(bookId)
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
          Tem certeza que deseja deletar o livro{' '}
          <span className="font-bold">{bookName}</span>
        </div>

        <div className="flex gap-2 mt-4 justify-end">
          <Dialog.Close asChild>
            <Button.Root disabled={isDeleting}>
              <Button.Title>Cancelar</Button.Title>
            </Button.Root>
          </Dialog.Close>

          <Button.Root
            onClick={() => handleDeleteBook(bookId)}
            disabled={isDeleting}
            variant="danger"
          >
            <Button.Title>Deletar</Button.Title>
          </Button.Root>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
