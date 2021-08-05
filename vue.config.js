module.exports = {
  lintOnSave: true,

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/styles/vars";',
      },
    },
  },
};
