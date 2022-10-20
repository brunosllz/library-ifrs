import useBreadcrumbs, { BreadcrumbData } from 'use-react-router-breadcrumbs'
import { Link } from 'react-router-dom'
import { routes } from '../Router'
import { CaretRight } from 'phosphor-react'

export function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes)

  function isLast(index: number) {
    return index === breadcrumbs.length - 1
  }

  return (
    <div className="flex gap-3">
      {breadcrumbs.map(
        ({ match: { pathname }, breadcrumb, key }: BreadcrumbData, index) => {
          return (
            <>
              {isLast(index) ? (
                <span key={key} className="text-gray-200">
                  {breadcrumb}
                </span>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    to={pathname}
                    key={key}
                    className="text-gray-100 font-bold hover:text-gray-200 transition-colors"
                  >
                    {breadcrumb}
                  </Link>
                  <CaretRight weight="bold" size={16} />
                </div>
              )}
            </>
          )
        },
      )}
    </div>
  )
}
