import { Metadata } from "next";

interface Post {
  id: number;
  title: string;
  body: string;
}

type Props = {
  params: Promise<{ postId: string }>;
};

async function getPost(id: string): Promise<Post> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error(`Ошибка ответа сервера: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Не удалось получить данные:`, error);
    throw error;
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { postId } = await params;
  const post = await getPost(postId);

  return {
    title: `${post.title} | My Blog`,
    description: post.body.slice(0, 160),
  };
};

export default async function PostPage({ params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const { postId } = await params;

  const post = await getPost(postId);

  return (
    <div>
      <h1 className="text-2xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
