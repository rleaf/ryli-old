// vue.config.js
module.exports = {
  chainWebpack: config => {
    // glsl Loader
    config.module
      .rule('glsl')
      .test(/\.glsl|vs|fs|vert|frag$/)
      .use('raw-loader')
         .loader('raw-loader')
         .end()
    config.module
          .rule('markdown-latex')
          .test(/\.(md|markdown|markdown-latex)$/)
          .use('raw-loader')
            .loader('raw-loader')
            .end()
  },
}

