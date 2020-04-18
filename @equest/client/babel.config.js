module.exports = {
  presets: [
    // [
    //   '@babel/preset-env',
    //   {
    //     modules: false
    //   }
    // ],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    'emotion',
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    production: {
      presets: ['minify'],
    },
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
};
