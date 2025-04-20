import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link className="text-blue-800" href="/about">
        Перейти на страницу о нас
      </Link>
      <br />
      <Link className="text-red-600" href="/dashboard">
        Перейти в панель управления
      </Link>
    </div>
  );
}
