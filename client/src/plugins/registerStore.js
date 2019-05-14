import store from "@/store";

export default (Vue) => {
  function registerStore (options) {
    if (!options.name) throw new Error("Enter the name of the vuex module!");

    if (!(options.name in store._modules.root._children)) {
      store.registerModule(options.name, options.module, options.registerOptions);
    }
  }

  Vue.prototype.$registerStore = registerStore;
};
