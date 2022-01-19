class CommentDTO {
  id;
  movieId;
  commentId;
  body;
  anonymous;

  constructor(data) {
    this.id = data.id;
    this.movieId = data.movieId;
    this.commentId = data.commentId;
    this.body = data.body;
    this.anonymous = data.anonymous;
  }
}

const CommentsDTO = (data) => {
  if (Array.isArray(data)) {
    return data.map((comment) => {
      return {
        id: comment.id,
        movieId: comment.movieId,
        commentId: comment.commentId,
        body: comment.body,
        anonymous: comment.anonymous,
        createdAt: comment.createdAt,
      };
    });
  }
};

export { CommentDTO, CommentsDTO };
