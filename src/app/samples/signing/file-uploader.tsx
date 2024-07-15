import { CloudUpload } from "@mui/icons-material";
import { Button } from "@mui/material";
import VisuallyHiddenInput from "@/app/samples/signing/visually-hidden-input";

export default function FileUploader() {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUpload />}
    >
      Upload file
      <VisuallyHiddenInput onChange={(ev) => {}} type="file" />
    </Button>
  );
}
