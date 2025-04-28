import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col">
        <h2>Архив объявлений</h2>
        <Link href="/complex-dashboard">Активные</Link>
      </div>
    </Card>
  );
}
