import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { BookDetails } from './pages/BookDetails'
import { Books } from './pages/Books'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="books/details/:bookId" element={<BookDetails />} />
      </Route>
    </Routes>
  )
}
