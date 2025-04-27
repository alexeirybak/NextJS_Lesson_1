"use client"; // Обязательно для Error Boundary!

// export default function ErrorBoundary({ error }: { error: Error }) {
//   return (
//     <div className="p-4 bg-red-100 text-red-800">
//       ⚠️ {error.message}
//       <button
//         onClick={() => window.location.reload()}
//         className="ml-2 px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
//       >
//         Попробовать снова
//       </button>
//     </div>
//   );
// }

// export default function ErrorBoundary({
//   error,
//   reset,
// }: {
//   error: Error;
//   reset: () => void;
// }) {
//   return (
//     <div className="p-4 bg-red-100 text-red-800">
//       <p>Ошибка: {error.message}</p>
//       <button
//         onClick={reset}
//         className="ml-2 px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
//       >
//         Попробовать снова
//       </button>
//     </div>
//   );
// }

import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const handleRetry = () => {
    startTransition(() => {
      reset(); // Сброс клиентского состояния
      router.refresh(); // Перезагрузка серверных данных
    });
  };
  return (
    <div className="p-4 bg-red-100 text-red-800">
      <p>Ошибка: {error.message}</p>
      <button
        onClick={handleRetry}
        className="ml-2 px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
      >
        Попробовать снова
      </button>
    </div>
  );
}
