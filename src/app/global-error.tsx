"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="grid h-screen place-items-center bg-gray-100">
          <div className="text-center p-8 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Критическая ошибка в приложении!
            </h2>
            <p className="mb-6">{error.message}</p>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Перезагрузить приложение
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
