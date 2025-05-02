"use client";

import { useEffect, useState } from "react";

type Comment = {
  id: string;
  text: string;
};

export default function Home() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadComments();
  }, []);

  async function loadComments() {
    const res = await fetch("/comments");
    const data = await res.json();
    setComments(data);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/comments", {
      method: "POST",
      body: JSON.stringify({ text: newCommentText }),
    });

    if (response.ok) {
      setNewCommentText("");
      loadComments();
    }
  }

  async function handleUpdate(id: string) {
    const response = await fetch(`/comments/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ text: editText }),
    });

    if (response.ok) {
      setEditingId(null);
      loadComments();
    }
  }

  async function handleDelete(id: string) {
    await fetch(`/comments/${id}`, {
      method: "DELETE",
    });

    loadComments();
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Комментарии</h2>
      <ul className="mb-6">
        {comments.map((comment) => (
          <li key={comment.id} className="mb-2 p-2 border rounded">
            {editingId === comment.id ? (
              <div className="flex gap-2">
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border p-1 flex-1"
                />
                <button
                  onClick={() => handleUpdate(comment.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Сохранить
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span>{comment.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingId(comment.id);
                      setEditText(comment.text);
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Изменить
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-4">Добавить комментарий</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Ваш комментарий"
          className="border p-2 flex-1"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Добавить комментарий
        </button>
      </form>
    </>
  );
}
