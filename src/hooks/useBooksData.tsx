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
  categoryId: string
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

export function useFetchBooksData({ onSuccess, onError }: useBooksDataProps) {
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

async function fetchBookDetails({ queryKey }: any) {
  const response = await api.get(`/books/${queryKey[1]}`)

  return response.data
}

export function useFetchBookDetails(bookId: string | undefined) {
  const queryResponse = useQuery<BookProps, Error>(
    ['bookDetails', bookId],
    fetchBookDetails,
    {
      staleTime: 60000 * 2, // 2 minutes,
    },
  )

  return { book: queryResponse.data ?? ({} as BookProps), ...queryResponse }
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
