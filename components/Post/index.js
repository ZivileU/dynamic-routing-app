import { useEffect } from "react";

import {
  CircularProgress,
  Container,
  Link,
  Typography,
} from "@material-ui/core";

import useGetPost from "../../queries/useGetPost";

import styles from "./Post.module.css";

const Post = ({ id }) => {
  const { data, error, isFetching } = useGetPost(id);
  const { title, updated_at, absolute_url, content } = data || {};

  const parseHtml = () => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(content, "text/html");
    const { innerText } = parsedHtml.firstChild;

    return innerText;
  };

  useEffect(() => {
    const insert = document.querySelector("#insert");
    insert?.insertAdjacentHTML("beforeend", parseHtml());
  }, [data]);

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

  return (
    <Container maxWidth="lg">
      <Typography className={styles.title} variant="h2">
        {title}
      </Typography>
      <Typography className={styles.updatedAt} variant="subtitle2">
        Updated at: {updated_at}
      </Typography>
      <Link
        className={styles.link}
        href={absolute_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        See full addvertisement
      </Link>
      <section id="insert"></section>
    </Container>
  );
};

export default Post;
