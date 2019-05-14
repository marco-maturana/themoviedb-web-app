<template>
  <v-layout justify-space-around fluid wrap>
    <v-flex xs12 pa-3>
      <v-text-field
        clearable
        outline
        label="Search movie by name"
        append-icon="search"
        v-model.lazy="query"
      ></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-layout justify-center>
        <paginate/>
      </v-layout>
    </v-flex>
    <v-flex v-for="movie in movies" :key="movie.id" xs12 sm6 md4 lg3 pa-3>
      <movie-card
        :genres="movie.genres"
        :id="movie.id"
        :poster-path="movie.posterPath"
        :release-date="movie.releaseDate"
        :title="movie.title"
      ></movie-card>
    </v-flex>
    <v-flex xs12>
      <v-layout justify-center>
        <paginate/>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import store from "./_store";
import MovieCard from "./_components/movie-card";
import Paginate from "./_components/paginate";
import { createNamespacedHelpers } from "vuex";

const STORE_KEY = "$_VIEWS_HOME";
const { mapActions, mapState } = createNamespacedHelpers(STORE_KEY);

export default {
  name: "ViewsHome",
  components: {
    MovieCard,
    Paginate
  },
  computed: {
    ...mapState(["movies"]),
    query: {
      get () {
        return this.$store.state[STORE_KEY].query;
      },
      set (value) {
        this.$store.commit(`${STORE_KEY}/query`, value);
      }
    }
  },
  watch: {
    query () {
      this.search();
    }
  },
  methods: {
    ...mapActions(["search", "upcoming"])
  },
  beforeCreate () {
    this.$registerStore({ name: STORE_KEY, module: store });
  },
  mounted () {
    this.upcoming();
  }
};
</script>
