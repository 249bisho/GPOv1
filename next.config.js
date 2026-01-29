/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar'], // The languages you support
    defaultLocale: 'en',   // The default language
    localeDetection: true, // Automatically detects user location/browser language
  },
}

module.exports = nextConfig
