import React from 'react'
import Image from 'next/image'
// import homeSrc from '/public/home.jpg'
// import Hero from '../components/hero'
import Hero from '@/components/hero'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Home",
   icons: {
    icon: '/favicon.ico',
  },
}

export default function page() {
  return (
    <Hero imgUrl="/home.jpg" altTxt="home" content="Home" />
  )
}
