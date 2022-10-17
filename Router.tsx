import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './src/layouts/DefaultLayout'
import { BookDetails } from './src/pages/BookDetails'
import { Books } from './src/pages/Books'
import { Home } from './src/pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/home' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/details/:id' element={<BookDetails />} />
      </Route>
    </Routes>
  )
}