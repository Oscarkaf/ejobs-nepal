import { Container } from "@/components/ui/Container";
import { insights } from "@/content/home";
import { getPosts } from "@/lib/wordpress";
import { PostsGrid } from "./PostsGrid";

export async function LatestPosts() {
  const { posts, totalPages } = await getPosts(1);

  return (
    <section className="mt-16 bg-tint py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-accent">{insights.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">{insights.title}</h2>
          <p className="mt-4 font-light">{insights.text}</p>
        </div>

        <PostsGrid initialPosts={posts} totalPages={totalPages} />
      </Container>
    </section>
  );
}