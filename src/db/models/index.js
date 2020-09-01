import authors from "./author";
import posts from "./post";
import likes from "./like";
import comments from "./comment";
import categories from "./categories";
import posts_categories from "./posts_categories";

export default async (client) => {
  try {
    await client.query(authors.CREATE_TABLE);
    await client.query(posts.CREATE_TABLE);
    await client.query(comments.CREATE_TABLE);
    await client.query(likes.CREATE_TABLE);

    await client.query(categories.CREATE_TABLE);
    await client.query(posts_categories.CREATE_TABLE);
    console.log(`
    ----------------------
    | Initialized models |
    ----------------------`);
  } catch (error) {
    console.log(error);
  }
};
