import { Author } from "./author";
import { Suspense } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // 1. Загружаем посты
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const allPosts: Post[] = await postsResponse.json();
  // Фильтруем (для демо берем каждый 10-й пост)
  const posts = allPosts.filter((post) => post.id % 10 === 0);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Последние посты</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.body}</p> 
            {/* Компонент автора */}
            <div className="text-sm text-blue-500">
              <Suspense
                fallback={
                  <span className="text-gray-400">Загрузка автора...</span>
                }
              >
                <Author userId={post.userId} />
              </Suspense>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
