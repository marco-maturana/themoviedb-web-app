<template>
  <v-layout justify-space-around fluid wrap>
    <v-flex v-for="movie in movies" :key="movie.id" xs12 sm6 md4 lg3 pa-3>
      <movie-card
        :genres="movie.genres"
        :id="movie.id"
        :poster-path="movie.posterPath"
        :release-date="movie.releaseDate"
        :title="movie.title"
      ></movie-card>
    </v-flex>
  </v-layout>
</template>

<script>
import store from "./_store";
import MovieCard from "./_components/movie-card";
import { createNamespacedHelpers } from "vuex";

const STORE_KEY = "$_VIEWS_HOME";
const { mapActions, mapState } = createNamespacedHelpers(STORE_KEY);

export default {
  name: "ViewsHome",
  components: {
    MovieCard
  },
  computed: {
    ...mapState(["movies"])
  },
  methods: {
    ...mapActions(["upcoming"])
  },
  beforeCreate () {
    this.$registerStore({ name: STORE_KEY, module: store });
  },
  mounted () {
    this.upcoming();
  }
};
</script>
