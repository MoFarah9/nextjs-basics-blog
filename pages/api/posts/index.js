import { getAllPostIds } from "../../../lib/posts";

export default async function allPostsIds(req, res) {
  const allPostsIds = await getAllPostIds();
  const postsIds = allPostsIds.map((post) => post.params.id);
  res.status(200).json({ postsIds });
}
