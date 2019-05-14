import axios from "axios";

export const details = async ({ state }, id) => {
};

export const search = async ({ state }) => {
  if (state.query) {
    state.loading = true;

    try {
      const response = await axios.get("/movie/search", {
        params: { page: state.page, query: state.query }
      });

      state.movies = response.data.movies;
      state.pages = response.data.totalPages;
    } finally {
      state.loading = false;
    }
  } else upcoming({ state });
};

export const upcoming = async ({ state }) => {
  state.loading = true;

  try {
    const response = await axios.get("/movie/upcoming", {
      params: { page: state.page }
    });

    state.movies = response.data.movies;
    state.pages = response.data.totalPages;
  } finally {
    state.loading = false;
  }
};
