type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

// Выносим функции отдельно для лучшей организации кода
async function getUserPosts(userId: string) {
  // Искусственная задержка для демонстрации
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
}

async function getUserAlbums(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return res.json();
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const postsPromise = getUserPosts(id);
  const albumPromise = getUserAlbums(id);

  const [posts, albums] = await Promise.all([postsPromise, albumPromise]);

  return (
    <div className="grid grid-cols-2 gap-8 p-4">
      {/* Посты пользователя */}
      <div>
        <h2 className="text-xl font-bold mb-4">Посты пользователя</h2>
        <ul className="space-y-4">
          {posts.map((post: Post) => (
            <li key={post.id} className="border p-4 rounded-lg">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* Альбомы пользователя */}
      <div>
        <h2 className="text-xl font-bold mb-4">Альбомы пользователя</h2>
        <ul className="space-y-4">
          {albums.map((album: Album) => (
            <li key={album.id} className="border p-4 rounded-lg">
              <h3 className="font-semibold">{album.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
