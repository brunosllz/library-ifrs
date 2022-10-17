import { Link, NavLink, Outlet } from "react-router-dom";
import { CaretRight, House, Books } from 'phosphor-react'
import { Logo } from "../components/Logo";
import clsx from 'clsx'

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="flex min-h-screen w-full max-w-[240px] flex-col justify-between bg-gray-800 px-4 py-6">
        <div className="flex flex-col">
          <header className="flex gap-3 flex-col items-center rounded-md bg-transparent py-6">
            <Logo />
            <strong className="text-lg text-gray-200">IFRS Library</strong>
          </header>

          <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
            <NavLink
              to="/home"
              className={({ isActive }) => {
                return clsx("flex items-center rounded-md px-4 py-2 gap-2 hover:bg-gray-400 hover:text-gray-800 transition-colors", {
                  'bg-gray-100 text-gray-700': isActive
                })
              }}
            >
              <House size={24} weight="fill" />

              <span className="font-medium text-sm">Home</span>
            </NavLink>


            <details className="group">
              <summary
                className="flex gap-2 cursor-pointer items-center rounded-lg px-4 py-2"
              >
                <Books size={24} className="" />

                <span className="text-sm font-medium ">Livros</span>

                <span className="ml-auto shrink-0 transition duration-300 group-open:rotate-90">
                  <CaretRight />
                </span>
              </summary>

              <nav aria-label="Books Nav" className="mt-1.5 ml-4 flex flex-col">
                <NavLink
                  to="books"
                  className={({ isActive }) => {
                    return clsx("flex items-center rounded-md px-4 py-2 gap-2 hover:bg-gray-400 hover:text-gray-800 transition-colors", {
                      'bg-gray-100 text-gray-700': isActive
                    })
                  }}
                >
                  <span className="ml-3 text-sm font-medium">Gerenciar livros</span>
                </NavLink>
              </nav>
            </details>
          </nav>
        </div>
      </aside >

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
    </div >
  )
}