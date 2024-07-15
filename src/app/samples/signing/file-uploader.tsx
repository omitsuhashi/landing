import { CloudUpload } from "@mui/icons-material";
import { Button } from "@mui/material";
import VisuallyHiddenInput from "@/app/samples/signing/visually-hidden-input";
import { ChangeEvent, PropsWithoutRef } from "react";

type Props = {
  onUpload: (ev: ChangeEvent<HTMLInputElement>) => Promise<void>;
  targetName?: string;
};

export default function FileUploader({
  onUpload,
  targetName,
}: PropsWithoutRef<Props>) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUpload />}
    >
      Upload {targetName} file
      <VisuallyHiddenInput onChange={onUpload} type="file" />
    </Button>
  );
}
