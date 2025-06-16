"use client"
import Link from "next/link";
import { useState } from "react";

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0)

  return (
//mx-auto 居中
    <div className="border-2 border-dashed border-red-500 p-4  mx-auto mt-4">

        <h2>Dashboard Template {count}</h2>
        <button className="bg-green-500 text-white p-2 m-4 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>

        {children}
    </div>

  );
}