import axios from "axios";

export const details = async ({ state }, id) => {
};

export const search = async ({ state }) => {
};

export const upcoming = async ({ state }) => {
  const response = await axios.get("/movie/upcoming", {
    params: { page: state.page }
  });

  state.movies = response.data.movies;
  state.pages = response.data.totalPages;
};
