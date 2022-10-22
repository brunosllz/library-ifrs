import { api } from '../lib/api'
import { useMutation, useQuery } from 'react-query'
import { queryClient } from '../lib/queryClient'

export type BookProps = {
  id: string
  name: string
  publishingCompany: string
  description: string
  publishedYear: string
  countPage: string
  imageUrl: string
  // categoryId: string
  createdAt: Date
}

async function fetchBooksData() {
  const response = await api.get('/books')

  return response.data
}

interface useBooksDataProps {
  onSuccess?: (data: BookProps[]) => void
  onError?: (err: Error) => void
}

export function useBooksData({ onSuccess, onError }: useBooksDataProps) {
  const queryResponse = useQuery<BookProps[], Error>(
    ['books'],
    fetchBooksData,
    {
      onSuccess,
      onError,
      retry: 2,
    },
  )

  return { books: queryResponse.data ?? [], ...queryResponse }
}

interface addNewBookProps {
  name: string
  publishingCompany: string
  description: string
  publishedYear: string
  countPage: string
  imageUrl: string
  // categoryId: string
  createdAt: Date
}

async function addNewBook(book: addNewBookProps) {
  const response = await api.post('/books', book)

  return response.data
}

export function useAddNewBook() {
  return useMutation(addNewBook, {
    onSuccess: () => {
      queryClient.invalidateQueries(['books'])
    },
  })
}

async function deleteBook(bookId: string) {
  const response = await api.delete(`/books/${bookId}`)

  return response.data
}

export function useDeleteBook() {
  return useMutation(deleteBook, {
    onSuccess: () => {
      queryClient.invalidateQueries(['books'])
    },
  })
}
