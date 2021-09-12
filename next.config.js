/** @type {import('next').NextConfig} */

// const withPlugins = require('next-compose-plugins');
// const withImages = require('next-images');

// const nextConfig = {
//     images: {
//         domains: ['cleverkings-publicfiles.s3.ap-south-1.amazonaws.com'],
//     },
// };

// module.exports = withPlugins([[withImages]], nextConfig);
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['cleverkings-publicfiles.s3.ap-south-1.amazonaws.com', 'cleverkings-public.s3.ap-south-1.amazonaws.com'],
    },
    // webpack5: (config,{buildId,dev,isServer,defaultLoaders,webpack}) => {
    //   config.node = {
    //     fs:'empty'
    //   };
    //   return config
    // }
};

// refer - https://dev.to/akuks/what-is-getstaticprops-in-nextjs-3066
