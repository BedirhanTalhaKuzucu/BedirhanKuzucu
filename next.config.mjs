/** @type {import('next').NextConfig} */
const nextConfig = {
  imagese: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
