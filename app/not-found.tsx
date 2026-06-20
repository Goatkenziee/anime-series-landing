import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-6xl font-bold text-purple-500 mb-4">404</h1>
      <h2 className="text-2xl mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6">
        This dimension doesn&apos;t exist... yet.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
