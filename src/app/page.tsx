import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Главная страница</div>
      <Link href="/complex-dashboard">К панели управления</Link>
    </>
  );
}
