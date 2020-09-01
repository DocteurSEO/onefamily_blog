import db from "../db";

const TABLE = "categories";
export default class CategorieController {
  /**
   * Creates an categorie in DB.
   */
  static create(req, res) {
    const { name } = req.body || {};
    if (!name) {
      res.status(400).send({ message: "name is required." });
      return;
    }

    db.query(`INSERT INTO ${TABLE} (name) VALUES ($1)`, [name])
      .then(() => res.status(201).send({ name }))
      .catch(({ message }) => res.status(500).send({ message }));
  }

  static getCategories(req, res) {
    db.query(`SELECT * FROM ${TABLE}`)
      .then((result) => res.send(result.rows))
      .catch(({ message }) => res.status(500).send({ message }));
  }
}

`with post_i as (
  insert into posts(slug,title,content) 
  values('fai55','shaggk', 'ererer') 
  RETURNING id
), 
post_cat as (
 insert into posts_categories( id ,category_id) 
 values
 ( (select id from post_i), 'seo'))
 
 
 `;
