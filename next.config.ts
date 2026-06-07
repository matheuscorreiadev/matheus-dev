import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  ...(isProd && {
    basePath: "/matheus-dev",
    assetPrefix: "/matheus-dev",
  }),

  images: {
    unoptimized: true,
  },

  devIndicators: false,
};

export default nextConfig;