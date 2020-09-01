export default {
  CREATE_TABLE: `CREATE TABLE IF NOT EXISTS likes (
    post_id BIGINT REFERENCES posts(id) ON UPDATE CASCADE, 
    author_id VARCHAR (50) REFERENCES authors(id) ON UPDATE CASCADE,
    PRIMARY KEY (post_id, author_id)
    )`,
};
