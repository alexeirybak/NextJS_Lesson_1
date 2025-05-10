"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);
  return (
    <div className="text-red-500 p-4">
      <h2>Ошибка загрузки данных</h2>
    </div>
  );
}
