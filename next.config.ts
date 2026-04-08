import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ["@mui/material", "@mui/system", "@mui/icons-material"],
};

export default nextConfig;
