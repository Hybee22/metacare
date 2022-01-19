import moviesService from "../../services/movies-service.js";
import commentsService from "../../services/comments-service.js";

import { successResMsg, errorResMsg } from "../../utilities/response.js";
import { Logger as logger } from "../../logger.js";

class MovieController {
  async list(req, res) {
    try {
      const data = await moviesService.getMovies();
      const resp = data.map(async (movie) => {
        const comments = await commentsService.getComments(movie.episode_id);
        return {
          title: movie.title,
          episode_id: movie.episode_id,
          opening_crawl: movie.opening_crawl,
          release_date: movie.release_date,
          comments: comments.count,
        };
      });

      Promise.all(resp).then((response) => {
        return successResMsg(res, 200, {
          message: "All movies fetched successfully",
          data: response,
        });
      });
    } catch (error) {
      logger.error(error);
      errorResMsg(res, 500, "Something went wrong while fetching movie list");
    }
  }
  async listOne(req, res) {
    try {
      const { id } = req.params;
      const data = await moviesService.getMovie(id);
      if (!data) {
        return errorResMsg(res, 404, "Movie not found");
      }

      const comments = await commentsService.getComments(data.episode_id);
      const response = {
        title: data.title,
        episode_id: data.episode_id,
        opening_crawl: data.opening_crawl,
        release_date: data.release_date,
        comments: comments.count,
      };

      return successResMsg(res, 200, {
        message: "Movie details fetched successfully",
        data: response,
      });
    } catch (error) {
      if (error.response.status === 404) {
        errorResMsg(res, error.response.status, "Movie not found");
      }
      logger.error(error);
      errorResMsg(res, 500, "Something went wrong while fetching movie");
    }
  }
}

export default new MovieController();
