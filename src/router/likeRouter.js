import express from "express";
import LikeController from "../controllers/likeController";

const router = express.Router();

// router.param("id", CommentController.findById);

// api/v1/comments
router.route("/likes").get(LikeController.get).post(LikeController.create);

router.route("/likes/:id").get(LikeController.getLikes);
//   .put(CommentController.update)
//   .delete(CommentController.remove);

export default router;
