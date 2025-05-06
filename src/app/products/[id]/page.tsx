import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const idNum = Number(id);

  if (isNaN(idNum) || idNum > 10 || idNum < 1) {
    notFound();
  }

  return (
    <div>
      <h1>Описание продукта {id}</h1>
      <p>Создано: {new Date().toLocaleString()}</p>
    </div>
  );
}
