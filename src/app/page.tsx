import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/articles/news?language=ru&edit=true">Читать по-русски (с модалкой)</Link>
      <br />
      <Link href="/articles/news?language=en">Read in English</Link>
      <br />
      <Link href="/articles/news?language=fr">Lire en francais</Link>
      <br />
      <Link href="/articles/news?language=de">Auf deutsch lesen</Link>
    </div>
  );
}
