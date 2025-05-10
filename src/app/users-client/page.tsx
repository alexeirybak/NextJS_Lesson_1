"use client";

import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Ошибка загрузки данных");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error}</p>;
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Список пользователей</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded-lg">
            <p>
              <strong>Имя:</strong> {user.name}
            </p>
            <p>
              <strong>Логин:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Телефон:</strong> {user.phone}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
