import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "**.gstatic.com",
        port: "",
        // pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "healthify.ng",
        port: "",
      },
    ],
  },
};

export default nextConfig;
