import { useParams } from 'react-router-dom'
import {
  useFetchBookDetails,
  useFetchCategoriesData,
} from '../../hooks/useBooksData'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../components/Button'
import { EditBookForm } from './components/EditBookForm'

import { PencilSimpleLine } from 'phosphor-react'
import { SkeletonBookDetails } from './components/SkeletonBookDetails'

export function BookDetails() {
  const { bookId } = useParams()

  const { book, isLoading } = useFetchBookDetails(bookId)
  const { categories } = useFetchCategoriesData({})

  const bookCategory = categories.find(
    (category) => category.id === book.categoryId,
  )

  return (
    <main className="flex flex-col">
      <header className="bg-gray-700 py-4 px-6 flex justify-between items-center w-full">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button.Root>
              <Button.Icon>
                <PencilSimpleLine weight="bold" />
              </Button.Icon>
              <Button.Title>Editar livro</Button.Title>
            </Button.Root>
          </Dialog.Trigger>

          <EditBookForm />
        </Dialog.Root>
      </header>

      <section className="px-10 my-5 flex flex-col justify-center items-center">
        <div className="bg-gray-700 p-6 rounded-md w-full max-w-[1920px]">
          {isLoading ? (
            <SkeletonBookDetails />
          ) : (
            <div className="flex gap-10">
              <div className="min-w-[300px] h-[464px] rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={book.imageUrl}
                  alt={book.name}
                  className="object-cover min-w-full min-h-full"
                />
              </div>

              <div className="flex flex-col gap-4">
                <strong className="font-bold text-2xl">{book.name}</strong>

                <div className="h-[298px] overflow-auto">
                  <p>{book.description}</p>
                </div>

                <div className="flex gap-8 mt-4">
                  <div className="flex flex-col gap-2">
                    <strong>
                      Categoria:{' '}
                      <span className="font-normal">{bookCategory?.name}</span>
                    </strong>

                    <strong>
                      Editora:{' '}
                      <span className="font-normal">
                        {book.publishingCompany}
                      </span>
                    </strong>
                  </div>

                  <div className="flex flex-col gap-2">
                    <strong>
                      Numero de paginas:{' '}
                      <span className="font-normal">{book.countPage}</span>
                    </strong>
                    <strong>
                      Ano de publicação:{' '}
                      <span className="font-normal">{book.publishedYear}</span>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
