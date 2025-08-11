"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("loading...");
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      setMsg("BariTechデプロイテスト");
      return;
    }
    fetch(`${baseUrl}/api/health`)
      .then(r => r.json())
      .then(j => setMsg(JSON.stringify(j)))
      .catch(e => setMsg("API取得エラー: " + String(e)));
  }, []);
  return <main>TEST: {msg}</main>;
}