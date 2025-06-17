import React from 'react'
import Image, { StaticImageData } from 'next/image'
// import homeSrc from '/public/home.jpg'


interface HeroProps {
    imgUrl: string;
    altTxt: string;
    content: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className=" h-screen relative">
      <div className='absolute inset-0 -z-10'>
        {/* fill 图片都弹窗，不让出现滚动条，object-cover 图片自适应 */}
        <Image src={props.imgUrl} alt={props.altTxt} fill className="object-cover"/>
        <div className='absolute inset-0 bg-gradient-to-r from-green-950'>
        </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl text-white font-bold">
          {props.content}
        </h1>
       </div>
      </div>
  )
}
