import { notFound } from 'next/navigation';

type Props = { params: { id: string } };

export default function ItemPage({ params }: Props) {
  const idNum = Number(params.id);
  if (Number.isNaN(idNum) || idNum < 1 || idNum > 100) notFound();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-500 text-white">
      <h2 className="text-3xl font-semibold mb-4">这是第 {params.id} 行的详情页</h2>
      <p className="opacity-80">页面背景是绿色 ✅</p>
    </main>
  );
}
