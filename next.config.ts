import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.0.101', '192.168.0.102', '127.0.0.1'],
};

export default nextConfig;
