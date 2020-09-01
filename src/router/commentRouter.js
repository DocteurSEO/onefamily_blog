import express from "express";
import CommentController from "../controllers/commentController";

const router = express.Router();

// router.param("id", CommentController.findById);

// api/v1/comments
router
  .route("/comments")
  .get(CommentController.get)
  .post(CommentController.create);

router.route("/comments/:id").get(CommentController.getComment);
//   .put(CommentController.update)
//   .delete(CommentController.remove);

export default router;
