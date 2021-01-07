module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@src': './src',
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@locales': './src/assets/locales',
          '@styles': './src/assets/styles',
          '@components': './src/components',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@templates': './src/components/templates',
          '@constants': './src/constants',
          '@dummies': './src/dummies',
          '@helpers': './src/helpers',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@stores': './src/stores',
          '@sagas': './src/sagas',
        },
      },
    ],
  ],
};
