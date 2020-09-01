export default {
  CREATE_TABLE: `CREATE TABLE IF NOT EXISTS posts_categories (
    id serial PRIMARY KEY,
    post_id int , 
    category_id VARCHAR (250) ,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(name) ON UPDATE CASCADE
)`,
};
