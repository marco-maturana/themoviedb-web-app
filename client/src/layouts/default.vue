<template>
  <v-layout>
    <v-toolbar app>
      <v-layout align-center justify-center fill-height>
        <img class="toolbar-logo" src="@/assets/logo.png" />
      </v-layout>
    </v-toolbar>
    <v-container fluid :pa-1="$vuetify.breakpoint.xsOnly">
      <router-view/>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "LayoutsDefault"
};
</script>

<style lang="stylus">
  .toolbar-logo
    width: 150px;
</style>
