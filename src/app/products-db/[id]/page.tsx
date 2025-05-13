import { getProduct } from "@/prisma-db";
import EditProductForm from "./product-edit-form";
import { Product } from "@/app/products-db/page";
import { notFound } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
}
