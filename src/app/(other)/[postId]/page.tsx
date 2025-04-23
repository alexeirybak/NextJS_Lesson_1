export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((res) => res.json());

  return (
    <div>
      <h1 className="text-2xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
