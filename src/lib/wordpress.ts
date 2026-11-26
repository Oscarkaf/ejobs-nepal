import { cacheLife } from "next/cache";
import { insights } from "@/content/home";

const WP_API = "https://ejobsnp.com/wp-json/wp/v2";
const POSTS_PER_PAGE = 3;

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  href: string;
  image: string | null;
  alt: string;
};

export type PostsPage = {
  posts: Post[];
  totalPages: number;
  source: "live" | "fallback";
};

type WpMedia = {
  source_url?: string;
  alt_text?: string;
  media_details?: { sizes?: Record<string, { source_url: string }> };
};

type WpPost = {
  id: number;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: { "wp:featuredmedia"?: WpMedia[] };
};

const ENTITIES: Record<string, string> = {
  amp: "&",
  quot: '"',
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: " ",
  hellip: "…",
};

/** WordPress returns HTML strings, so strip tags and decode entities like &#8217; */
function cleanText(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/&(\w+);/g, (match, name: string) => ENTITIES[name] ?? match)
    .replace(/\s+/g, " ")
    .trim();
}

/**  posts have no manual excerpt, so WordPress returns the full text, so cut it at a word boundary */
function truncate(text: string, max = 180): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(" ", max);
  return `${text.slice(0, cut > 0 ? cut : max)}…`;
}

function toPost(wp: WpPost): Post {
  const media = wp._embedded?.["wp:featuredmedia"]?.[0];
  return {
    id: wp.id,
    title: cleanText(wp.title.rendered),
    excerpt: truncate(cleanText(wp.excerpt.rendered)),
    href: wp.link,
    image: media?.media_details?.sizes?.medium_large?.source_url ?? media?.source_url ?? null,
    alt: media?.alt_text ?? "",
  };
}

const fallback: PostsPage = {
  posts: insights.posts.map((post, index) => ({
    id: index,
    title: post.title,
    excerpt: post.excerpt,
    href: post.href,
    image: post.image,
    alt: post.alt,
  })),
  totalPages: 1,
  source: "fallback",
};

export async function getPosts(page: number): Promise<PostsPage> {
  "use cache";
  cacheLife("hours");

  try {
    const response = await fetch(
      `${WP_API}/posts?per_page=${POSTS_PER_PAGE}&page=${page}&_embed=wp:featuredmedia`,
      { headers: { Accept: "application/json" } },
    );
    if (!response.ok) throw new Error(`WordPress API responded with ${response.status}`);

    const data = (await response.json()) as WpPost[];
    const totalPages = Number(response.headers.get("x-wp-totalpages") ?? "1");

    return { posts: data.map(toPost), totalPages, source: "live" };
  } catch (error) {
    console.error(`Could not load posts page ${page}, using fallback:`, error);
    return page === 1 ? fallback : { posts: [], totalPages: 1, source: "fallback" };
  }
}