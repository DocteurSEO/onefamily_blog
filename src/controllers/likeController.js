import db from "../db";

const TABLE = "likes";
export default class LikeController {
  /**
   * Get Likes from database.
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
    const { post_id, author_id } = req.body || {};

    if (!author_id) {
      res.status(400).send({ message: "author_id are required." });
      return;
    }

    db.query(
      `INSERT INTO ${TABLE} (post_id, author_id ) VALUES ($1, $2)`,
      // eslint-disable-next-line camelcase
      [post_id, author_id]
    )
      .then(() => res.status(201).send({ post_id, author_id }))
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

  static getLikes(req, res) {
    db.query(`SELECT COUNT(*) AS counts FROM ${TABLE} WHERE post_id = $1`, [
      req.params.id,
    ])
      .then((result) => res.send(result.rows))
      .catch(({ message }) => res.status(500).send({ message }));
  }
}
