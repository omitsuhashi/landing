"use client";

import { useSigning } from "@/app/samples/signing/hooks";
import { Box } from "@mui/material";
import KeyGenerator from "@/app/samples/signing/key-generator";
import FileUploader from "@/app/samples/signing/file-uploader";
import SignButton from "@/app/samples/signing/sign-button";
import ValidateButton from "@/app/samples/signing/validate-button";

export default function SignForm() {
  const { privateKey, publicKey } = useSigning();
  return (
    <>
      <Box>
        {/* キーペアを生成してここに */}
        <KeyGenerator publicKey={publicKey} privateKey={privateKey} />
        {/* ファイルのアップロード */}
        <FileUploader />
        {/* 署名実行 */}
        <SignButton />
        {/* バリデーション実行 */}
        <ValidateButton />
      </Box>
    </>
  );
}
