<template>
  <v-app>
    <title>{{ title }}</title>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data () {
    return {
      title: process.env.VUE_APP_TITLE
    };
  }
};
</script>

<style lang="stylus">
  ::-webkit-scrollbar-track
    -webkit-box-shadow inset 0 0 6px rgba(0,0,0,0.3)
    background-color #F5F5F5
  ::-webkit-scrollbar
    width: 7px;
    height: 7px;
    background-color #F5F5F5
  ::-webkit-scrollbar-thumb
    background-color #333131
</style>
