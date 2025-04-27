import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Главная страница</div>
      <Link href="posts/3">К посту</Link>
    </>
  );
}
