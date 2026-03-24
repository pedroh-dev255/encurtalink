"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Ads() {
  useEffect(() => {
    try {
      (window as any).adsbygoogle =
        (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error("Erro ao carregar anúncio", e);
    }
  }, []);


  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3436512890891847"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3436512890891847"
        data-ad-slot="7362581978"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
}
