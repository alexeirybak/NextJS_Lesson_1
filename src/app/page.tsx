import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Главная</div>
      <Link href="about">О компании</Link>
    </>
  );
}
