<template>
  <v-pagination
    :length="pages"
    :total-visible="5"
    v-model="page"
    @input="search"
  ></v-pagination>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const STORE_KEY = "$_VIEWS_HOME";
const { mapActions, mapState } = createNamespacedHelpers(STORE_KEY);

export default {
  name: "ViewsHomeComponentsPaginate",
  computed: {
    ...mapState(["pages"]),
    page: {
      get () {
        return this.$store.state[STORE_KEY].page;
      },
      set (value) {
        this.$store.commit(`${STORE_KEY}/page`, value);
      }
    }
  },
  methods: {
    ...mapActions(["search"])
  }
};
</script>
