import axios from "axios";

interface Genre {
  id: number;
  name: string;
}

export class MovieGenresHelper {
  private static classInstance: MovieGenresHelper;
  private genres: Genre [];

  private constructor () { }

  private async init (): Promise<void> {
    const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list", {
      params: {
        api_key: process.env.TMDB_API_KEY
      }
    });

    this.genres = response.data.genres;
  }

  static get instance (): MovieGenresHelper {
    if (!MovieGenresHelper.classInstance) {
      MovieGenresHelper.classInstance = new MovieGenresHelper();
    }

    return MovieGenresHelper.classInstance;
  }

  static async getGenresNames (ids: number[]): Promise<string[]> {
    const instance = this.instance;

    if (!instance.genres) await instance.init();

    const genres = this.instance.genres.filter((value: Genre) => {
      return (ids.indexOf(value.id) !== -1);
    });

    const genresNames = genres.map((value: Genre) => {
      return value.name;
    });

    return genresNames;
  }
}

export default MovieGenresHelper;
