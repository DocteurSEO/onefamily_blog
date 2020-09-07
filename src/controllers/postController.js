import db from "../db";

const TABLE = "posts";
export default class PostController {
  // static findById(req, res, next) {
  //   const { id } = req.params || {};

  //   if (!id) {
  //     res.status(400).send({ message: "Please provide post ID." });
  //     return;
  //   }

  //   db.query(`SELECT COUNT(*) FROM ${TABLE} WHERE id = $1`, [id])
  //     .then(({ rows }) => {
  //       if (rows[0].count <= 0) {return res}
  //           .status(404)
  //           .send({ message: `Post with ID "${id}" not found.` });}

  //       // put the post id on request object
  //       req.postId = id;
  //       return next();
  //     })
  //     .catch(({ message }) => res.status(500).send({ message }));
  // }

  /**
   * Get posts from database.
   */
  static get(req, res) {
    db.query(`SELECT id,title FROM ${TABLE}`)
      .then((result) => res.send(result.rows))
      .catch(({ message }) => res.status(500).send({ message }));
  }

  /**
   * Creates a post in DB.
   */
  static create(req, res) {
    const id = Math.floor(Math.random() * Math.floor(1000000000));
    const { title, slug, content } = req.body || {};

    if (!title || !content) {
      res.status(400).send({ message: "Post title and content are required." });
      return;
    }

    db.query(
      `INSERT INTO ${TABLE} (id,slug, title, content) VALUES ($1, $2, $3, $4)`,
      // eslint-disable-next-line comma-dangle
      [id, slug, title, content]
    )
      .then(
        () =>
          // eslint-disable-next-line implicit-arrow-linebreak
          db.query(
            "INSERT INTO posts_categories (post_id,category_id) VALUES ($1, $2)",
            [id, 1]
          ),
        res.status(201).send({
          id,
          slug,
          title,
          content,
        })
      )
      .catch(({ message }) => res.status(500).send({ message }));
  }

  static remove(req, res) {
    console.log(req.params.id);
    db.query(`DELETE FROM ${TABLE} WHERE id = $1`, [req.params.id])
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
    db.query(`SELECT * FROM ${TABLE} WHERE id = $1`, [req.params.id])
      .then((result) => res.send(result.rows[0]))
      .catch(({ message }) => res.status(500).send({ message }));
  }
}
