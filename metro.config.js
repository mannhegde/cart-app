const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
    resolver: {
        alias: {
            '@': './src',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@stores': './src/stores',
            '@models': './src/models',
            '@utils': './src/utils',
            '@widgets': './src/widgets',
        },
    },
};

module.exports = mergeConfig(defaultConfig, config);
