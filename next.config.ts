import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: any) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const nextConfig: NextConfig = {
    output: isDev ? undefined : "export",
    distDir: isDev ? undefined : "../dist",
  };
  return nextConfig;
};

export default nextConfig;
