const API_URL = "https://67ed28164387d9117bbc7da1.mockapi.io/api/v1/comments";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch comments");
    const comments = await response.json();
    return Response.json(comments);
  } catch {
    return new Response(null, { status: 404 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { text } = await request.json();

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) throw new Error("Update failed");

    return Response.json(await response.json());
  } catch {
    return Response.json(null, { status: 400 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Failed to delete comments");
    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 400 });
  }
}
