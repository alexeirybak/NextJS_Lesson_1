import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Наши контакты",
  },
  description: "Нас можно найти...",
};

export default function Contacts() {
  return (
    <div>
      <p>Contacts</p>
      <p>+1234567890</p>
      <Link href="/">На главную</Link>
      <br />
      <Link href="about">
        О компании
      </Link>
    </div>
  );
}
