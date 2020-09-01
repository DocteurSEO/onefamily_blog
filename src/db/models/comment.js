export default {
  CREATE_TABLE: `CREATE TABLE IF NOT EXISTS comments (
    id serial PRIMARY KEY,
    post_id BIGINT , 
    author_id VARCHAR (50) ,
    content text,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON UPDATE CASCADE,
    FOREIGN KEY (author_id) REFERENCES authors(id) ON UPDATE CASCADE
)`,
};
