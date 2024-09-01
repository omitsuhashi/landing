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
          <Typography>そのために、全力で仕事をする</Typography>
          <Typography>そのために、後悔しない選択を行う</Typography>
          <Typography>そのために、人に喜ばれる仕事をする</Typography>
        </Stack>
      </Stack>
      <Box py={4}>
        <Divider />
      </Box>
    </>
  );
}
