"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <div className="relative">
        <div className="absolute -inset-20 rounded-full bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-3xl" />
        <div className="relative">
          <h1 className="text-7xl font-bold tracking-tighter sm:text-8xl">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Error
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Something went wrong in this dimension.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {error.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={reset}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-600/30"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
