import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div className="flex flex-col">
        <h2>Объявления</h2>
        <Link href="/complex-dashboard">Активные</Link>
        <Link href="/complex-dashboard/archived">Архив</Link>
      </div>
    </Card>
  );
}
