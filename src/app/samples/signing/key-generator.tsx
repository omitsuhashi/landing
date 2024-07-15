"use client";

import { TextField, Typography } from "@mui/material";
import { PropsWithoutRef } from "react";

type Props = {
  publicKey: string;
  privateKey: string;
};

export default function KeyGenerator({
  publicKey,
  privateKey,
}: PropsWithoutRef<Props>) {
  return (
    <>
      <Typography>public:</Typography>
      <TextField fullWidth value={publicKey} />
      <Typography>private:</Typography>
      <TextField fullWidth value={privateKey} />
    </>
  );
}
