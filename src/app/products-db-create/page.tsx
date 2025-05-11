import { Submit } from "@/components/submitBtn";
import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function AddProductPage() {
  async function createProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    await addProduct(title, parseInt(price), description);
    redirect("/products-db");
  }

  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Название
        <input
          type="text"
          className="block w-full p-2 text-black border rounded bg-white"
          name="title"
        />
      </label>
      <label className="text-white">
        Цена
        <input
          type="number"
          className="block w-full p-2 text-black border rounded bg-white"
          name="price"
        />
      </label>
      <label className="text-white">
        Описание
        <textarea
          className="block w-full p-2 text-black border rounded bg-white"
          name="description"
        />
      </label>
      <Submit />
    </form>
  );
}
