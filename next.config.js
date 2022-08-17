// @ts-nocheck
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

require('dotenv').config()

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withBundleAnalyzer({
  env: {
    BASE_URL: process.env.BASE_URL,
  },
})
