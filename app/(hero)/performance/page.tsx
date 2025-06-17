import React from 'react'

import Hero from '@/components/hero'

import { Metadata } from 'next'

//静态元数据
export const metadata: Metadata = {
  title: "performance",
}



export default function page() {
  return (
    <Hero imgUrl="/performance.jpg" altTxt="performance" content="performance" />
  )
}

