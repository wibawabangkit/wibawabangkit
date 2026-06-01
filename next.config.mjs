/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/wibawabangkit',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
