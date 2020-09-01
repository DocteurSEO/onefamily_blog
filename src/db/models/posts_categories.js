export default {
  CREATE_TABLE: `CREATE TABLE IF NOT EXISTS posts_categories (
    id serial PRIMARY KEY,
    post_id BIGINT , 
    category_id SERIAL ,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE
)`,
};
