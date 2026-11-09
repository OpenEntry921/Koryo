export default function ParkingScene() {
  return (
    <div
      className="parking-scene"
      role="img"
      aria-label="차량번호 인식기와 차단기가 설치된 주차장 개념도. 실제 제품 및 설치현장 사진이 아닙니다."
    >
      <svg viewBox="0 0 780 580" aria-hidden="true">
        <defs>
          <linearGradient id="floor" x2="0" y2="1">
            <stop stopColor="#1a435f" />
            <stop offset="1" stopColor="#0e263c" />
          </linearGradient>
          <linearGradient id="metal">
            <stop stopColor="#e6edf0" />
            <stop offset=".5" stopColor="#94a9ba" />
            <stop offset="1" stopColor="#d7e2e8" />
          </linearGradient>
          <linearGradient id="car">
            <stop stopColor="#cbdce7" />
            <stop offset="1" stopColor="#506e85" />
          </linearGradient>
        </defs>
        <path d="M0 400L390 200l390 180v200H0z" fill="url(#floor)" />
        <g fill="none" stroke="#5b819e" opacity=".25">
          <path d="M60 0v360m140-360v290M0 120l780 200M0 220l780 200M400 0v200M600 0v300" />
          <path d="M0 465l430-220 350 170M0 530l430-220 350 170" />
        </g>
        <path
          d="M100 580l340-280m80 0L780 460"
          stroke="#afc8d8"
          strokeWidth="4"
          opacity=".5"
        />
        <path
          d="M335 580l177-192"
          stroke="#4c7897"
          strokeWidth="5"
          strokeDasharray="30 25"
        />
        <g transform="translate(370 290)">
          <ellipse
            cx="120"
            cy="183"
            rx="130"
            ry="30"
            fill="#071b2b"
            opacity=".6"
          />
          <path
            d="M14 95l33-73q9-15 30-15h85q18 0 30 20l34 69 22 26v54H0v-53z"
            fill="url(#car)"
          />
          <path d="M60 28h105l25 61H34z" fill="#14354e" />
          <path d="M124 28v61" stroke="#7291a5" strokeWidth="4" />
          <rect x="4" y="137" width="44" height="13" rx="4" fill="#eefaff" />
          <rect x="195" y="137" width="44" height="13" rx="4" fill="#eefaff" />
          <rect x="65" y="140" width="116" height="22" rx="3" fill="#122b40" />
          <rect x="93" y="163" width="65" height="17" rx="2" fill="#dfe9ee" />
          <rect x="6" y="167" width="29" height="30" rx="9" fill="#091b2a" />
          <rect x="210" y="167" width="29" height="30" rx="9" fill="#091b2a" />
        </g>
        <g transform="translate(165 235)">
          <path d="M0 65l45-20 43 20v215L40 303 0 281z" fill="url(#metal)" />
          <path d="M40 86l48-21v215l-48 23z" fill="#65839b" />
          <path d="M0 65l40 21 48-21-43-20z" fill="#f0f6f8" />
          <path d="M9 111l24 10v80L9 192z" fill="#102c45" />
          <path d="M13 126l15 6" stroke="#5ad7df" strokeWidth="4" />
          <circle cx="21" cy="220" r="5" fill="#36cdcb" />
          <path d="M64 100l410-88 4 18-414 91z" fill="#e7eff3" />
          <path
            d="M116 89l17-4 10 17-17 4m48-27 17-4 10 17-17 4m48-27 17-4 10 17-17 4m48-27 17-4 10 17-17 4m48-27 17-4 10 17-17 4"
            fill="#1867ad"
          />
        </g>
        <g transform="translate(105 260)">
          <path d="M0 25h25v185H0z" fill="#a5bdcc" />
          <path d="M-12 0h48v55h-48z" fill="#183c56" />
          <circle
            cx="12"
            cy="25"
            r="12"
            fill="#061e30"
            stroke="#6cb5d1"
            strokeWidth="3"
          />
          <circle cx="12" cy="25" r="4" fill="#50d6d9" />
        </g>
        <g fill="none" stroke="#54b5d8" opacity=".6">
          <path d="M135 285l290 80m-290-80 420 60" strokeDasharray="5 7" />
          <rect x="461" y="439" width="85" height="42" rx="5" />
          <path d="M505 438v-55h70" />
        </g>
        <g fontFamily="sans-serif" fontSize="12" fill="#bbdeed">
          <text x="584" y="385">
            LPR SYSTEM
          </text>
          <text x="310" y="196">
            ACCESS CONTROL
          </text>
          <text x="75" y="547">
            PARKING SYSTEM CONCEPT
          </text>
        </g>
      </svg>
      <span className="scene-caption">
        주차관제 구성 개념도 · 실제 제품 이미지 아님
      </span>
    </div>
  );
}
