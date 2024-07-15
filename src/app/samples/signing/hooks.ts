import { ChangeEvent, useEffect, useState } from "react";

async function exportKey(key: CryptoKey) {
  const exported = await window.crypto.subtle.exportKey("jwk", key);
  return JSON.stringify(exported, null, 2);
}

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
    const result = await window.crypto.subtle.sign(
      ALGORITHM,
      privateKey,
      fileBuf,
    );
  }

  useEffect(() => {
    async function createKeys() {
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
    }
    createKeys().then();
  }, []);

  return {
    publicKey,
    privateKey,
  };
}
