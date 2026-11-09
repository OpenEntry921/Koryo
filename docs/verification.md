# 검증 기록

실행일: 2026-11-09 (한국 시간). Node 24.22.1, npm 11.9.0, Next.js 16.4.5.

| 검증                                    | 결과                                                                 |
| --------------------------------------- | -------------------------------------------------------------------- |
| npm install                             | 성공. 실행환경 캐시는 `/workspace/work/npm-cache`로 지정             |
| npm run lint                            | 성공, 오류·경고 0                                                    |
| npm run build                           | 성공. 정적 HTML 및 sitemap/robots 생성                               |
| npm audit --omit=dev --audit-level=high | 취약점 0. serve 하위 compression은 수정 버전 1.8.2 이상으로 override |
| Chromium 화면 검사                      | 19개 경로 × 1440/768/390/320px = 76개 검사 통과                      |
| 레이아웃·기본 구조                      | 모든 검사에서 가로 넘침 없음, H1 1개, 빈 링크·alt 누락 없음          |
| axe WCAG 2 A/AA 및 2.1 AA               | 데스크톱 19개 경로 자동 검사 위반 0                                  |
| 제품 필터                               | 전체 및 6개 분류, 개수 및 화면 갱신 정상                             |
| 모바일 메뉴                             | 메뉴 열기→제품 이동→닫힘 상태 정상                                   |
| FAQ                                     | 클릭 시 상세 내용 확장 정상                                          |
| 문의                                    | 미확인 전화·이메일 링크 및 전송폼 없음                               |
| 내부 링크                               | 19개 내부 경로 응답 200                                              |
| 정적 파일                               | sitemap.xml, robots.txt, 404.html 제공 확인                          |
| 브라우저 런타임                         | pageerror 0                                                          |

처음 자동 접근성 검사에서 발견된 보조문구·푸터 색상 대비 문제는 수정 후 전체 재검사했습니다. 캡처는 [데스크톱](previews/home-desktop.png), [모바일](previews/home-mobile.png), 원시 요약은 [browser-results.json](browser-results.json)을 참고하세요.

## 재현

프로젝트 의존성 설치·빌드 후 별도 터미널에서 `npm start`를 실행합니다. 브라우저 도구는 운영 의존성에 포함하지 않았습니다.

```sh
npm install --prefix work/test --no-package-lock playwright @axe-core/playwright
# Chromium이 없는 환경은 브라우저 도구의 공식 설치 절차로 설치 후 경로 지정
CHROMIUM_PATH=/usr/bin/chromium node scripts/verify-browser.mjs
```

`TEST_BASE_URL`로 검사할 서버 주소를 변경할 수 있습니다. 결과와 캡처는 git에서 제외되는 `work/`에 생성됩니다. Linux 컨테이너용 Chromium 실행에 `--no-sandbox`를 사용하므로 개발 검증 환경에서만 실행하세요.

## 범위와 한계

- 자동 접근성 검사는 수동 스크린리더 및 전체 키보드 검토를 대체하지 않습니다. focus 표시·본문 건너뛰기·semantic heading·버튼 상태를 구현했습니다.
- Chromium에서 검증했습니다. Safari/iOS 및 실물 기기는 검증하지 않았습니다.
- 실제 제품 사진·모델·사양·현장 자료가 없어 해당 자료의 정확성·화질은 검증하지 않았습니다. 현재 빈 이미지 fallback은 각 화면에서 표시됩니다.
- 회사 대표 연락처와 실제 문의 수신 방식 미확정. 전송 기능이나 앱 다운로드를 제공하지 않습니다.
- Cloudtype 실제 배포, 도메인 연결, 외부 지도 서비스 상태, 소셜 플랫폼 OG 캐시 검증은 수행하지 않았습니다.
- 실제 회사정보, 고객 공개 승인 및 공급 범위 확인은 별도 필요합니다.
- 원격 main에 기준 커밋이 없어 PR은 생성 요청 결과에 따라 제한됩니다. main을 임의 생성·수정하지 않습니다.

## GitHub 반영 결과

작업 브랜치 `codex/koryo-corporate-website` 최초 커밋 `02ff6b5` push 성공. 원격 ref 목록에는 작업 브랜치만 존재하고 `main`은 없습니다. GitHub 커넥터로 지정 제목·본문·head·base를 사용해 실제 PR 생성 요청을 수행했으나 다음 오류로 거부되었습니다.

```json
{"status":422,"message":"Validation Failed","errors":[{"resource":"PullRequest","field":"base","code":"invalid"}]}
```

PR URL은 생성되지 않았습니다. main 직접 커밋·생성, PR 병합, 자동 병합, 자동 배포를 수행하지 않았습니다. 저장소 관리자가 main 초기화 방침을 확정해 기준 커밋을 만든 뒤, 작업 브랜치 변경을 해당 기준 이력 위에 연결하여 PR을 재요청해야 합니다. 최초 이력이 서로 독립적인 경우 README 충돌 등을 검토하며 rebase 또는 변경 이식을 수행해야 합니다. 승인 없이 main을 초기화하지 않습니다. 준비된 본문은 [pull-request.md](pull-request.md)에 있습니다.
