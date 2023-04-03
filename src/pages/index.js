import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '../../components/Header'
import Trending from '../../components/Trending'
import Posts from '../../components/Posts'
import Popular from '../../components/Popular'
import Recent from '../../components/Recent'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Trending />
      <Posts />
      <Popular />
      <Recent />
    </>
  )
}
