// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Ошибка загрузки ответа");
  // }

  return (
    <h1>
      Отзыв {reviewId} на продукт {productId}
    </h1>
  );
}
