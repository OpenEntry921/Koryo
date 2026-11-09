export const businesses = [
  {
    number: "01",
    name: "주차관제",
    en: "PARKING CONTROL",
    description: "차량의 진입부터 출차까지, 운영 흐름을 연결합니다.",
    slug: "parking",
  },
  {
    number: "02",
    name: "CCTV · 영상관제",
    en: "VIDEO SURVEILLANCE",
    description: "현장 상황을 한눈에 파악하는 영상 중심의 관리.",
    slug: "cctv",
  },
  {
    number: "03",
    name: "LED · 주차안내",
    en: "LED & GUIDANCE",
    description: "명확한 정보 전달로 더 편리한 이동을 돕습니다.",
    slug: "led",
  },
  {
    number: "04",
    name: "소프트웨어",
    en: "SOFTWARE",
    description: "시설과 운영자를 연결하는 통합 관리 환경.",
    slug: "software",
  },
];
export const solutions = [
  {
    slug: "parking",
    name: "주차관제 시스템",
    en: "PARKING CONTROL",
    description:
      "진입 감지, 차량 확인, 차단기 제어와 출차 관리를 연결하는 구조입니다.",
    steps: [
      "차량 진입 감지",
      "차량 정보 확인",
      "출입 권한 판단",
      "차단기 제어",
    ],
    features: ["입·출차 흐름 구성", "운영 정책별 제어", "관리 화면 연계"],
  },
  {
    slug: "lpr",
    name: "차량번호 인식(LPR) 시스템",
    en: "LICENSE PLATE RECOGNITION",
    description:
      "차량번호 인식 정보를 출입 권한 및 운영 이력과 연결하는 구조입니다.",
    steps: ["차량 촬영", "번호 인식", "등록 정보 조회", "출입 이력 관리"],
    features: ["인식 정보 조회", "등록 차량 연계", "현장 환경별 구성 검토"],
  },
  {
    slug: "visitor",
    name: "방문차량 사전예약 및 모바일 연동",
    en: "VISITOR & MOBILE",
    description: "방문 등록부터 현장 확인까지의 절차를 단계별로 구성합니다.",
    steps: [
      "방문 정보 등록",
      "예약 내역 확인",
      "현장 차량 확인",
      "방문 이력 조회",
    ],
    features: ["방문 예약 흐름", "모바일 이용 절차", "운영자 승인 단계"],
  },
  {
    slug: "software",
    name: "주차장 통합관리 소프트웨어",
    en: "INTEGRATED MANAGEMENT",
    description:
      "차량, 장비, 운영 이력을 하나의 관리 흐름으로 구성하는 예시입니다.",
    steps: ["장비 정보 수집", "운영 현황 조회", "관리 정책 설정", "이력 확인"],
    features: ["운영 대시보드 구조", "권한별 관리 항목", "장비 상태 조회"],
  },
  {
    slug: "cctv",
    name: "CCTV 및 영상관제",
    en: "VIDEO SURVEILLANCE",
    description: "카메라와 관제 화면을 연결하여 현장을 확인하는 구성입니다.",
    steps: ["현장 촬영", "영상 전송", "관제 화면 확인", "이력 조회"],
    features: ["구역별 영상 구성", "관제 화면 연계", "설치 환경 검토"],
  },
  {
    slug: "led",
    name: "LED 및 주차안내",
    en: "LED & PARKING GUIDANCE",
    description: "운영 정보와 안내 표시 장치를 연결하는 구조입니다.",
    steps: ["운영 정보 수집", "안내 정보 구성", "LED 표시", "현장 정보 확인"],
    features: ["진입 안내", "구역별 정보 표시", "표시 장치 연계"],
  },
];
export const solutionNotice =
  "솔루션 구조 예시입니다. 실제 공급 범위·보유 기능·연동 가능 여부는 확인 후 확정됩니다.";
