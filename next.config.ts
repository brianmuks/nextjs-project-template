import type { NextConfig } from "next";

// Hosts next/image may optimise, as a comma-separated list, e.g.
// "abc123.supabase.co,cdn.example.com". Allowing every host ("**") lets
// anyone use the image optimiser as a free proxy and run up your bill.
const imageHosts = (process.env.NEXT_PUBLIC_IMAGE_HOSTS ?? "")
  .split(",")
  .map((host) => host.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    // Don't follow redirects, so an allowed host can't bounce the optimiser elsewhere.
    maximumRedirects: 0,
    remotePatterns: imageHosts.map((hostname) => ({
      protocol: "https" as const,
      hostname,
    })),
  },
};

export default nextConfig;
