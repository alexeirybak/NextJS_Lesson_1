import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      new URL("https://static-cse.canva.com/blob/846900/**"),
      new URL("https://i.pinimg.com/736x/be/39/7c/**"),
    ],
    formats: ["image/avif", "image/webp"],
  },
};

//https://i.pinimg.com/736x/be/39/7c/
