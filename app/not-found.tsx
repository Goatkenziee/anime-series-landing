import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-20 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
        <div className="relative">
          <h1 className="text-8xl font-bold tracking-tighter sm:text-9xl">
            <span className="gradient-text">404</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 sm:text-2xl">
            This page has vanished into the void...
          </p>
          <p className="mt-2 text-sm text-gray-500">
            The dimension you&apos;re looking for doesn&apos;t exist in this universe.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-600/30"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
