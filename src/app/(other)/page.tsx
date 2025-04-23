import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Главная страница</h1>
      <nav>
        <h2>Документация:</h2>
        <ul>
          
          <li>
            <Link href="/docs/React">React</Link>
          </li>
          <li>
            <Link href="/docs/React/Hooks">React Hooks</Link>
          </li>
          <li>
            <Link href="/docs/React/Hooks/useState">Hook useState</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
