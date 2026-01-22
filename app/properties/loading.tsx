import { Skeleton } from "@/components/ui/skeleton";
import { Header } from "@/components/header";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Page Header Skeleton */}
        <section className="bg-muted py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-8">
              <Skeleton className="h-4 w-32 mx-auto" />
              <Skeleton className="h-10 w-64 mx-auto" />
              <Skeleton className="h-5 w-96 mx-auto" />
            </div>
            <div className="flex justify-center">
              <Skeleton className="h-10 w-full max-w-2xl" />
            </div>
          </div>
        </section>

        {/* Property Grid Skeleton */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4 border-b border-border mb-8">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-9 w-32" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-[4/3] w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
