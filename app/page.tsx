// app/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // 生成 1–100 这 100 行示例数据
  const rows = Array.from({ length: 100 }, (_, i) => i + 1);

  // 获取指定行的显示文本
  const getRowText = (rowNumber: number, customText?: string) => {
    if (customText) {
      return customText;
    }
    return `第 ${rowNumber} 行，点我查看`;
  };

  return (
    <main className="flex-1 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">滑动列表</h1>

      {/* 列表容器：固定高度，可滚动 */}
      <ul className="w-full max-w-md h-[600px] overflow-y-auto border rounded shadow-sm">
        {rows.map((num) => (
          <li
            key={num}
            /* 200 高度 + 浅绿背景 + 圆角4边框 + hover 变色 */
            className="h-[96px] flex items-center border border-gray-300 rounded mb-2 px-4"
            style={{ backgroundColor: '#f0fdf4' }} // 浅绿色背景
          >
            {/* 头像图片：50x50 圆角 */}
            <div className="flex-shrink-0 mr-[30px]">
              <Image
                src="/aaa.jpeg"
                alt="头像"
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
            </div>

            {/* 链接文本；字体 26px；左对齐 */}
            <Link
              href={`/item/${num}`}
              className="flex-1 text-left text-[26px] no-underline"
              style={{ color: '#f97316' }}
            >
              {getRowText(num,
                num === 1 ? '测试Layout&Templelate' :
                num === 2 ? '测试456' :
                undefined
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
