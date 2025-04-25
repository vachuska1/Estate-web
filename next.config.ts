/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "/",
  images: {
    unoptimized: true, // Vypne optimalizaci obrázků
  },
};
export default nextConfig;
