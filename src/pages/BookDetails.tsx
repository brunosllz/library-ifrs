import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../service/api'

export function BookDetails() {
  const { bookId } = useParams()

  useEffect(() => {
    async function fetchBookById() {
      const response = await api.get(`/books/${bookId}`)

      console.log(response.data)
    }

    fetchBookById()
  }, [bookId])
  return (
    <div className="w-full">
      <h1>Book Details</h1>
    </div>
  )
}
