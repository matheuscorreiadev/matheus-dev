// import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

// const nextConfig: NextConfig = {
//   output: "export",

//   ...(isProd && {
//     basePath: "/matheus-dev",
//     assetPrefix: "/matheus-dev",
//   }),

//   images: {
//     unoptimized: true,
//   },

//   devIndicators: false,
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     unoptimized: true,
//   },
//   devIndicators: false,
// };

// export default nextConfig;


import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  basePath: isGithubPages ? "/matheus-dev" : "",
  assetPrefix: isGithubPages ? "/matheus-dev" : "",
};

export default nextConfig;