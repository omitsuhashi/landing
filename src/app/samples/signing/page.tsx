import { Box, CircularProgress, Container } from "@mui/material";
import { Suspense } from "react";
import SignForm from "@/app/samples/signing/sign-form";

export default function SigningPage() {
  return (
    <>
      <Box rowGap={2}>
        <Suspense fallback={<CircularProgress />}>
          <SignForm />
        </Suspense>
      </Box>
    </>
  );
}
