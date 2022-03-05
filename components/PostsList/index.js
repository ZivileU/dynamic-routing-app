import Grid from "@material-ui/core/Grid";

import ListItem from "./ListItem";

const PostsList = () => {
  return (
    <Grid container direction="row" spacing={2} wrap="wrap" grid-xs-3>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Grid item xs={4}>
          <ListItem key={i} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsList;
