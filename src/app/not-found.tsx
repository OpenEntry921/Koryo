import { Button } from "@/components/ui";
export default function NotFound() {
  return (
    <div className="container section empty-panel">
      <p className="eyebrow">404</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>주소를 확인하거나 홈페이지에서 다시 탐색해 주세요.</p>
      <Button href="/">홈으로 이동</Button>
    </div>
  );
}
