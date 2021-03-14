module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
    '@vue/babel-plugin-jsx'
  ],
};
