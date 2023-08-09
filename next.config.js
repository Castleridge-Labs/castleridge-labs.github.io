const { withContentlayer } = require("next-contentlayer");

import("./env.mjs").catch((err) => console.error(err));

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withContentlayer(nextConfig);