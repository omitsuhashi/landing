import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import Link from "next/link";

type Props = {};

export default function HeaderBase({ children }: PropsWithChildren<Props>) {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/" type="button" style={{ textDecoration: "none" }}>
            <Typography color="black" variant="h5" alignContent="center">
              the3
            </Typography>
          </Link>
        </Box>
        <Stack direction="row" spacing={1}>
          <Button variant="text">
            <Link href="/company">企業情報</Link>
          </Button>
          <Button variant="text">
            <Link href="mailto:omitsuhashi.the3@gmail.com">お問い合わせ</Link>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
