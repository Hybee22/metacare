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
}

export default new MovieController();
