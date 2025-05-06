import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1>Продукты</h1>
      <Link href="/products/1">Продукт 1</Link>
      <Link href="/products/2">Продукт 2</Link>
      <Link href="/products/3">Продукт 3</Link>
    </>
  );
}
