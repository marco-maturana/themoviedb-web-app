import { Get, Route } from "@marcomaturana/express-decorators";
import axios, { AxiosInstance } from "axios";
import { Request, Response } from "express";
import moment from "moment";
import validate from "validate.js";

@Route("/api/movie")
export class MoviesUpcomingController {
  private readonly axiosRequest: AxiosInstance;
  private readonly validateSearch: any;
  private readonly validateUpcoming: any;

  constructor () {
    this.axiosRequest = axios.create({
      baseURL: "https://api.themoviedb.org/3",
    });

    this.validateSearch = {
      page: {
        numericality: {
          onlyInteger: true,
          notValid: "^Inválid page"
        }
      },
      query: {
        presence: {allowEmpty: false, message: "^Query is required!"},
      }
    };

    this.validateUpcoming = {
      page: {
        numericality: {
          onlyInteger: true,
          notValid: "^Inválid page"
        }
      }
    };
  }

  private filterMoviesList (responseData: any): any {
    const movies = responseData.results.map((movie: any) => {
      return {
        id: movie.id,
        posterPath: movie.poster_path,
        releaseDate: moment(movie.release_date, "YYYY-MM-DD").format("dddd, MMMM Do YYYY"),
        title: movie.title
      };
    });

    return {
      movies,
      totalPages: responseData.total_pages,
    };
  }

  @Get("/search")
  async search (req: Request, res: Response) {
    const errors = validate(req.query, this.validateSearch);

    if (errors) return res.json(errors);

    try {
      const response = await this.axiosRequest.get("/search/movie", {
        params: {
          api_key: process.env.TMDB_API_KEY,
          query: req.query.query,
          page: req.query.page || 1
        }
      });

      return res.json(this.filterMoviesList(response.data));
    } catch (error) {
      console.error(error);
      return res.json({ errors: "Error while getting the movies!" });
    }
  }

  @Get("/upcoming")
  async upcoming (req: Request, res: Response) {
    const errors = validate(req.query, this.validateUpcoming);

    if (errors) return res.json(errors);

    try {
      const response = await this.axiosRequest.get("/movie/upcoming", {
        params: {
          api_key: process.env.TMDB_API_KEY,
          page: req.query.page || 1
        }
      });

      return res.json(this.filterMoviesList(response.data));
    } catch (error) {
      console.error(error);
      return res.json({ errors: "Error while getting the movies!" });
    }
  }
}

export default MoviesUpcomingController;
