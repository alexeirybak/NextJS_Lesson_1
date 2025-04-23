export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Описание продукта {productId}</h1>;
}

// export default async function ProductDetails({ params }) {
//   const productId = (await params).productId;
//   return <h1>Описание продукта {productId}</h1>;
// }
