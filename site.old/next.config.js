/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "qd-uploads-and-transfers-dev.s3.amazonaws.com",
                port: "",
                pathname: "**/*",
            },
        ],
    },

    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = nextConfig;
