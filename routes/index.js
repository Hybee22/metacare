import { moviesRouter } from "./movies/index.js";

export default (app) => {
  app.use("/v1/movies", moviesRouter);
};
