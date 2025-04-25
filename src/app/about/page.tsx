import Link from "next/link";

export const metadata = {
  title: 'Страница о компании',
  description: 'Информация о нашей компании...'
}

export default function AboutPage() {
  return (
    <>
      <h1>Страница о компании</h1>
      <Link href="/">На главную</Link>
    </>
  );
}
