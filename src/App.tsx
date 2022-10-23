import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from './lib/queryClient'
import { router } from './Router'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme
        enableAnimation={true}
        direction="ltr"
        baseColor="#323238"
        highlightColor="#29292E"
      >
        <RouterProvider router={router} />
      </SkeletonTheme>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
