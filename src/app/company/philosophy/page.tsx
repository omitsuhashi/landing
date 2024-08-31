import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

export default function Philosophy() {
  return (
    <>
      <Typography variant="h4" pb={4}>
        企業理念
      </Typography>

      <Box py={4}>
        <Divider />
      </Box>

      <Stack alignItems="center">
        <Typography variant="h2" pb={2}>
          格好良く生きる
        </Typography>
        <Stack alignItems="flex-start">
          <Typography>そのために、中途半端な仕事はしない</Typography>
          <Typography>そのために、常にベストを考える</Typography>
          <Typography>
            そのために、後悔するような選択を安易に取らない
          </Typography>
          <Typography>そのために、人に喜ばれる仕事をする</Typography>
        </Stack>
        <Box py={4}>
          <Divider />
        </Box>
      </Stack>
    </>
  );
}
