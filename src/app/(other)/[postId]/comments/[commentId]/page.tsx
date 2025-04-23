import CommentSelector from "../_components/CommentSelector";

export default async function CommentPage({
  params,
}: {
  params: Promise<{ postId: string; commentId: string }>;
}) {
  const { postId, commentId } = await params;

  const comment = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}?postId=${postId}`
  ).then((res) => res.json());

  return (
    <div>
      <h2 className="text-2xl">Комментарий #{comment.id}</h2>
      <p>{comment.body}</p>
      <p className="text-amber-600">Автор: {comment.email}</p>
      <CommentSelector />
    </div>
  );
}
