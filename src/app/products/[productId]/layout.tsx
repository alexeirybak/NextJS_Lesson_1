function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Ошибка загрузки ответа");
  }
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
