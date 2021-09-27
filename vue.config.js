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
  }
}

