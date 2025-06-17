
// "use client"

import React from 'react'

import { List, Avatar } from 'antd'

import {data} from '@/data'
import Link from 'next/link'

import { Metadata } from 'next'

import BlogList from '@/components/bloglist'


export const metadata: Metadata = {
  title: '博客列表',
  description: '博客列表',
}

export default function page() {
  return (
    <BlogList />
  )
}
