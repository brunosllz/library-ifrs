import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function SkeletonBookDetails() {
  return (
    <div className="flex gap-10">
      <div className="min-w-[300px] h-[464px] rounded-md overflow-hidden flex items-center justify-center">
        <Skeleton height={464} width={300} />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div>
          <Skeleton className="w-full h-8" />
        </div>

        <div className="flex-1">
          <Skeleton className="h-full" />
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <Skeleton className="w-[186px] h-6" />
            </div>

            <div>
              <Skeleton className="w-[186px] h-6" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <Skeleton className="w-[186px] h-6" />
            </div>
            <div>
              <Skeleton className="w-[186px] h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
