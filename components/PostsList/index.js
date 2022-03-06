import { CircularProgress, Grid } from "@material-ui/core";

import { useGetPosts } from "../../queries/useGetPosts";

import ListItem from "./ListItem";

const PostsList = () => {
  const { data, error, isFetching } = useGetPosts();

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
    <Grid container direction="row" spacing={2} wrap="wrap" grid-xs-3>
      {data?.jobs.map(({ id, title, location }) => (
        <Grid item xs={4}>
          <ListItem key={id} id={id} title={title} subtitle={location.name} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsList;
