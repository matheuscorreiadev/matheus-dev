import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  output: "export",

  basePath: "/matheus-dev",

  assetPrefix: "/matheus-dev",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
