/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: "raw.githubusercontent.com",
        }],
    },
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
};

export default nextConfig;
