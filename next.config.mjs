/** @type {import('next').NextConfig} */

const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";

const repo = "arhyn";

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  basePath: isGithubPages ? `/${repo}` : "",

  assetPrefix: isGithubPages ? `/${repo}/` : "",

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;