//import { comments } from "./data";
import { NextRequest } from "next/server";

const API_URL = "https://jsonplaceholder.typicode.com/comments";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("query") || "";
  const limit = Number(searchParams.get("limit")) || 10;

  try {
    const response = await fetch(API_URL);

    let comments: Comment[] = await response.json();

    if (query) {
      comments = comments.filter((comment) =>
        comment.body.toLowerCase().includes(query.toLowerCase())
      );
    }

    return Response.json(comments.slice(0, limit));
  } catch {
    return Response.json([]);
  }
}
