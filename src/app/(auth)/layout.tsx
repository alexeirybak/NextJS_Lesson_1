export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-red-300">
        <main>{children}</main>
        <footer>Подвал для страниц аутентификации</footer>
      </body>
    </html>
  );
}
