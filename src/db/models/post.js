export default {
  CREATE_TABLE: `CREATE TABLE IF NOT EXISTS posts (
    id NUMERIC PRIMARY KEY,
    author_id VARCHAR (50) REFERENCES authors(id) ON DELETE CASCADE,
    title VARCHAR (150) NOT NULL,
    slug text,
    content text,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
)`,
};
