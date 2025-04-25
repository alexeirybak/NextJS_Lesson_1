import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Главная страница</h1>
      <Link href="about">На страницу о компании</Link>
    </>
  );
}
