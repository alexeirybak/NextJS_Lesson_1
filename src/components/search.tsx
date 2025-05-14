import Form from "next/form";

export function Search() {
  return (
    <Form action="/products-db" className="flex gap-2 mt-5 ml-10">
      <input name="query" placeholder="Найти продукты" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Поиск
      </button>
    </Form>
  );
}
