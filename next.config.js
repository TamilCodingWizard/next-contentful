/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register:true,
  disable: process.env.NODE_ENV === 'development'
})
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:["images.ctfassets.net"]
  }
})

module.exports = nextConfig
