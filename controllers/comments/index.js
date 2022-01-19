import { v4 } from "uuid";
import commentsService from "../../services/comments-service.js";

import { successResMsg, errorResMsg } from "../../utilities/response.js";
import { Logger as logger } from "../../logger.js";
import { CommentDTO, CommentsDTO } from "../../dtos/comments-dto.js";
import getIp from "../../utilities/getIp.js";
import moviesService from "../../services/movies-service.js";

class CommentController {
  async create(req, res) {
    try {
      const { movieId, body } = req.body;

      if (body.length > 500) {
        return errorResMsg(
          res,
          400,
          "Comments have exceeded a limit of 500 characters"
        );
      }

      const ipAddress = getIp(req);

      const commentId = v4();
      const dataToSave = { movieId, body, commentId, ipAddress };

      const data = await commentsService.createComment(dataToSave);
      return successResMsg(res, 201, {
        message: "Comment added successfully",
        data: new CommentDTO(data),
      });
    } catch (error) {
      logger.error(error);
      errorResMsg(
        res,
        500,
        "Something went wrong while adding comments to movie list"
      );
    }
  }

  async list(req, res) {
    try {
      const id = req.query.id;
      const _data = await commentsService.getComments(Number(id));
      const data = CommentsDTO(_data.rows);
      return successResMsg(res, 200, {
        message: "Comments fetched successfully",
        data: data,
      });
    } catch (error) {
      logger.error(error);
      errorResMsg(res, 500, "Something went wrong while fetching comments");
    }
  }

  async getByTitle(req, res) {
    try {
      let tempData;
      const { title } = req.query;
      const movies = await moviesService.getMovies();
      tempData = movies;

      tempData = tempData.filter(
        (movie) => movie.title.toLowerCase() === title.toLowerCase()
      );

      if (tempData.length === 0) {
        return errorResMsg(res, 404, "Movie not found");
      }

      const _data = await commentsService.getComments(tempData[0].episode_id);
      const data = CommentsDTO(_data.rows);
      return successResMsg(res, 200, {
        message: "Comments for title fetched successfully",
        data: data,
      });
    } catch (error) {
      logger.error(error);
      errorResMsg(res, 500, "Something went wrong while fetching comments");
    }
  }
}

export default new CommentController();
