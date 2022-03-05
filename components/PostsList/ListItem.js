import Link from "next/link";

import { Card, CardContent, Typography } from "@material-ui/core";

import styles from "./PostsList.module.css";

const ListItem = ({ id = "abc" }) => {
  return (
    <Link href="/post/[id]" as={`/post/${id}`}>
      <Card className={styles.card} raised>
        <CardContent>
          <Typography variant="subtitle2">Subtitle</Typography>
          <Typography variant="body1">Title</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListItem;
