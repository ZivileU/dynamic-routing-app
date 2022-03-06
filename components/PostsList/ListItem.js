import Link from "next/link";
import { useRouter } from "next/router";

import { Card, CardContent, Typography } from "@material-ui/core";

import styles from "./PostsList.module.css";

const ListItem = ({ id, title, subtitle }) => {
  return (
    <Link href="/post/[id]" as={`/post/${id}`}>
      <Card className={styles.card} raised>
        <CardContent>
          <Typography variant="subtitle2">{subtitle}</Typography>
          <Typography variant="body1">{title}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListItem;
