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

export default CommentDTO;
