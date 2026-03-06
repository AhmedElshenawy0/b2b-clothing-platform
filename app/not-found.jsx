import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
        <p className="text-2xl font-bold text-gray-700 mb-2">Page Not Found</p>
        <p className="text-gray-500 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
