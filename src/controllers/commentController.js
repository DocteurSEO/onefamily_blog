import db from "../db";

const TABLE = "comments";
export default class CommentController {
  /**
   * Get comments from database.
   */
  static get(req, res) {
    db.query(`SELECT * FROM ${TABLE}`)
      .then((result) => res.send(result.rows))
      .catch(({ message }) => res.status(500).send({ message }));
  }

  /**
   * Creates a post in DB.
   */
  static create(req, res) {
    const { post_id, author_id, content } = req.body || {};

    if (!content) {
      res.status(400).send({ message: "comment content are required." });
      return;
    }

    db.query(
      `INSERT INTO ${TABLE} (post_id, author_id , content) VALUES ($1, $2, $3)`,
      // eslint-disable-next-line camelcase
      [post_id, author_id, content]
    )
      .then(() => res.status(201).send({ post_id, author_id, content }))
      .catch(({ message }) => res.status(500).send({ message }));
  }

  static remove(req, res) {
    db.query(`DELETE FROM ${TABLE} WHERE id = $1`, [req.postId])
      .then(() => res.status(203).send())
      .catch(({ message }) => res.status(500).send({ message }));
  }

  static update(req, res) {
    const { title, content } = req.body || {};

    if (!title || !content) {
      res.status(400).send({ message: "Post title and content are required." });
      return;
    }

    db.query(
      `UPDATE ${TABLE} SET title = $1, content = $2, updated_at = NOW() WHERE id = $3`,
      [title, content, req.postId]
    )
      .then(() => res.status(201).send())
      .catch(({ message }) => res.status(500).send({ message }));
  }

  static getPost(req, res) {
    db.query(`SELECT * FROM ${TABLE} WHERE id = $1`, [req.postId])
      .then((result) => res.send(result.rows[0]))
      .catch(({ message }) => res.status(500).send({ message }));
  }
}
