const isDebug = process.env?.LOG_LEVEL === 'debug';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: !isDebug,
  },
};

export default nextConfig;
