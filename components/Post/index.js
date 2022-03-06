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

  console.log(data, error, isFetching);

  return (
    <Container>
      <Link href={data.absolute_url} target="_blank" rel="noopener noreferrer">
        Click to see the full addvertisement
      </Link>
    </Container>
  );
};

export default Post;
