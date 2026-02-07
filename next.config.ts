import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/analytics",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
