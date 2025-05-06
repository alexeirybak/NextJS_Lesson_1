import { cookies } from "next/headers";

export default async function About() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  return (
    <>
      <h1>О компании</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  );
}
