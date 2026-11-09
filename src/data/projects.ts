export type Project = {
  id: string;
  slug: string;
  name: string;
  location: string;
  solutions: string[];
  images: { src: string; alt: string }[];
  description: string;
  status: "pending" | "approved";
};
export const projects: Project[] = [
  {
    id: "pending",
    slug: "upcoming",
    name: "설치사례 등록 예정",
    location: "공개 승인 후 등록",
    solutions: [],
    images: [],
    description:
      "고객사 공개 승인을 받은 실제 현장만 소개합니다. 현장명, 위치, 적용 솔루션과 설치 사진은 확인 후 등록됩니다.",
    status: "pending",
  },
];
