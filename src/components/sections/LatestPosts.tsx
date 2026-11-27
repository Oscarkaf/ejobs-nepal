import { Container } from "@/components/ui/Container";
import { insights } from "@/content/home";
import { getPosts, type Post } from "@/lib/wordpress";
import { PostsGrid } from "./PostsGrid";

const MAX_PAGES = 6;

export async function LatestPosts() {
  const first = await getPosts(1);
  const totalPages = Math.min(first.totalPages, MAX_PAGES);

  // Fetch the remaining pages in parallel on the server, so switching pages in the browser is instant
  const rest = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) => getPosts(index + 2)),
  );

  const initialPages: Record<number, Post[]> = { 1: first.posts };
  rest.forEach((result, index) => {
    if (result.posts.length > 0) initialPages[index + 2] = result.posts;
  });

  return (
    <section className="mt-16 bg-tint py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-accent">{insights.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">{insights.title}</h2>
          <p className="mt-6 font-light">{insights.text}</p>
        </div>

        <PostsGrid initialPages={initialPages} totalPages={totalPages} />
      </Container>
    </section>
  );
}