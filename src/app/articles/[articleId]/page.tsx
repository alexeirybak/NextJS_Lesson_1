

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{
    language?: "ru" | "en" | "fr" | "de" | undefined;
    edit?: string;
  }>;
}) {
  const { articleId } = use(params);
  const { language = "ru", edit } = use(searchParams);

  return (
    <div>
      <h1>Новости: {articleId}</h1>
      <p>Язык: {language}</p>
      <div>
        <Link href={`/articles/${articleId}?language=ru&edit=true`}>
          Читать по-русски (открыть модалку)
        </Link>
        <br />
        <Link href={`/articles/${articleId}?language=en`}>Read in English</Link>
        <br />
        <Link href={`/articles/${articleId}?language=fr`}>
          Lire en francais
        </Link>
        <br />
        <Link href={`/articles/${articleId}?language=de`}>
          Auf deutsch lesen
        </Link>
      </div>
      {edit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Редактирование</h2>
            <p>Здесь форма редактирования для статьи {articleId}</p>
            <div className="mt-4 flex justify-end">
              <Link
                className="px-4 py-2 bg-gray-300 rounded"
                href={`/articles/${articleId}?language=${language}`}
              >
                Закрыть
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
