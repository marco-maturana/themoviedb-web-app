import axios from "axios";
import { expect } from "chai";

describe("movie-controller", function () {
  before(function () {
    this.axios = axios.create({
      baseURL: `${process.env.APP_HOST}:${process.env.APP_PORT}/api/movie`
    });
  });

  it("details", async function () {
    let response: any;

    try {
      // Avengers: Endgame - id = 299534
      response = await this.axios.get("/details/299534");
    } catch (error) {
      response = error.response;
    }

    expect(response.status).to.be.equal(200);
    expect(response.data.id).to.be.a("number");
    expect(response.data.posterPath).to.be.a("string");
    expect(response.data.releaseDate).to.be.a("string");
    expect(response.data.title).to.be.a("string");
    expect(response.data.overview).to.be.a("string");
    expect(response.data.genres).to.be.an("array");

    response.data.genres.forEach((genre: any) => {
      expect(genre).to.be.a("string");
    });
  });

  it("search", async function () {
    let response: any;

    try {
      response = await this.axios.get("/search", {
        params: {
          query: "endgame"
        }
      });
    } catch (error) {
      response = error.response;
    }

    expect(response.status).to.be.equal(200);
    expect(response.data.totalPages).to.be.a("number");
    expect(response.data.movies[0].id).to.be.a("number");
    expect(response.data.movies[0].posterPath).to.be.a("string");
    expect(response.data.movies[0].releaseDate).to.be.a("string");
    expect(response.data.movies[0].title).to.be.a("string");
    expect(response.data.movies[0].genres).to.be.an("array");

    response.data.movies[0].genres.forEach((genre: any) => {
      expect(genre).to.be.a("string");
    });
  });

  it("upcoming", async function () {
    let response: any;

    try {
      response = await this.axios.get("/upcoming");
    } catch (error) {
      response = error.response;
    }

    expect(response.status).to.be.equal(200);
    expect(response.data.totalPages).to.be.a("number");
    expect(response.data.movies[0].id).to.be.a("number");
    expect(response.data.movies[0].posterPath).to.be.a("string");
    expect(response.data.movies[0].releaseDate).to.be.a("string");
    expect(response.data.movies[0].title).to.be.a("string");
    expect(response.data.movies[0].genres).to.be.an("array");

    response.data.movies[0].genres.forEach((genre: any) => {
      expect(genre).to.be.a("string");
    });
  });
});
