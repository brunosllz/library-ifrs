import { Outlet } from 'react-router-dom'
import { CaretRight } from 'phosphor-react'

import { Sidebar } from './components/Sidebar'

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <header className="flex w-full px-6 py-4 items-center justify-between border-b border-gray-500 bg-gray-800">
          <div className="flex gap-1 items-end">
            <span className="leading-none">Livros</span>
            <CaretRight size={14} />
            <strong className="leading-none">Gerenciar livros</strong>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://avatars.githubusercontent.com/u/69438694?v=4"
              alt="Bruno Luiz"
              className="w-10 h-10"
            />
            <strong>Bruno Luiz</strong>
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  )
}
