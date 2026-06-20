import type { NextPage } from "next";
import type { ErrorProps } from "next/error";

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">{statusCode}</h1>
        <p className="mt-4 text-xl text-gray-400">
          {statusCode === 404
            ? "Page not found"
            : "An unexpected error occurred"}
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-lg bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default ErrorPage;
