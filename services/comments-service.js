import db from "../models/index.js";

class CommentService {
  async createComment(data) {
    const resp = await db.Comment.create(data);
    return resp;
  }

  async getComments(id) {
    const comments = await db.Comment.findAndCountAll({
      where: { movieId: id },
      order: [[db.sequelize.col("createdAt"), "DESC"]],
    });
    return comments;
  }
}

export default new CommentService();
