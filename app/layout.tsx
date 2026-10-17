import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Careerfolio · 나의 경험에서 다음 가능성으로', description: '심리학·제품·AI·비즈니스를 연결하는 개인 진로 포트폴리오. 경험과 강점의 근거, 진로 탐색, 실제 채용공고를 함께 기록합니다.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
