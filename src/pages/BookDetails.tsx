import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { api } from '../lib/api'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../components/Button'
import { NewBookForm } from './Books/components/NewBookForm'

import { PencilSimpleLine } from 'phosphor-react'

type BooksType = {
  id: string
  name: string
  publishingCompany: string
  description: string
  year: string
  pageCount: string
  imageUrl: string
  categoryId: string
  createdAt: string
}

export function BookDetails() {
  const { bookId } = useParams()

  async function fetchBookDetails({ queryKey }: any) {
    const response = await api.get(`/books/${queryKey[1]}`)

    return response.data
  }

  const { data } = useQuery<BooksType, Error>(
    ['bookDetails', bookId],
    fetchBookDetails,
    {
      staleTime: 60000 * 2, // 2 minutes,
    },
  )

  if (!data) {
    return <div>Error</div>
  }

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

          <NewBookForm />
        </Dialog.Root>
      </header>

      <section className="px-10 my-5">
        <div className="bg-gray-700 p-6 rounded-md">
          <div className="flex gap-10">
            <div className="min-w-[300px] h-[464px] rounded-md overflow-hidden flex items-center justify-center">
              <img
                src={data.imageUrl}
                alt={data.name}
                className="object-cover min-w-full min-h-full"
              />
            </div>

            <div className="flex flex-col gap-4">
              <strong className="font-bold text-2xl">{data.name}</strong>

              <div className="h-[298px] overflow-auto">
                <p>{data.description}</p>
              </div>

              <div className="flex gap-8 mt-4">
                <div className="flex flex-col gap-2">
                  <strong>
                    Categoria:{' '}
                    <span className="font-normal">{data.categoryId}</span>
                  </strong>

                  <strong>
                    Editora:{' '}
                    <span className="font-normal">
                      {data.publishingCompany}
                    </span>
                  </strong>
                </div>

                <div className="flex flex-col gap-2">
                  <strong>
                    Numero de paginas:{' '}
                    <span className="font-normal">{data.pageCount}</span>
                  </strong>
                  <strong>
                    Ano de publicação:{' '}
                    <span className="font-normal">{data.year}</span>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
