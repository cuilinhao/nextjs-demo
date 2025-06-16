// app/files/page-a/page.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function PageA() {
  const [count1, setCount1] = useState(5);
  const [count2, setCount2] = useState(3);

  return (
    <main className="min-h-screen bg-green-500 p-8">
      <div className="max-w-4xl mx-auto">
        {/* 顶部导航 */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-white hover:text-green-200 text-lg"
          >
            ← 返回首页
          </Link>
        </div>

        {/* 主要内容区域 - 白色背景 */}
        <div className="bg-white rounded-lg p-8 border-4 border-dashed border-gray-400">
          {/* 标题 */}
          <div className="flex space-x-8 mb-8">
            <h1 className="text-3xl font-bold text-purple-500">About</h1>
            <h1 className="text-3xl font-bold text-purple-500">Settings</h1>
          </div>

          {/* Dashboard Layout 5 部分 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl text-gray-800">Dashboard Layout {count1}</span>
              <span className="text-red-500 text-lg">→ 路由切换时，这里会保持状态</span>
            </div>
            <button
              onClick={() => setCount1(count1 + 1)}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Increment
            </button>
          </div>

          {/* Dashboard Template 3 部分 */}
          <div className="border-4 border-dashed border-gray-400 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl text-gray-800">Dashboard Template {count2}</span>
              <span className="text-red-500 text-lg">→ 路由切换时，这里会恢复初始值</span>
            </div>
            <button
              onClick={() => setCount2(count2 + 1)}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Increment
            </button>

            {/* About Content */}
            <div className="mt-8 text-center">
              <h2 className="text-2xl text-gray-800">About Content</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
