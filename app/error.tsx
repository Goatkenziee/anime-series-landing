"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h2 className="text-4xl font-bold text-orange-500 mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-400 mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
