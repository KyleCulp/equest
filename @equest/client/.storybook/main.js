module.exports = {
  stories: ['../src/components/*.story.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-info',
    '@storybook/addon-links',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        'babel-loader',
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true
          }
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};
