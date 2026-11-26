import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.versuscrm.com.br" }],
        destination: "https://versuscrm.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
