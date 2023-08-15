import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HUBSPOT_CRM_TOKEN: process.env.HUBSPOT_CRM_TOKEN,
  },
};

const millionConfig = {
  // auto: true,
  // if you're using RSC:
  auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
