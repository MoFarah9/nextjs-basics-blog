import { getPostData } from "../../../lib/posts";

export default async (req, res) => {
  try {
    const postData = await getPostData(req.query.id);
    res.status(200).json({ postData });
  } catch (error) {
    res.status(200).json({ error: "not found" });
  }
};
