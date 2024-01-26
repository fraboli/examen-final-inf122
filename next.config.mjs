/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {hostname:'images.dog.ceo',}
        ],
    },
};
export default nextConfig;
