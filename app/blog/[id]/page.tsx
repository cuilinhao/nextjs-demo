import React from 'react'
// import Card from 'antd/es/card/Card'
import { Card } from 'antd'
import data from '@/data'

//拿到URl 传过来的id

//传过来的id是strig， 转成int 前面写加号
export default function page({params}: {params: {id: string }}) {
    const item = data.find(item => item.id === +params.id)

  return (
    <Card title={item?.title}>
      <p>{item?.body}</p>
    </Card>
  )
}
