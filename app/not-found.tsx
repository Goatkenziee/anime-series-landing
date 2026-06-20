import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a1a] text-white">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <p className="mt-4 text-xl text-gray-400">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-orange-500 px-8 py-3 font-semibold text-black transition hover:bg-orange-400"
      >
        Return Home
      </Link>
    </div>
  );
}
