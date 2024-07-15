import { ChangeEvent, useEffect, useState } from "react";

const ALGORITHM = "RSASSA-PKCS1-v1_5";

export function useSigning() {
  const [publicKey, setPublicKey] = useState<CryptoKey>();
  const [privateKey, setPrivateKey] = useState<CryptoKey>();

  async function onUploadFile(ev: ChangeEvent<HTMLInputElement>) {
    const file = ev.target.files?.item(0);
    if (!file || !privateKey) {
      return;
    }

    const fileBuf = await file.arrayBuffer();
    return await window.crypto.subtle.sign(ALGORITHM, privateKey, fileBuf);
  }

  async function validate(signature: BufferSource, data: BufferSource) {
    if (!publicKey) {
      return;
    }

    return window.crypto.subtle.verify(ALGORITHM, publicKey, signature, data);
  }

  async function exportKey(key: CryptoKey) {
    return await window.crypto.subtle.exportKey("jwk", key);
  }

  async function importKey(key: BufferSource) {
    return await window.crypto.subtle.importKey("raw", key, ALGORITHM, true, [
      "sign",
      "verify",
    ]);
  }

  function download(data: ArrayBuffer) {
    // 1. ダウンロードする署名データをBlobに変換
    const blob = new Blob([data], { type: "application/octet-stream" });

    // 2. BlobからURLを作成
    return URL.createObjectURL(blob);
  }

  useEffect(() => {
    (async () => {
      const { publicKey, privateKey } = await window.crypto.subtle.generateKey(
        {
          name: ALGORITHM,
          modulusLength: 2048,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: { name: "SHA-256" },
        },
        true,
        ["sign", "verify"],
      );
      setPublicKey(publicKey);
      setPrivateKey(privateKey);
    })();
  }, []);

  return {
    publicKey,
    privateKey,
  };
}
