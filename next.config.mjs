/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
