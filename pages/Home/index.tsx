import React from 'react'
import Header from '../components/Header'
import LeftSideBar from '../components/LeftSideBar'
import Head from 'next/head'

const index = () => {

  return (
    <>
      <Head>
        <title>View-Eye || Home</title>
        <meta name="description" content="Generated by View-Eye" />
      </Head>
      <Header />
      <LeftSideBar />
    </>
  )
}

export default index