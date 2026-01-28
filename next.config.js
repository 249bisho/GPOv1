/** next.config.js - minimal config with i18n and image domains */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en'
  },
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com']
  }
}
