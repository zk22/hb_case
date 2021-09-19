const path = require('path'); // eslint-disable-line

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = __dirname;

    config.module.rules.push({
      test: /\.svg$/,
      include: new RegExp(
        ['components', 'atoms', 'icon', 'icons', '.*\\.svg$'].join(
          `\\${path.sep}`
        )
      ),
      use: [
        {
          loader: 'svg-inline-loader',
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    // or disable plugins
                    removeViewBox: false,
                    cleanupIDs: false,
                  },
                },
              },
              // Enable builtin plugin not included in preset
              'removeDimensions',
              'removeTitle',
            ],
          },
        },
      ],
    });

    return config;
  },
};
