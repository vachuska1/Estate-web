/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Odstraňte "output: export" - API routes budou fungovat
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Povolte CORS pro API
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST' }
        ]
      }
    ]
  }
};