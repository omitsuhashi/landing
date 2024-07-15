import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";

const ALGORITHM = "RSASSA-PKCS1-v1_5";

export function useSigning() {
  const [publicKey, setPublicKey] = useState<CryptoKey>();
  const [privateKey, setPrivateKey] = useState<CryptoKey>();
  const [file, setFile] = useState<ArrayBuffer>();
  const [signature, setSignature] = useState<ArrayBuffer>();

  function getUploadedSingleFile(ev: ChangeEvent<HTMLInputElement>) {
    return ev.target.files?.item(0);
  }

  async function onUploadSignTargetFile(ev: ChangeEvent<HTMLInputElement>) {
    const file = getUploadedSingleFile(ev);
    if (!file) return;
    const fileBuf = await file.arrayBuffer();
    setFile(fileBuf);
  }

  async function onSigning() {
    if (!file || !privateKey) return;
    const signature = await window.crypto.subtle.sign(
      ALGORITHM,
      privateKey,
      file,
    );
    setSignature(signature);
  }

  async function onVerify() {
    if (!signature || !file) {
      alert("sig or file is empty");
      return;
    }
    const result = await verify(signature, file);
    alert(result);
  }

  async function verify(signature: BufferSource, data: BufferSource) {
    if (!publicKey) {
      return false;
    }

    return window.crypto.subtle.verify(ALGORITHM, publicKey, signature, data);
  }

  async function downloadKey(type: "public" | "private") {
    if (type === "public" && !!publicKey) {
      const keyData = await window.crypto.subtle.exportKey("raw", publicKey);
      download(keyData, `${type}.pem`);
    } else if (type === "private" && !!privateKey) {
      const keyData = await window.crypto.subtle.exportKey("raw", privateKey);
      download(keyData, `${type}.pem`);
    }
  }

  async function importKey(buf: BufferSource, type: "public" | "private") {
    const key = await window.crypto.subtle.importKey(
      "raw",
      buf,
      ALGORITHM,
      true,
      ["sign", "verify"],
    );
    if (type === "public") {
      setPublicKey(key);
    } else if (type === "private") {
      setPrivateKey(key);
    }
  }

  function download(data: ArrayBuffer, name: string) {
    // 1. ダウンロードする署名データをBlobに変換
    const blob = new Blob([data], { type: "application/octet-stream" });

    // 2. BlobからURLを作成
    const url = URL.createObjectURL(blob);

    // 3. ダウンロードリンクを作成
    const a = document.createElement("a");
    a.href = url;
    a.download = name;

    // 4. ダウンロードリンクをクリック
    a.click();

    // 5. クリック後にリンクを削除
    URL.revokeObjectURL(url); // メモリリークを防ぐためにURLを解放
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
    onUploadSignTargetFile,
    importKey,
    downloadKey,
    onVerify,
    onSigning,
  };
}
