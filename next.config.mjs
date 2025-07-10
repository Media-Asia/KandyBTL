/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/webmail',
        destination: 'https://biz35.lhws.net:2096',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
