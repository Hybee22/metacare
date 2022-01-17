import { moviesRouter } from "./movies/index.js";
import { commentsRouter } from "./comments/index.js";

export default (app) => {
  app.use("/v1/movies", moviesRouter);
  app.use("/v1/comments", commentsRouter);
};
