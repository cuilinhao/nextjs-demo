// app/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // 生成 1–100 这 100 行示例数据
  const rows = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <main className="flex-1 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">滑动列表</h1>

      {/* 列表容器：固定高度，可滚动 */}
      <ul className="w-full max-w-md h-[600px] overflow-y-auto border rounded shadow-sm">
        {rows.map((num) => (
          <li
            key={num}
            /* 200 高度 + 浅绿背景 + 圆角4边框 + hover 变色 */
            className="h-[96px] flex items-left border border-gray-300 rounded mb-2 px-4"
            style={{ backgroundColor: '#f0fdf4' }} // 浅绿色背景
          >
            {/* 头像图片：50x50 圆角 */}
            <div className="flex-shrink-0 mr-[30px]">
              <Image
                src="/aaa.jpeg"
                alt="头像"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </div>

            {/* 链接占满剩余空间；字体 26px；水平居中 */}
            <Link
              href={`/item/${num}`}
              className="flex-1 text-center text-[26px]"
            >
              第 {num} 行，点我查看
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
