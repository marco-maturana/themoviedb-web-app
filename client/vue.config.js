const dotenv = require("dotenv");
const path = require("path");
const env = dotenv.config({ path: "../.env" }).parsed;

process.env.VUE_APP_HOST = env.APP_HOST;
process.env.VUE_APP_PORT = env.APP_PORT;
process.env.VUE_APP_TITLE = env.APP_TITLE;
process.env.VUE_PROXY_PORT = env.PROXY_PORT;

const root = path.join(__dirname, "src");

module.exports = {
  outputDir: "../server/public",
  pwa: {
    name: "TheMovieDB Web App",
    themeColor: "#ff8606",
    msTileColor: "#ff8606"
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": root
      }
    }
  }
};
