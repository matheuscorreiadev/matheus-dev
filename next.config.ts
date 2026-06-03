import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/matheus-dev",
  assetPrefix: "/matheus-dev",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
