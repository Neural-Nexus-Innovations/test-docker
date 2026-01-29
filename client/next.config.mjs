/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  eslint: {
    // This allows the build to finish even if there are linting warnings/errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
