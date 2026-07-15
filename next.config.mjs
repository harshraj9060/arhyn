/** @type {import('next').NextConfig} */

const repo = "arhyn";

// true only when deploying to https://<username>.github.io/arhyntech
const isGithubPages = process.env.USE_GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: isGithubPages ? `/${repo}` : "",

  assetPrefix: isGithubPages ? `/${repo}/` : "",

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
