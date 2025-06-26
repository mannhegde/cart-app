module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@stores': './src/stores',
          '@types': './src/types',
          '@utils': './src/utils',
          '@widgets': './src/widgets',
        },
      },
    ],
  ],
};
