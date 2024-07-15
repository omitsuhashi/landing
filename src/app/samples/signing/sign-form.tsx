"use client";

import { useSigning } from "@/app/samples/signing/hooks";
import { Box, Button } from "@mui/material";
import FileUploader from "@/app/samples/signing/file-uploader";

export default function SignForm() {
  const { onUploadSignTargetFile, onVerify, onSigning } = useSigning();
  return (
    <>
      <Box>
        {/* 1. ファイルのアップロード */}
        <FileUploader onUpload={onUploadSignTargetFile} targetName="file" />
        {/* 2. 署名実行 */}
        <Button onClick={onSigning}>signing</Button>
        {/* 3. バリデーション実行 */}
        <Button onClick={onVerify}>verify</Button>
      </Box>
    </>
  );
}
