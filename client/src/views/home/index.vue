<template>
  <v-layout justify-space-around fluid wrap>
    Test
  </v-layout>
</template>

<script>
import store from "./_store";

const STORE_KEY = "$_VIEWS_HOME";

export default {
  name: "ViewsHome",
  beforeCreate () {
    this.$registerStore({ name: STORE_KEY, module: store });
  }
};
</script>
