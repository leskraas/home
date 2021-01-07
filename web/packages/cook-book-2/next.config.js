const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
    withPWA({
        pwa: {
            disable: process.env.NODE_ENV === 'development',
            dest: 'public',
            runtimeCaching,
        },
        images: {
            domains: ['cdn.sanity.io'],
            deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        },
    })
);
