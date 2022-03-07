import {
  CircularProgress,
  Container,
  Link,
  Typography,
} from "@material-ui/core";

import { useGetPost } from "../../queries/useGetPost";

import styles from "./Post.module.css";

const Post = ({ id }) => {
  const { data, error, isFetching } = useGetPost({ id });

  if (!data && !error && isFetching) {
    return <CircularProgress />;
  }

  if (!data || error) {
    return (
      <Typography variant="h5">
        An error has occured. Try reloading the page
      </Typography>
    );
  }

  if (data) {
    const parser = new DOMParser();
    const htmlString = parser.parseFromString(data?.content, "text/html");
    const insert = document.querySelector("#insert");
    insert?.insertAdjacentHTML("beforeend", htmlString.firstChild.innerText);
  }

  return (
    <Container>
      <Typography variant="h4">{data.title}</Typography>
      <Typography variant="subtitle2">Updated at: {data.updated_at}</Typography>
      <Link href={data.absolute_url} target="_blank" rel="noopener noreferrer">
        Click to see the full addvertisement
      </Link>
      <section id="insert"></section>
    </Container>
  );
};

export default Post;
