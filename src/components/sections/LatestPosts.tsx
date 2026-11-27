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
    <section className="relative mt-16 overflow-hidden bg-tint py-20 md:py-28">
      {/* Aurora: two soft light blobs drifting behind the cards */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky/20 blur-3xl animate-[float_12s_ease-in-out_infinite] motion-reduce:animate-none" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl animate-[float_14s_ease-in-out_infinite] [animation-delay:-5s] motion-reduce:animate-none" />
      </div>

      <Container className="relative">
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