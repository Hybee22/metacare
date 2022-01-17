import { v4 } from "uuid";
import commentsService from "../../services/comments-service.js";

import { successResMsg, errorResMsg } from "../../utilities/response.js";
import { Logger as logger } from "../../logger.js";
import CommentDTO from "../../dtos/comments-dto.js";

class CommentController {
  async create(req, res) {
    try {
      const { movieId, body } = req.body;
      const commentId = v4();
      const dataToSave = { movieId, body, commentId };

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
}

export default new CommentController();
