/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains: ['https://image.tmdb.org'],
    loader: "custom",
    path: '/',
  },
}

module.exports = nextConfig
