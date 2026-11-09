"use client";
import Image from "next/image";
import { useState } from "react";
export function Media({
  src,
  alt,
  kind = "product",
}: {
  src?: string;
  alt: string;
  kind?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`media ${kind}`}>
      {src && !failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          onError={() => setFailed(true)}
          style={{ objectFit: "contain" }}
        />
      ) : (
        <div className="placeholder" role="img" aria-label={alt}>
          <svg viewBox="0 0 300 180" aria-hidden="true">
            <path d="M35 150h230M75 150V65h46v85M80 65V48h36v17M121 77h129v10H121" />
            <path d="M135 77l10 10m16-10 10 10m16-10 10 10m16-10 10 10" />
            <rect x="85" y="86" width="25" height="30" rx="3" />
            <circle cx="98" cy="131" r="4" />
            <path d="M191 150v-37h25v37m-20-37v-13h15v13M48 157h204" />
          </svg>
          <span>IMAGE COMING SOON</span>
          <small>이미지 등록 예정 · 개념 일러스트</small>
        </div>
      )}
    </div>
  );
}
