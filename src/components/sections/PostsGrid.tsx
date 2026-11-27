"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import type { Post } from "@/lib/wordpress";

type Props = { initialPages: Record<number, Post[]>; totalPages: number };

const PAGE_BUTTON_STEP = 44; // 36px button + 8px gap, used to slide the active-page indicator

export function PostsGrid({ initialPages, totalPages }: Props) {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState<Record<number, Post[]>>(initialPages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  /** Pages are preloaded on the server; this is only a fallback if one is missing */
  async function loadPage(target: number): Promise<Post[]> {
    if (pages[target]) return pages[target];

    const response = await fetch(`/api/posts/?page=${target}`);
    if (!response.ok) throw new Error(`Request failed with ${response.status}`);

    const data: { posts: Post[] } = await response.json();
    if (data.posts.length === 0) throw new Error("No posts returned");

    setPages((previous) => ({ ...previous, [target]: data.posts }));
    return data.posts;
  }

  async function goTo(target: number) {
    if (target === page || loading) return;
    setError(null);

    if (pages[target]) {
      setPage(target);
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }

    setLoading(true);
    try {
      await loadPage(target);
      setPage(target);
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch {
      setError("These articles couldn't be loaded. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const posts = pages[page] ?? [];
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      <div
        key={page}
        ref={gridRef}
        aria-live="polite"
        aria-busy={loading}
        className={`mt-14 grid scroll-mt-32 gap-8 transition-opacity duration-300 md:grid-cols-2 lg:grid-cols-3 ${loading ? "opacity-50" : "opacity-100"}`}
      >
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="animate-[card-flip-in_0.8s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <TiltCard className="h-full">
              <PostCard post={post} />
            </TiltCard>
          </div>
        ))}
      </div>

      {error && (
        <p role="alert" className="mt-6 text-center text-sm text-red-700">
          {error}
        </p>
      )}

      {totalPages > 1 && (
        <nav aria-label="Article pages" className="relative mx-auto mt-12 flex w-max gap-2">
          {/* Indicator that glides to the active page */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-9 w-9 rounded-full bg-navy-900 shadow-[0_6px_16px_rgba(1,29,77,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(${(page - 1) * PAGE_BUTTON_STEP}px)` }}
          />
          {pageNumbers.map((number) => (
            <button
              key={number}
              type="button"
              onClick={() => goTo(number)}
              aria-current={number === page ? "page" : undefined}
              aria-label={`Page ${number}`}
              className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors duration-300 ${
                number === page ? "text-white" : "text-ink hover:bg-white"
              }`}
            >
              {number}
            </button>
          ))}
        </nav>
      )}
    </>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group h-full overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_rgba(23,62,143,0.08)] ring-1 ring-transparent transition-shadow duration-300 hover:ring-sky/40 hover:shadow-[0_0_0_4px_rgba(1,164,235,0.08),0_20px_40px_rgba(23,62,143,0.15)]">
      <a href={post.href} tabIndex={-1} aria-hidden="true" className="block p-3">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-tint">
          {post.image && (
            <Image
              src={post.image}
              alt=""
              fill
              unoptimized={post.image.startsWith("http")}
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          {/* Gradient and label that rise into view on hover */}
          <div className="absolute inset-0 flex items-end bg-linear-to-t from-navy-950/75 via-navy-950/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="translate-y-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
              Read article →
            </span>
          </div>
        </div>
      </a>
      <div className="px-6 pb-6 pt-3">
        <p className="text-xs text-body">
          E Jobs Nepal <span aria-hidden="true" className="mx-2">|</span> No Comments
        </p>
        <h3 className="mt-3 line-clamp-2 text-xl leading-snug text-ink">
          <a href={post.href} className="transition-colors hover:text-brand">
            {post.title}
          </a>
        </h3>
        <p className="mt-3 line-clamp-2 text-sm font-light">{post.excerpt}</p>
        <a
          href={post.href}
          aria-label={`Read more about ${post.title}`}
          className="mt-3 inline-flex items-center gap-1 py-1 text-xs font-semibold uppercase tracking-wide text-brand transition-all hover:gap-2"
        >
          Read more <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}