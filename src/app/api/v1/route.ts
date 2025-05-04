import { redirect } from "next/navigation";
import { headers } from "next/headers";

const API_URL = "https://users-project.free.beeceptor.com/api/v1/users";

export async function GET() {
  //redirect("/api/v2");

  const isMobile = (await headers())
    .get("user-agent")
    ?.match(/Mobile|Android|iPhone/i);

  if (!isMobile) {
    redirect("/api/v2");
  }

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch users");
    const users = await response.json();
    return Response.json(users);
  } catch {
    return new Response(null, { status: 500 });
  }
}
