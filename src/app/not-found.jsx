import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl md:text-9xl font-extrabold text-red-600">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base">
          {` Sorry, the page you're looking for doesn't exist. It might have been removed or you may have mistyped the URL.`}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-10 border-t pt-4 text-xs text-gray-400">
          copyright- 2026 CodeAloy LTD. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
