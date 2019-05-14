<template>
  <v-dialog
    width="500"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    v-model="dialog"
  >
    <v-card>
      <v-toolbar dense class="title font-weight-medium" color="secondary" dark>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = !dialog">
          <v-icon>cancel</v-icon>
        </v-btn>
      </v-toolbar>
      <v-layout align-space-around justify-space-between column fill-height pt-2 px-3>
        <v-flex xs12>
          <v-layout align-center justify-center>
            <img
              class="movie-image"
              :src="`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.posterPath}`"
            />
          </v-layout>
        </v-flex>
        <v-flex xs12 pt-3>
          <div class="movie-title">
            <div class="title font-weight-bold text-xs-center">{{movie.title}}</div>
          </div>
        </v-flex>
        <v-flex xs12>
          <div class="body-2 grey--text">Release date: {{movie.releaseDate}}</div>
        </v-flex>
        <v-flex xs12 pt-2>
          <div class="subheading font-weight-bold">Overview</div>
        </v-flex>
        <v-flex xs12 py-3 class="text-xs-justify">
          {{movie.overview}}
        </v-flex>
        <v-flex xs12 pt-2>
          <div class="subheading font-weight-bold">Genres</div>
        </v-flex>
        <v-flex xs12 py-3>
        <div class="movie-genres">
          <v-chip
            small
            label
            color="secondary"
            text-color="white"
            v-for="genre in movie.genres" :key="genre"
          >
            {{genre}}
          </v-chip>
        </div>
      </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const STORE_KEY = "$_VIEWS_HOME";
const { mapState } = createNamespacedHelpers(STORE_KEY);

export default {
  name: "ViewsHomeComponentsMovieDialog",
  computed: {
    ...mapState(["movie"]),
    dialog: {
      get () {
        return this.$store.state[STORE_KEY].dialog;
      },
      set (value) {
        this.$store.commit(`${STORE_KEY}/dialog`, value);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  .movie-title
    height: 50px
</style>

