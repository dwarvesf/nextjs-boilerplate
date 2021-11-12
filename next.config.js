// @ts-check

require('dotenv').config()

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}
