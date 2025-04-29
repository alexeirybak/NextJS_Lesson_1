export default function ComplexDashboardLayout({
  children,
  advertising,
  menu,
  notifications,
  login,
}: {
  children: React.ReactNode;
  advertising: React.ReactNode;
  menu: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;

  return (
    <div>
      <div>{children}</div>
      {isLoggedIn ? (
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{advertising}</div>
            <div>{menu}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      ) : (
        login
      )}
    </div>
  );
}
