import { api } from '../lib/api'
import { useQuery } from 'react-query'

export type BookProps = {
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

async function fetchBooksData() {
  const response = await api.get('/books')

  return response.data
}

interface useBooksDataProps {
  onSuccess?: (data: BookProps[]) => void
  onError?: (err: Error) => void
}

export function useBooksData({ onSuccess, onError }: useBooksDataProps) {
  return useQuery<BookProps[], Error>(['books'], fetchBooksData, {
    onSuccess,
    onError,
  })
}
