type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersClient() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
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
