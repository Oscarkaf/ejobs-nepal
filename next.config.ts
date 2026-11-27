import type { NextConfig } from "next";

const LIVE_SITE = "https://ejobsnp.com";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // The original site linked to /about/ in one place and /about-us/ in another
      { source: "/about", destination: "/about-us/", permanent: true },
      // Pages not rebuilt yet: send visitors to the live WordPress pages instead of a 404
      { source: "/our-services", destination: `${LIVE_SITE}/our-services/`, permanent: false },
      { source: "/contact", destination: `${LIVE_SITE}/contact/`, permanent: false },
      { source: "/blog", destination: `${LIVE_SITE}/blog/`, permanent: false },
      { source: "/job-list", destination: `${LIVE_SITE}/job-list/`, permanent: false },
    ];
  },
};

export default nextConfig;