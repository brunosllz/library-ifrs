import { useEffect, useState } from 'react'
import { api } from '../../../service/api'

import { Button } from '../../../components/Button'

import { Trash } from 'phosphor-react'

type BooksType = {
  id: string
  name: string
  codeBook: string
  description: string
  pageCount: number
  createdAt: string
}

export function BooksTable() {
  const [books, setBooks] = useState<BooksType[]>([])

  async function fetchBooks() {
    const response = await api.get('/books')

    setBooks(response.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <table className="w-full border-collapse min-w-[600px] mt-6 text-sm">
      <thead className="table w-full table-fixed">
        <tr className="table w-full table-fixed text-left">
          <th className="p-4 bg-gray-500 rounded-tl-md">Código</th>
          <th className="p-4 bg-gray-500  w-1/2">Nome</th>
          <th className="p-4 bg-gray-500 text-center">Data de criação</th>
          <th className="p-4 text-center bg-gray-500 rounded-tr-md">Ações</th>
        </tr>
      </thead>
      <tbody className="table w-full table-fixed">
        {books.map((book) => {
          return (
            <tr key={book.id} className="table w-full table-fixed">
              <td className="p-3 border-t-4 border-gray-700 bg-gray-400">
                {book.codeBook}
              </td>
              <td className="p-3 border-t-4 border-gray-700 bg-gray-400 w-1/2">
                {book.name}
              </td>
              <td className="p-3 border-t-4 border-gray-700 bg-gray-400 text-center">
                {book.createdAt}
              </td>
              <td className="p-3 border-t-4 border-gray-700 bg-gray-400 ">
                <div className="flex items-center justify-center gap-2">
                  <Button.Root>
                    <Button.Title>Detalhes</Button.Title>
                  </Button.Root>

                  <Button.Root>
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
  )
}
