type Author = {
  id: number;
  name: string;
};

export async function Author({ userId }: { userId: number }) {
  // Искусственная задержка для демо
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const user: Author = await response.json();
  
  return (
    <div className="text-sm text-gray-500">
      Автор: <span className="text-gray-400">{user.name}</span>
    </div>
  );
}
