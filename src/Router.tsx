import { createBrowserRouter } from 'react-router-dom'
import { BreadcrumbsRoute } from 'use-react-router-breadcrumbs'

import { DefaultLayout } from './layouts/DefaultLayout'

import { BookDetails } from './pages/BookDetails'
import { Books } from './pages/Books'
import { Home } from './pages/Home'

export const routes: BreadcrumbsRoute[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        breadcrumb: 'Home',
      },
      {
        path: 'books',
        element: <Books />,
        breadcrumb: 'Livros',
      },
      {
        path: 'books/details',
        breadcrumb: 'Detalhes',
        children: [
          {
            path: ':bookId',
            breadcrumb: null,
            element: <BookDetails />,
          },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
