import Link from "next/link";

export default function F1() {
  return (
    <div>
      <h1>F1 Page</h1>
      <Link href="/f1/f2">Go to F2</Link>
      <br />
      <Link href="/f3">Go to F3</Link>
    </div>
  );
}
