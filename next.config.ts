import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.postershop.me",
      },
    ],
  },
};

export default nextConfig;
