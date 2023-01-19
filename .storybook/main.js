const config = {
  viteFinal(config) {
    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/main.scss";',
        },
        modules: {
          generateScopedName: '[name]__[local]__[hash:base64:5]',
        },
      },
    };

    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: false,
  },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
  },
};

module.exports = config;
