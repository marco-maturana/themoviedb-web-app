<template>
  <v-card class="views-home-components-movie-card">
    <v-layout align-start justify-start row fill-height wrap>
      <v-flex xs12>
        <v-layout align-center justify-center>
          <img
            class="movie-image"
            :src="`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${posterPath}`"
          />
        </v-layout>
      </v-flex>
      <v-flex xs12 pa-2>
        <v-layout align-space-around justify-space-between column fill-height>
          <v-flex xs12 >
            <div class="movie-title">
                <div class="subheading font-weight-bold">{{title}}</div>
                <div class="body-2 grey--text">{{releaseDate}}</div>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout align-end justify-end row fill-height>
          <v-btn flat color="primary">
            <v-icon left dark>remove_red_eye</v-icon>
            More Info
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "ViewsHomeComponentsMovieCard",
  props: {
    genres: {
      type: Array,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    posterPath: String,
    releaseDate: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
  .views-home-components-movie-card
    .movie-image
      height: 200px;

    .movie-title
      height: 65px
</style>
