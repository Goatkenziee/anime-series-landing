import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#0a0a1a] text-white flex items-center justify-center">
      <div className="text-center z-10 px-4">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">
          Dimension Not Found
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          This portal leads to an unknown dimension. The Shadow Realm awaits your
          return.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
