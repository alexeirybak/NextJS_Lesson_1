import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>Главная</main>
      <Link href="users-server">К юзерам</Link>
    </>
  );
}
