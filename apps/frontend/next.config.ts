import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development
  // we don't want double rendering for our redux dispatch trigger
  reactStrictMode: false,
};

export default nextConfig;
