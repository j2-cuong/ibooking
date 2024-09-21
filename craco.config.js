const CracoLessPlugin = require("craco-less-plugin-clone");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyVars: {
          hack: `true;@import "${require.resolve(
            "./src/assets/less/yoda-theme.less"
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  ],
};
