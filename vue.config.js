const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports={
  chainWebpack: (config) => {
    // 移除 prefetch 插件(针对生产环境首屏请求数进行优化)
    config.plugins.delete('prefetch')
    // 移除 preload 插件(针对生产环境首屏请求数进行优化)   preload 插件的用途：https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
    config.plugins.delete('preload')
    // 第1个参数：别名，第2个参数：路径  （设置路径别名）
    config.resolve.alias
        .set('@assets', resolve('./src/assets'))
        .set('@common', resolve('./src/common'))
        .set('@components', resolve('./src/components'))
        .set('@network', resolve('./src/network'))
        .set('@views', resolve('./src/views'))
  }
}