/*
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-06-04 10:10:03
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-06-04 15:10:39
 * @FilePath: \Jenn_day06\01.axios\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.github.com",
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
