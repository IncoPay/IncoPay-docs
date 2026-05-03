import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Avoid flaky vendor-chunk splitting for this ESM-heavy package (fixes missing ./vendor-chunks/@mintlify.js in dev).
  serverExternalPackages: ["@mintlify/components"],
};

export default nextConfig;
