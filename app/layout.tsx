// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';

export const metadata = { title: '滑动列表 Demo', description: 'Next.js 跳转示例' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
