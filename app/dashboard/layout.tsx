"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const linkData =[
    {name: "About", path: "/dashboard/about"},
    {name: "Settings", path: "/dashboard/settings"},

]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0)

    const pathname = usePathname()
    
  return (
//mx-auto 居中
    <div className="border-2 border-dashed border-red-500 p-4 w-1/2 mx-auto mt-4">
        {/**gap-4 间距设置为4 */}
        <div className="flex gap-4 font-bold text-lg mb-4 text-white"> {
            linkData.map((link) => (
                <Link key={link.path} className={pathname === link.path? "text-purple-500" : ""} href={link.path}>{link.name}
                </Link>
            ))
        }
        
        </div>
        <h2>Dashboard Layout {count}</h2>
        <button className="bg-green-500 text-white p-2 m-4 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>

        {children}
    </div>

  );
}