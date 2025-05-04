const API_URL = "https://users-project.free.beeceptor.com/api/v2/users";

export async function GET() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch users");
    const users = await response.json();
    return Response.json(users);
  } catch {
    return new Response(null, { status: 500 });
  }
}
