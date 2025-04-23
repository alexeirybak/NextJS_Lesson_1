"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ReviewNotFound() {
  const pathname = usePathname();

  const pathSegments = pathname.split("/");

  const productId = pathSegments[2];

  const reviewId = pathSegments[4];

  return (
    <div>
      <h2>
        Отзыв № {reviewId} для продукта {productId} не найден
      </h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
