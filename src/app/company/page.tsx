import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Company() {
  return (
    <>
      <Typography variant="h4" pb={4}>
        会社情報
      </Typography>
      <Box py={4}>
        <Divider />
      </Box>
      <List>
        <ListItem>
          <Link href={"/company/profile"}>会社概要</Link>
        </ListItem>
        <ListItem>
          <Link href={"/company/philosophy"}>企業理念</Link>
        </ListItem>
      </List>
    </>
  );
}
