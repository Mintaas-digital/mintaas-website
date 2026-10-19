import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack otherwise walks up to the nearest lockfile to infer the repo
  // root, which can land outside this project's git repo. Pin it here.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;
