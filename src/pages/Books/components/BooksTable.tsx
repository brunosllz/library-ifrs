import { BookProps, useBooksData } from '../../../hooks/useBooksData'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Button } from '../../../components/Button'

import { CircleNotch, Trash, WarningCircle } from 'phosphor-react'
import { useState } from 'react'

export function BooksTable() {
  const [dontHasBooks, setDontHasBooks] = useState(false)
  const navigate = useNavigate()
  const [searchBook] = useSearchParams()

  function handleBookDetails(bookId: string) {
    navigate(`details/${bookId}`)
  }

  function filterByName(data: BookProps[], name: URLSearchParams) {
    const searchBookName = name.get('name')?.toLocaleLowerCase()

    if (searchBookName) {
      const bookFiltered = data.filter((book) => {
        return book.name.toLowerCase().includes(searchBookName)
      })

      if (!bookFiltered) {
        setDontHasBooks(true)

        return bookFiltered
      }

      return bookFiltered
    }

    return data
  }

  const { books, isFetching, isError, error } = useBooksData({})

  const booksFilter = filterByName(books, searchBook)

  return (
    <div className="overflow-auto">
      <table className="min-w-full border-collapse mt-6 text-sm">
        <thead>
          <tr className="text-left">
            <th className="p-4 pl-8 bg-gray-500 rounded-tl-md w-1/2">Nome</th>
            <th className="p-4 bg-gray-500">Editora</th>
            <th className="p-4 bg-gray-500 text-center">Data de criação</th>
            <th className="p-4 text-center bg-gray-500 rounded-tr-md">Ações</th>
          </tr>
        </thead>
        <tbody>
          {booksFilter.map((book) => {
            return (
              <tr key={book.id}>
                <td className="truncate p-3 pl-8 border-t-4 border-gray-700 bg-gray-400 w-1/2">
                  {book.name}
                </td>
                <td className="p-3 border-t-4 border-gray-700 bg-gray-400">
                  {book.publishingCompany}
                </td>
                <td className="p-3 border-t-4 border-gray-700 bg-gray-400 text-center">
                  {book.createdAt}
                </td>
                <td className="p-3 border-t-4 border-gray-700 bg-gray-400 ">
                  <div className="flex items-center justify-center gap-2">
                    <Button.Root
                      onClick={() => handleBookDetails(book.id)}
                      className="py-2"
                    >
                      <Button.Title>Detalhes</Button.Title>
                    </Button.Root>

                    <Button.Root className="bg-red-500 py-2 px-3">
                      <Button.Icon>
                        <Trash />
                      </Button.Icon>
                    </Button.Root>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {dontHasBooks && (
        <div className="w-full h-56 flex flex-col gap-2 items-center justify-center">
          <WarningCircle size={32} weight="bold" />
          <span>Não foi possível encontrar um livro</span>
        </div>
      )}

      {isFetching && (
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
