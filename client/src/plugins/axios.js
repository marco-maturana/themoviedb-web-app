import axios from "axios";

export default (Vue) => {
  const port = process.env.VUE_PROXY_PORT || process.env.VUE_APP_PORT;
  axios.defaults.baseURL = `${process.env.VUE_APP_HOST}:${port}/api`;

  Vue.prototype.$axios = axios;
};
