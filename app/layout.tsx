import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Career OS · Week 2', description: '데이터와 현실 실험으로 진로 불확실성을 줄이는 Career OS' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
