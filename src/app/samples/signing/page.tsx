import { Box, CircularProgress, Container } from "@mui/material";
import FileUploader from "@/app/samples/signing/file-uploader";
import { Suspense } from "react";
import SignButton from "@/app/samples/signing/sign-button";
import ValidateButton from "@/app/samples/signing/validate-button";
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
