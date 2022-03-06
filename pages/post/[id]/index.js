import { useRouter } from "next/router";

import Post from "../../../components/Post";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Post id={id} />;
};

export default PostPage;
