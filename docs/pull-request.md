# feat: 고려다이나믹스 기업 홈페이지 초기 구축

고려다이나믹스의 기업·사업·제품·설치사례·문의 안내를 정적 반응형 홈페이지로 구성했습니다. 제품명·사진·사양·설치사례는 데이터 파일과 이미지 교체 후 재빌드하면 화면 코드 수정 없이 반영됩니다.

## 구현 화면

- HOME / COMPANY / SOLUTIONS / PRODUCTS / REFERENCES / CONTACT
- 솔루션 6개 상세, 제품 6개 상세, 사례 등록 예정 상세 템플릿
- 고정 헤더와 모바일 메뉴, 제품 카테고리 필터, FAQ, 단계형 시스템 구성도
- 자체 제작 SVG 주차관제 개념도, 이미지 누락 fallback, 자체 호스팅 한글 폰트
- metadata, Open Graph PNG, sitemap, robots, 404
- [데스크톱 캡처](https://github.com/OpenEntry921/Koryo/blob/codex/koryo-corporate-website/docs/previews/home-desktop.png) / [모바일 캡처](https://github.com/OpenEntry921/Koryo/blob/codex/koryo-corporate-website/docs/previews/home-mobile.png)

## 파일 구조

`src/data/{company,navigation,solutions,products,projects}.ts`에서 콘텐츠를 관리합니다. `src/components`는 공통 UI, `src/app`은 목록·상세 화면, `public/images/{products,solutions,projects,company}`는 이미지 경로입니다. README에 제품 데이터 예시와 이미지 교체 방법을 기록했습니다.

## 테스트 결과

- npm install / npm run lint / npm run build 성공
- 19개 화면 × 4개 화면 폭(1440/768/390/320px): 응답, 가로 넘침, H1, 빈 링크, alt 검사 통과
- Chromium 제품 필터 6개 및 전체, 모바일 메뉴와 상세 경로 이동, FAQ 동작 확인
- 내부 경로 19개 응답 200, 미확인 연락처 링크·허위 문의폼 없음
- axe WCAG 2 A/AA 및 2.1 AA: 19개 화면 자동 검사 위반 0
- 운영 의존성 audit 취약점 0. compression 수정 버전 override
- [상세 검증 기록](https://github.com/OpenEntry921/Koryo/blob/codex/koryo-corporate-website/docs/verification.md), [브라우저 원시 결과](https://github.com/OpenEntry921/Koryo/blob/codex/koryo-corporate-website/docs/browser-results.json)

Safari·실물 기기·실제 Cloudtype 배포·실제 문의 수신은 검증하지 않았습니다.

## 임시 이미지와 제품 데이터

전체 제품은 분류만 존재하는 `pending` 데이터입니다. 차량차단기·차량번호인식기·출입통제/발권·주차관리 소프트웨어·CCTV/LED·주변기기의 제품명과 사양은 확인 예정입니다. `upcoming` 사례는 실제 실적이 아닌 등록 템플릿입니다. 메인 개념도·이미지 placeholder·텍스트 워드마크는 자체 제작 임시 자산입니다.

첨부 28p PDF를 실제 이미지로 확인했으며 정보구조만 참고했습니다. 타사 로고·상표·인증·실적·고객·제품사진·모델·사양·연락처는 당사 자산으로 사용하지 않았습니다.

## 확인이 필요한 회사정보

대표자·설립일·주소·업종·사업분야 최신 공식 확인, 영문명 확정, 대표 전화·이메일, 로고 원본, 실제 공급 제품 및 사양, 기술·인증 증빙, 고객사 공개 승인. 미확인 1992년 이력·매출·사원수·특허·수주실적은 비공개입니다.

## 배포 참고사항

Node 22 권장. `npm ci` → `npm run build` → `npm start`, 기본 포트 3000. Next 정적 export 결과 `out/`를 정적 서버로 제공합니다. `NEXT_PUBLIC_SITE_URL`을 실제 도메인으로 지정하고 재빌드하세요. 현재 robots는 초안용 전체 차단이며 공식 정보 검토 후 해제합니다. Cloudtype 수동 설정은 README 참고. 자동 배포 및 자동 병합 설정 없음.

## 병합 후 후속 작업

1. 회사정보와 실제 제품 자료 확인 및 데이터 교체
2. 승인된 현장 사진·설치사례 등록
3. 연락처 확정 및 수신 방식 결정
4. 실제 도메인·Cloudtype 설정 및 운영 환경 검증
5. 검토 후 robots 공개 설정

## 빈 저장소에 대한 제약

착수 시 원격 저장소의 ref와 커밋이 없었습니다. main의 기준 커밋이 없어 지정 작업 브랜치에서 최초 커밋을 작성했습니다. main을 임의 생성·수정하지 않았으며, 유효한 base가 없으면 GitHub가 PR 생성을 거부합니다. 이 문서는 PR 생성이 가능한 상태가 된 뒤 본문으로 사용할 수 있도록 보존합니다. 자동 병합하지 않습니다.
