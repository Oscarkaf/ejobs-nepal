import { getPosts } from "@/lib/wordpress";

export async function GET(request: Request) {
  const page = Number(new URL(request.url).searchParams.get("page") ?? "1");

  if (!Number.isInteger(page) || page < 1 || page > 50) {
    return Response.json({ error: "Page must be a whole number between 1 and 50." }, { status: 400 });
  }

  const data = await getPosts(page);
    return Response.json(data, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}