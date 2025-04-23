export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-green-400">
      <aside>
        <h3>Рекомендуемые товары</h3>
      </aside>
      <h3>Все продукты</h3>
      <main>{children}</main>
    </div>
  );
}
