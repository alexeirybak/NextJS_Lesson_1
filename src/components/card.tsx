export default function Card({ children }: { children: React.ReactNode }) {
  const cardStyle = {
    padding: 30,
    margin: 10,
    boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid #cdcdcd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={cardStyle}>{children}</div>;
}
