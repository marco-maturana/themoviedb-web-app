<template>
  <v-card>
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
        <div class="movie-genres">
          <v-chip
            small
            label
            color="secondary"
            text-color="white"
            v-for="genre in genres" :key="genre"
          >
            {{genre}}
          </v-chip>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-layout align-end justify-end row fill-height>
          <v-btn flat color="primary" :loading="loading" @click="details">
            <v-icon left dark>remove_red_eye</v-icon>
            More Info
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
const STORE_KEY = "$_VIEWS_HOME";

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
  },
  data () {
    return {
      loading: false
    };
  },
  methods: {
    async details () {
      this.loading = true;

      try {
        await this.$store.dispatch(`${STORE_KEY}/details`, this.id);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  .movie-title
    height: 65px

  .movie-genres
    height: 90px
</style>
