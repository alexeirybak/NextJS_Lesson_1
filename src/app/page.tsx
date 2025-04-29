import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Главная страница</div>
      <Link href="/paint-feed">К галереи</Link>
    </>
  );
}
