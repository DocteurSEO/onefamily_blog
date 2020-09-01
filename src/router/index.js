import authorRouter from "./authorRouter";
import categorieRouter from "./categorieRouter";
import postRouter from "./postRouter";
import commentRouter from "./commentRouter";
import likeRouter from "./likeRouter";

export default (app) => {
  app.get("/api/v1/", (req, res) => {
    res.json({ message: "Awesome blog API yo!" });
  });

  app.use("/api/v1/", [
    authorRouter,
    postRouter,
    commentRouter,
    likeRouter,
    categorieRouter,
  ]);
};
