"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentSelector({
  initialPostId = "1",
}: {
  initialPostId?: string;
}) {
  const [postId, setPostId] = useState(initialPostId);
  const [commentId, setCommentId] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postId || !commentId) return;
    router.push(`/posts/${postId}/comments/${commentId}`);
  };

  return (
    <div>
      <h3>Выбрать другой комментарий</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Номер поста</label>
          <input
            type="number"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            placeholder="Номер поста"
            min="1"
            required
            className="border p-2"
          />
        </div>
        <div>
          <label>Номер комментария</label>
          <input
            type="number"
            value={commentId}
            onChange={(e) => setCommentId(e.target.value)}
            placeholder="Номер комментария"
            min="1"
            required
            className="border p-2"
          />
        </div>
        <button type="submit">Перейти</button>
      </form>
    </div>
  );
}
