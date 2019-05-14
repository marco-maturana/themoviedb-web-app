import axios from "axios";
import { expect } from "chai";

describe("movie-controller", function () {
  before(function () {
    this.axios = axios.create({
      baseURL: `${process.env.APP_HOST}:${process.env.APP_PORT}/api/movie`
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
  });
});
