import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ProductReview() {
  return (
    <>
      <h1>Отзывы на продукт</h1>
      <Suspense fallback={<p className="bg-green-500">Загрузка продукта...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p className="bg-red-500">Загрузка отзывов...</p>}>
        <Reviews />
      </Suspense>
    </>
  );
}
