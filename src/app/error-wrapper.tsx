"use client";

// import { useState } from "react";

// function ErrorSimulator({ message }: { message: string }) {
//   const [error, setError] = useState(false);

//   if (error) {
//     throw new Error(message);
//   }

//   return (
//     <button
//       onClick={() => setError(true)}
//       className="px-4 py-2 bg-red-500 text-white rounded"
//     >
//       Сгенерировать ошибку
//     </button>
//   );
// }

export default function ErrorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-dashed border-red-500 p-4">
      {/* <ErrorSimulator message="Тестовая ошибка в корневом layout" /> */}
      {children}
    </div>
  );
}
